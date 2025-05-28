import { NextRequest } from 'next/server';

export async function GET(request: NextRequest) {
  const { searchParams } = new URL(request.url);
  // 클라이언트가 taskId를 쿼리 파라미터로 보내면 사용하고, 아니면 고유 ID 생성
  const taskId = searchParams.get('taskId') || `simpleTask-${Date.now()}`;

  const stream = new ReadableStream({
    async start(controller) {
      console.log(`[SSE SimpleTask-${taskId}] 클라이언트 연결됨. 3초 작업 및 이벤트 스트림 시작.`);

      const sendSseEvent = (data: any, eventName?: string) => {
        let message = `event: ${eventName || 'message'}\n`; // 이벤트 이름 명시
        message += `data: ${JSON.stringify(data)}\n\n`;    // 데이터는 JSON 문자열로
        try {
          controller.enqueue(message);
        } catch (e) {
          console.error(`[SSE SimpleTask-${taskId}] controller.enqueue 에러 발생:`, e);
          // 스트림이 이미 닫혔을 가능성이 높음
          throw e; // 에러를 다시 throw하여 start 함수의 나머지 실행을 중단
        }
      };

      try {
        // 0. 연결 확인 이벤트 (선택 사항)
        sendSseEvent({ taskId, message: `Task ${taskId} SSE 스트림 시작됨.` }, "simpleTaskConnected");

        // 1. 1초 후 진행 이벤트
        await new Promise(resolve => setTimeout(resolve, 1000));
        sendSseEvent({ taskId, progress: 33, message: `Task ${taskId} 처리 중 (1/3)` }, "simpleTaskProgress");

        // 2. 2초 후 진행 이벤트
        await new Promise(resolve => setTimeout(resolve, 1000));
        sendSseEvent({ taskId, progress: 66, message: `Task ${taskId} 처리 중 (2/3)` }, "simpleTaskProgress");
        
        // 3. 3초 후 완료 이벤트
        await new Promise(resolve => setTimeout(resolve, 1000));
        sendSseEvent({ taskId, progress: 100, message: `Task ${taskId} 완료!` }, "simpleTaskCompleted");
        
        // 4. (선택적) 스트림 종료 이벤트 후 컨트롤러 닫기
        // await new Promise(resolve => setTimeout(resolve, 50)); // 짧은 딜레이
        // sendSseEvent({ taskId, message: `Task ${taskId} 스트림 종료.` }, "simpleStreamEnd");

      } catch (e) {
        console.error(`[SSE SimpleTask-${taskId}] 이벤트 전송 중 에러 발생:`, e);
      } finally {
        // 모든 이벤트 전송 후 또는 에러 발생 시 스트림을 확실히 닫음
        if (controller.desiredSize !== null) { // 컨트롤러가 아직 닫히지 않았다면
            try {
                controller.close();
            } catch (e) {
                // 이미 닫혔거나 다른 이유로 에러 발생 가능성 있음
                console.warn(`[SSE SimpleTask-${taskId}] controller.close() 중 에러:`, e);
            }
        }
        console.log(`[SSE SimpleTask-${taskId}] 스트림 처리 완료 및 종료.`);
      }
    },
    cancel(reason) {
      console.log(`[SSE SimpleTask-${taskId}] 스트림이 클라이언트에 의해 취소됨. 이유:`, reason);
      // start 내부의 async 함수가 자체적으로 타임아웃을 관리하므로,
      // 여기서 특별히 clear 해야 할 intervalId는 없습니다.
    },
  });

  return new Response(stream, {
    headers: {
      'Content-Type': 'text/event-stream',
      'Cache-Control': 'no-cache',
      'Connection': 'keep-alive',
      'X-Accel-Buffering': 'no',
    },
  });
}
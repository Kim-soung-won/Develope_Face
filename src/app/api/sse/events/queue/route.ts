export const runtime = 'edge'; // Edge Runtime은 전 세계 여러 지역에 분산된 서버에서 코드를 실행하여 사용자에게 더 빠른 응답을 제공하기 위한 환경

import { NextRequest, NextResponse } from 'next/server';
import { sseBroadcaster } from '@/shared/libs/event'; 

const encoder = new TextEncoder(); // TextEncoder 인스턴스를 파일 스코프 또는 GET 함수 내에 생성

export async function GET(request: NextRequest) {
  let currentController: ReadableStreamDefaultController | null = null;

  const stream = new ReadableStream({
    start(controller) {
      currentController = controller;
      console.log('[SSE Route] GET: Client connected.');
      sseBroadcaster.addClient(controller); // broadcaster에 controller 등록

      try {
        // 초기 연결 메시지를 Uint8Array로 인코딩하여 전송
        const initialMessage = `event: connected\ndata: ${JSON.stringify({ message: "SSE 커넥션 성공!" })}\n\n`;
        controller.enqueue(encoder.encode(initialMessage));
        console.log('[SSE Route] GET: Initial "connected" message enqueued successfully.');
      } catch (e) {
        console.error('[SSE Route] GET: Error enqueuing initial connect message:', e);
        // 에러 발생 시 broadcaster에서 controller 제거 시도
        if (currentController) { // currentController가 아직 유효하다면
            sseBroadcaster.removeClient(currentController);
        }
      }
    },
    // route.ts의 cancel 콜백 내부
    cancel(reason) {
      const initialClientSize = sseBroadcaster.getClientCount ? sseBroadcaster.getClientCount() : 'N/A (before remove)';
      console.log(`[SSE Route GET - cancel] Stream cancelled. Reason: ${reason}. Controller: ${currentController ? 'exists' : 'null'}. Clients before remove: ${initialClientSize}`);
      if (currentController) {
        const controllerToRemove = currentController; 
        sseBroadcaster.removeClient(controllerToRemove);
        const finalClientSize = sseBroadcaster.getClientCount ? sseBroadcaster.getClientCount() : 'N/A (after remove)';
        console.log(`[SSE Route GET - cancel] sseBroadcaster.removeClient CALLED. Clients after remove: ${finalClientSize}`);
        currentController = null;
      } else {
        console.warn('[SSE Route GET - cancel] currentController was null, no removal from broadcaster.');
      }
    }
  });

  return new Response(stream, {
    headers: {
      'Content-Type': 'text/event-stream',
      'Cache-Control': 'no-cache, no-transform', // 프록시 캐싱 문제 방지를 위해 no-transform 추가 권장
      'Connection': 'keep-alive',
      'X-Accel-Buffering': 'no', // Nginx 등 리버스 프록시 사용 시 버퍼링 끄기
    },
  });
}

export async function POST(request: NextRequest) {
  try {
    const body = await request.json();
    const taskId = body.taskId as number;

    if (typeof taskId === 'undefined') {
      return NextResponse.json({ message: "taskId가 필요합니다." }, { status: 400 });
    }

    console.log(`[SSE Route] POST: Task ${taskId} 요청 수신. 3초 작업 시작 (초당 이벤트 발생).`);

    // 1초 후: 진행 이벤트 1
    setTimeout(() => {
      const progressData = {
        taskId: taskId,
        progress: 33,
        message: `작업 ID ${taskId} 처리 중 (1/3)...`,
      };
      // sseBroadcaster.sendEvent 내부에서 TextEncoder를 사용하여 메시지를 바이트로 변환해야 합니다.
      sseBroadcaster.sendEvent(progressData, "taskProgressUpdate", `task-${taskId}-progress-1`);
      console.log(`[SSE Route] Task ${taskId} 진행 이벤트 (1s) 전송됨.`);
    }, 1000);

    // 2초 후: 진행 이벤트 2
    setTimeout(() => {
      const progressData = {
        taskId: taskId,
        progress: 66,
        message: `작업 ID ${taskId} 처리 중 (2/3)...`,
      };
      sseBroadcaster.sendEvent(progressData, "taskProgressUpdate", `task-${taskId}-progress-2`);
      console.log(`[SSE Route] Task ${taskId} 진행 이벤트 (2s) 전송됨.`);
    }, 2000);

    // 3초 후: 완료 이벤트
    setTimeout(() => {
      const completionData = {
        taskId: taskId,
        progress: 100,
        message: `작업 ID ${taskId} 처리 완료!`,
        timestamp: new Date().toISOString(),
      };
      sseBroadcaster.sendEvent(completionData, "taskCompleted", `task-${taskId}-complete`);
      console.log(`[SSE Route] Task ${taskId} 완료 이벤트 전송됨.`);
    }, 3000);

    return NextResponse.json({ message: `Task ID ${taskId} 작업 시작됨 (3초 소요, 초당 이벤트 발생)` });

  } catch (error: any) {
    console.error("[SSE Route] POST 핸들러 에러:", error);
    return NextResponse.json({ message: "요청 처리 중 서버 에러 발생", error: error.message }, { status: 500 });
  }
}
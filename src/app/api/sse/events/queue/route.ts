export const runtime = 'edge'; // Edge Runtime은 전 세계 여러 지역에 분산된 서버에서 코드를 실행하여 사용자에게 더 빠른 응답을 제공하기 위한 환경

import { NextRequest, NextResponse } from 'next/server';
import { sseBroadcaster } from '@/shared/libs/event';

export async function GET(request: NextRequest) {
  let currentController: ReadableStreamDefaultController | null = null;

  const stream = new ReadableStream({
    start(controller) {
      currentController = controller;
      console.log('[SSE Route] GET: Client connected.');
      sseBroadcaster.addClient(controller);
      try {
        controller.enqueue(`event: connected\ndata: ${JSON.stringify({ message: "SSE 커넥션 성공!" })}\n\n`);
      } catch (e) {
        console.error('[SSE Route] GET: Error enqueuing initial connect message:', e);
        sseBroadcaster.removeClient(controller);
      }
    },
    cancel(reason) {
      console.log('[SSE Route] GET: Client disconnected or stream cancelled.', reason);
      if (currentController) {
        sseBroadcaster.removeClient(currentController);
        currentController = null;
      }
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
const clients = new Set<ReadableStreamDefaultController>();
const encoder = new TextEncoder(); // TextEncoder 인스턴스 생성

function broadcast(data: any, eventName?: string, eventId?: string) {
  let messageString = "";
  if (eventId) messageString += `id: ${eventId}\n`;
  if (eventName) messageString += `event: ${eventName || 'message'}\n`; // 기본 이벤트 이름 'message'
  messageString += `data: ${typeof data === 'string' ? data : JSON.stringify(data)}\n\n`;

  const messageBytes = encoder.encode(messageString);
  const deadControllers: ReadableStreamDefaultController[] = []; // 제거할 컨트롤러 목록

  clients.forEach((controller) => {
    try {
      // controller.signal.aborted 와 같은 표준 속성으로 미리 확인하는 것은 ReadableStreamDefaultController에 직접 없음
      // 따라서 enqueue 시도 후 에러로 판단
      controller.enqueue(messageBytes);
    } catch (e) {
      console.error("Error enqueuing to client (broadcaster), marking for removal:", e);
      deadControllers.push(controller); // 바로 제거하지 않고, 반복 후 제거
    }
  });

  deadControllers.forEach(controller => clients.delete(controller));
}

export const sseBroadcaster = {
  addClient: (controller: ReadableStreamDefaultController) => {
    clients.add(controller);
    console.log(`[Broadcaster] Client added. Total clients: ${clients.size}`);
  },
  removeClient: (controller: ReadableStreamDefaultController) => {
    const isDeleted = clients.delete(controller);
    if (isDeleted) {
      console.log(`[Broadcaster] Client removed. Total clients: ${clients.size}`);
    } else {
      // console.log(`[Broadcaster] Attempted to remove client, but not found. Total clients: ${clients.size}`);
    }
  },
  sendEvent: (data: any, eventName?: string, eventId?: string) => {
    broadcast(data, eventName, eventId);
  },
  getClientCount: () => clients.size,
};
const clients = new Set<ReadableStreamDefaultController>();
const encoder = new TextEncoder(); // TextEncoder 인스턴스 생성

function broadcast(data: any, eventName?: string, eventId?: string) {
  let messageString = "";
  if (eventId) messageString += `id: ${eventId}\n`;
  if (eventName) messageString += `event: ${eventName || 'message'}\n`; // 기본 이벤트 이름 'message'
  messageString += `data: ${typeof data === 'string' ? data : JSON.stringify(data)}\n\n`;

  const messageBytes = encoder.encode(messageString); // 문자열을 Uint8Array로 인코딩

  const clientsCopy = new Set(clients); // 반복 중 Set 변경 문제를 피하기 위해 복사본 사용 (선택적이지만 안전)
  clientsCopy.forEach((controller) => {
    try {
      controller.enqueue(messageBytes); // 인코딩된 바이트 배열을 enqueue
    } catch (e) {
      console.error("Error enqueuing to client (broadcaster), removing client:", e);
      clients.delete(controller); // 에러 발생 시 해당 클라이언트 제거
      // 필요하다면 controller.error(e) 호출도 고려
    }
  });
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
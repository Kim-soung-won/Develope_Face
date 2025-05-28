const clients = new Set<ReadableStreamDefaultController>();

function broadcast(data: any, eventName?: string, eventId?: string) {
  let message = "";
  if (eventId) message += `id: ${eventId}\n`;
  if (eventName) message += `event: ${eventName}\n`;
  message += `data: ${JSON.stringify(data)}\n\n`; // 데이터를 JSON 문자열로 변환

  console.log(`Broadcasting to ${clients.size} clients: ${message.trim()}`);
  clients.forEach((controller) => {
    try {
      controller.enqueue(message);
    } catch (e) {
      console.error("Error enqueuing to client, removing client:", e);
      clients.delete(controller); // 에러 발생 시 해당 클라이언트 제거
      controller.error(e); // 스트림에 에러 전파
    }
  });
}

export const sseBroadcaster = {
  addClient: (controller: ReadableStreamDefaultController) => {
    clients.add(controller);
    console.log(`Client added. Total clients: ${clients.size}`);
  },
  removeClient: (controller: ReadableStreamDefaultController) => {
    clients.delete(controller);
    console.log(`Client removed. Total clients: ${clients.size}`);
  },
  sendEvent: (data: any, eventName?: string, eventId?: string) => {
    broadcast(data, eventName, eventId);
  },
};
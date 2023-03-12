import type { IncomingMessage, ServerResponse } from 'http';

export const createResponse = (res: ServerResponse, status: number, data?: any) => {
  res.statusCode = status;
  res.setHeader('Content-Type', 'application/json');
  if (data) {
    return res.end(JSON.stringify(data));
  }
  return res.end();
};

export const parseBody = (req: IncomingMessage) => new Promise<any>(async resolve => {
  const buffers = [];
  for await (const chunk of req) {
    buffers.push(chunk);
  }
  const data = Buffer.concat(buffers).toString();
  resolve(JSON.parse(data));
});

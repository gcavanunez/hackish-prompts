import { ChatGPTUnofficialProxyAPI } from 'chatgpt';

export default defineEventHandler(async (event) => {
  const body = await readBody<{ text: string }>(event);

  if (!body?.text) {
    return "Hey you didn't send any text";
  }

  const api = new ChatGPTUnofficialProxyAPI({
    accessToken: useRuntimeConfig().accessToken,
  });

  const res = await api.sendMessage(body.text);
  return res.text;
});

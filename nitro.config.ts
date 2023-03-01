import { defineNitroConfig } from 'nitropack';

export default defineNitroConfig({
  runtimeConfig: {
    accessToken: process.env['OPENAI_ACCESS_TOKEN'],
  },
});

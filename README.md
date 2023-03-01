# Hackish prompt

## Steps to run

**Make sure you are running node 18+** 

1. Copy `.env.example` -> `.env`
2. Add `OPENAI_ACCESS_TOKEN` extracted from the ChatGPT site's `https://chat.openai.com/api/auth/session` response accessToken
3. Do a post request to  `http://localhost:3000/chat/` with the following payload
```
{
  "text": "Here would go whatever prompt you have to ask the ai with"
}
```

## More info around dependencies 

- [Nitro](https://nitro.unjs.io/)
- [chatgpt-api](https://github.com/transitive-bullshit/chatgpt-api)

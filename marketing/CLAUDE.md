@AGENTS.md

# Server Rules

- Do not use `kill`, `pkill`, `taskkill`, `lsof -t | xargs kill`, or any process-killing commands. If a server needs stopping, instruct the user to do it manually.
- Start the dev server with `npm run dev -- -p 3004 &` when needed. Do not use `run_in_background` or `nohup`.
- Never restart the dev server unless the user explicitly asks. Next.js has hot reload.

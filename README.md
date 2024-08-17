node: 20.11
require docker desktop, run this command: docker compose -p tuan-mongo-db up -d

currently at: 3:07:06 
https://www.youtube.com/watch?v=fthiw89XG4s&t=2550s



debug launch.json code:
{
  // Use IntelliSense to learn about possible attributes.
  // Hover to view descriptions of existing attributes.
  // For more information, visit: https://go.microsoft.com/fwlink/?linkid=830387
  "version": "0.2.0",
  "configurations": [
    {
      "type": "node",
      "request": "launch",
      "name": "Nest Debug",
      "runtimeExecutable": "npm",
      "runtimeArgs": ["run", "start:debug", "--", "--inspect-brk"],
      "console": "integratedTerminal",
      "restart": true,
      "protocol": "auto",
      "port": 9229,
      "autoAttachChildProcesses": true
    }
  ]
}
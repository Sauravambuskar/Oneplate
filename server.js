const express = require("express");
const next = require("next");

const port = Number(process.env.PORT) || 3000;
const dev = !process.argv.includes("--production");
const nextApp = next({ dev });
const handle = nextApp.getRequestHandler();

nextApp.prepare().then(() => {
  const server = express();

  server.disable("x-powered-by");
  server.use(express.json({ limit: "100kb" }));

  server.get("/api/health", (_request, response) => {
    response.json({ status: "ok", organization: "PlateHope Foundation" });
  });

  server.use((request, response) => handle(request, response));

  server.listen(port, () => {
    console.log(`PlateHope Foundation is ready at http://localhost:${port}`);
  });
});

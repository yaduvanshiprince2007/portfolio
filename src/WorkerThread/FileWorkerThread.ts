import { parentPort } from "worker_threads";
import fs from "fs/promises";

function getDocumentWord(): Promise<string> {
  const filePath = "./assets/Prince_Yadav.docx";
  return fs.readFile(filePath, "utf-8");
}

parentPort?.on("message", async () => {
  const content = await getDocumentWord();
  parentPort?.postMessage(content);
});

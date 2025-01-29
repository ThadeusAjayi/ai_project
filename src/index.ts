import { initializeDeepseek, initializeOpenAi } from "./ai_api";

export * from "./ai_api";
export * from "./types";

initializeDeepseek();
initializeOpenAi();

import { defineCliConfig } from "sanity/cli";

export default defineCliConfig({
  api: {
    projectId: process.env.SANITY_STUDIO__PROJECT_ID,
    dataset: "production",
  },
});

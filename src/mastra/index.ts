
import { Mastra } from '@mastra/core/mastra';
import { createLogger } from '@mastra/core/logger';
import { weatherWorkflow } from './workflows';
import { qiitaPostSummarizeAgent, weatherAgent } from './agents';

export const mastra = new Mastra({
  workflows: { weatherWorkflow },
  agents: { weatherAgent, qiitaPostSummarizeAgent },
  logger: createLogger({
    name: 'Mastra',
    level: 'info',
  }),
});

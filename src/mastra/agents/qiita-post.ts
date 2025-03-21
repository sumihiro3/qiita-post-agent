import { getQiitaPostTool } from '../tools/qiita-post';
import { Agent } from '@mastra/core/agent';
import { openai } from '@ai-sdk/openai';

/**
 * Qiita 記事の要約を生成するエージェント
 */
export const qiitaPostSummarizeAgent = new Agent({
  name: 'Qiita Post Summarize Agent',
  instructions: `
    あなたはプロの編集者です。ユーザーから与えられたインプットを、要点を逃さない形で要約します。
    要約の読み手は日本のエンジニアです。エンジニアが読んで理解しやすい内容にすると喜ばれます。

    ## 制約
      - 要約は800文字程度で出力します
      - 難しい漢字は読み手が間違えないように、ひらがなで書きます
      - 要約には markdown の記法やコード、改行コード、URL は含めないでください
  `,
  model: openai('gpt-4o-mini'),
  tools: { getQiitaPostTool },
});


# Qiita Post Agent

An AI agent for posting articles to Qiita. It automates article creation and posting using OpenAI's API.

## Overview

This project provides an agent for posting articles to Qiita using OpenAI's API. It is implemented in TypeScript and uses the Mastra Framework.

## Environment Setup

To run the project, you need to set up the following environment variables.

Create a `.env.development` file with the following content:

```env
OPENAI_API_KEY=your_openai_api_key
QIITA_API_KEY=your_qiita_api_key
```

### Required API Keys

- **OpenAI API Key**: Key for using OpenAI's API
- **Qiita API Key**: Key for using Qiita's API

## How to Run

### 1. Install dependencies

```bash
yarn install
```

### 2. Start the development server

```bash
yarn dev
```

### 3. Open Mastra Playground and run the agent

Open `[Mastra Playground](http://localhost:4111/) and try the agent!

## Tech Stack

- TypeScript
- Mastra Framework
- OpenAI API
- Qiita API

## License

This project is licensed under the MIT License - see the [LICENSE](LICENSE) file for details.

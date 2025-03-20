# Qiita Post Agent

An AI agent that summarizes Qiita posts using OpenAI's API. It helps you quickly understand the content of Qiita articles by generating concise summaries.

## Overview

This project provides an agent that creates summaries of Qiita posts using OpenAI's API. It is implemented in TypeScript and uses the Mastra Framework to process and analyze Qiita articles. The Mastra Framework enables us to create a powerful AI agent that can interact with Qiita's API and generate summaries using OpenAI's language models. The framework provides a structured way to handle API interactions, manage state, and create a user-friendly interface through the Mastra Playground.

## Environment Setup

To run the project, you need to set up the following environment variables.

Create a `.env.development` file with the following content:

```env
OPENAI_API_KEY=your_openai_api_key
QIITA_API_KEY=your_qiita_api_key
```

### Required API Keys

- **OpenAI API Key**: Key for using OpenAI's API to generate summaries
- **Qiita API Key**: Key for accessing Qiita's API to fetch articles

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

Open [Mastra Playground](http://localhost:4111/) and try the agent!

## Tech Stack

- TypeScript
- Mastra Framework
- OpenAI API
- Qiita API

## License

This project is licensed under the MIT License - see the [LICENSE](LICENSE) file for details.

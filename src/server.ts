#!/usr/bin/env node

import { StdioServerTransport } from '@modelcontextprotocol/sdk/server/stdio.js';
import createStatelessServer from './index.js';

async function main() {
  try {
    // Create the MCP server
    const server = createStatelessServer({ config: {} });

    // Create stdio transport
    const transport = new StdioServerTransport();

    // Connect server to stdio transport
    await server.connect(transport);
    
    console.error('MCP Weather Server started and listening on stdio');
  } catch (error) {
    console.error('Failed to start MCP server:', error);
    process.exit(1);
  }
}

// Handle graceful shutdown
process.on('SIGINT', async () => {
  console.error('Shutting down MCP server...');
  process.exit(0);
});

process.on('SIGTERM', async () => {
  console.error('Shutting down MCP server...');
  process.exit(0);
});

main().catch((error) => {
  console.error('Unexpected error:', error);
  process.exit(1);
}); 
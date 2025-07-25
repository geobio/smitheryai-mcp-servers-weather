#!/usr/bin/env node

import { fileURLToPath } from 'url';
import { dirname, join } from 'path';

const __filename = fileURLToPath(import.meta.url);
const __dirname = dirname(__filename);

// Import the compiled MCP server
const serverModulePath = join(__dirname, '..', 'dist', 'server.js');

try {
  await import(serverModulePath);
} catch (error) {
  console.error('Failed to start weather MCP server:', error.message);
  console.error('Make sure to run "npm run build" first or install the package properly.');
  process.exit(1);
} 
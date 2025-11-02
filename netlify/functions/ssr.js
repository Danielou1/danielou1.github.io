import serverless from 'serverless-http';
import { expressApp } from './ssr-app/server.mjs'; // Assuming expressApp is exported from server.mjs

const handler = serverless(expressApp);

export { handler };

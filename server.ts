import 'zone.js/node';
import { CommonEngine } from '@angular/ssr/node';
import { render } from '@netlify/angular-runtime/common-engine.mjs';

// Adjust this import to your server module path (e.g. './src/main.server' or './src/app/app.server.module')
import { AppServerModule } from './src/main.server';

const engine = new CommonEngine(AppServerModule);

// Export the Netlify handler
export const handler = (event: any, context: any) => render({ event, context, engine });
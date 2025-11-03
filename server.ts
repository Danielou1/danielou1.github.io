import { CommonEngine } from '@angular/ssr/node';
import { render } from '@netlify/angular-runtime/common-engine.mjs';

// Adjust the import path to the server bundle produced by your build
import { AppServerModule } from './dist/danielou-portfolio/server/main';

const engine = new CommonEngine(AppServerModule);
export const handler = render(engine);

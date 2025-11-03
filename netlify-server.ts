import { CommonEngine } from '@angular/ssr/node';
import { render } from '@netlify/angular-runtime/common-engine.mjs';

const engine = new CommonEngine({
  bootstrap: () => import('./dist/danielou-portfolio/server/server.mjs') // Corrected path
});

export const handler = render(engine); // Corrected render call
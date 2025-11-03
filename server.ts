import { CommonEngine } from '@angular/ssr/node';
import { render } from '@netlify/angular-runtime/common-engine.mjs';

// Adjust this path to your SSR bundle location
const engine = new CommonEngine({
  bootstrap: () => import('./dist/danielou-portfolio/server/main')
});

export default async function handler(event: any, context: any) {
  return render(event, context, engine);
}

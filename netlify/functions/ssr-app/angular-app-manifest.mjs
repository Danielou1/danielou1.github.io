
export default {
  bootstrap: () => import('./main.server.mjs').then(m => m.default),
  inlineCriticalCss: true,
  baseHref: '/',
  locale: undefined,
  routes: undefined,
  entryPointToBrowserMapping: {
  "src/app/components/giant-screen/giant-screen.component.ts": [
    {
      "path": "chunk-FMK2ZP5W.js",
      "dynamicImport": false
    }
  ]
},
  assets: {
    'index.csr.html': {size: 17865, hash: '578cffd86fc3007a466deb12d1a323b46b9ed2fa4fca34207ab0b7f4c156eb47', text: () => import('./assets-chunks/index_csr_html.mjs').then(m => m.default)},
    'index.server.html': {size: 16678, hash: 'c21776e835336c07e06c0808a081adc943a57181682843e7d00369989e0d897a', text: () => import('./assets-chunks/index_server_html.mjs').then(m => m.default)},
    'styles-LKVEJOJH.css': {size: 5898, hash: 'W3OQULSHhVE', text: () => import('./assets-chunks/styles-LKVEJOJH_css.mjs').then(m => m.default)}
  },
};

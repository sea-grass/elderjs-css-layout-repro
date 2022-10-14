# elderjs-css-layout-repro

This repo demonstrates an issue where a route will receive imported CSS from other layouts.

1. Create two routes [`simple`](./src/routes/simple) and [`other`](./src/routes/other) and configure them to use layouts [`Layout.svelte`](./src/layouts/Layout.svelte) and [`Other.svelte`](./src/layouts/Other.svelte), respectively.
2. Create two CSS files, [`simple.css`](./src/assets/simple.css) and [`other.css`](./src/assets/other.css). Inside the script tag of each layout, import their respective CSS file.
3. Bug: Start the dev server and navigate to one of your routes. You'll see that on both routes, both `simple.css` and `other.css` are loaded.
    - Expected behaviour: On the simple route, only `simple.css` is loaded. On the other route, only `other.css` is loaded.
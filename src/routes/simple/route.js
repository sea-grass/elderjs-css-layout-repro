module.exports = {
  all: async () => [{ slug: 'simple' }],
  permalink: '/:slug/', // this is the same as ({ request }) => `/${request.slug}/`;
  data: async ({ request }) => {
    return {
      title: 'Simple',
    }
  },

  // template: 'Simple.svelte' // this is auto-detected.
  layout: 'Layout.svelte' // this is auto-detected.
};

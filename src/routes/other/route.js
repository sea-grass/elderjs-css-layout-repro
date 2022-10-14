module.exports = {
  all: async () => [{ slug: 'other' }],
  permalink: '/:slug/', // this is the same as ({ request }) => `/${request.slug}/`;
  data: async ({ request }) => {
    return {
      title: 'Other',
    }
  },

  // template: 'Simple.svelte' // this is auto-detected.
  layout: 'Other.svelte' // this is auto-detected.
};

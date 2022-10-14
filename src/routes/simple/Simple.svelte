<script>
  export let data, request, settings;
</script>

<svelte:head>
  <title>{data.title}</title>
</svelte:head>

<a href="/simple">Simple</a>

<a href="/other">Other</a>

<h1>{data.title}</h1>
{@html data.content}

<script context="module">
  export async function preload(page) {
    return this.fetch(
      "http://localhost:2368/ghost/api/v2/content/pages/?key=3a0d5f42eef6297bed693c32ff"
    )
      .then((res) => {
        return res.json();
      })
      .then((data) => {
        const pagename = page.path;
        data.pages = data.pages.filter((i) => pagename.includes(i.slug));
        return { pagedata: data.pages[0] };
      });
  }
</script>

<script>
  export let pagedata;
</script>

<svelte:head>
  <title>{pagedata.title}</title>
</svelte:head>

<div class="content">
  <h1>{pagedata.title}</h1>
  {@html pagedata.html}
</div>

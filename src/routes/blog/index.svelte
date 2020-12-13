<script context="module">
  export async function preload(page) {
    return this.fetch(
      "http://localhost:2368/ghost/api/v2/content/posts/?key=3a0d5f42eef6297bed693c32ff"
    )
      .then((res) => {
        return res.json();
      })
      .then((data) => {
        return { posts: data.posts };
      });
  }
</script>

<script>
  export let posts;
</script>

<svelte:head>
  <title>Blog</title>
</svelte:head>

<ul>
  {#each posts as post}
    <li><a rel="prefetch" href="blog/{post.slug}">{post.title}</a></li>
  {/each}
</ul>

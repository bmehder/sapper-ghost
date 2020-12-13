<script>
  export let segment;
</script>

<nav>
  <ul>
    <li>
      <a
        rel="prefetch"
        class={segment === 'home' ? 'selected' : ''}
        href="home">Home</a>
    </li>
    <li>
      <a
        rel="prefetch"
        class={segment === 'about-us' ? 'selected' : ''}
        href="about-us">About Us</a>
    </li>
    <li>
      <a
        rel="prefetch"
        class={segment === 'blog' ? 'selected' : ''}
        href="blog">Blog</a>
    </li>
  </ul>
</nav>

<style>
  .selected {
    font-weight: bold;
  }
</style>

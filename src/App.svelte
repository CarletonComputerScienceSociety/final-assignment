<script>
  import Router from 'svelte-spa-router';
  import {Footer, Navbar} from './components';
  import {Home, NotFound} from './pages';
  const routes = {
    '/': Home,
    '*': NotFound
  };
</script>

<Navbar />
<div style="margin-top: 6rem">
  <Router {routes} />
</div>
<Footer />

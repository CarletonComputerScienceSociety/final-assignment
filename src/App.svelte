<script>
  import Router from 'svelte-spa-router';
  import {Home, NotFound} from './pages';
  const routes = {
    '/': Home,
    '*': NotFound
  };
</script>

<Router {routes} />

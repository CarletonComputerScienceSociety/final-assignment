<script>
  import {createEventDispatcher} from 'svelte';

  // props
  export let label;

  // onClick
  const dispatch = createEventDispatcher();

  const onClick = event => {
    dispatch('click', event);
  };
</script>

<button on:click={onClick}>
  <div>{label}</div>
</button>

<style type="text/scss">
  @import 'Button.scss';
</style>

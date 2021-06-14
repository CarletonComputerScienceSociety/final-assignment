<script>
  import {createEventDispatcher} from 'svelte';

  // props
  export let answer;
  export let state;

  console.log(state);

  // onClick
  const dispatch = createEventDispatcher();

  const onClick = event => {
    dispatch('click', event);
  };
</script>

<div class="answer" on:click={onClick}>
  <div class="answer-inner">
    <div class="answer-letter">{answer.letter})</div>
    <div class="answer-body">{answer.body}</div>
  </div>
</div>

<style type="text/scss">
  @import 'Answer.scss';
</style>

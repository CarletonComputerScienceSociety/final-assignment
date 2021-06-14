<script>
  import {Question} from '../../components';
  export let questions;
  export let state;
  console.log(state);
</script>

<div class="assignent">
  {#each questions as question}
    <div class="assignment-question">
      <Question
        {question}
        state={state.questions.find(q => q.index === questions.id)}
      />
    </div>
  {/each}
</div>

<style type="text/scss">
  @import 'Assignment.scss';
</style>

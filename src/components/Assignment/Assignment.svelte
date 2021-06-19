<script>
  import {Question} from '../../components';
  export let ui;
  export let object;
</script>

<div class="assignent">
  {#each ui.questions as question}
    <div class="assignment-question">
      <Question {question} assignment={object} />
    </div>
  {/each}
</div>

<style type="text/scss">
  @import 'Assignment.scss';
</style>

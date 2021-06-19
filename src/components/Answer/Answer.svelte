<script>
  // props
  export let answer;
  export let assignment;
  export let questionIndex;
</script>

<div
  class="answer {answer.state}"
  on:click={() =>
    assignment.setSelectedAnswer(questionIndex, answer.assignmentIndex)}
>
  <div class="answer-inner">
    <div class="answer-letter">{answer.letter})</div>
    <div class="answer-body">{answer.body}</div>
  </div>
</div>

<style type="text/scss">
  @import 'Answer.scss';
</style>

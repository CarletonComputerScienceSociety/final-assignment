<script>
  import {Answer} from '../../components';
  export let question;
  export let assignment;
</script>

<div class="question">
  <div class="question-container">
    <div class="question-number">{question.id}.</div>
    <div class="question-body">{question.body}</div>
  </div>
  {#each question.answers as answer}
    <Answer {answer} {assignment} questionIndex={question.assignmentIndex} />
  {/each}
</div>

<style type="text/scss">
  @import 'Question.scss';
</style>

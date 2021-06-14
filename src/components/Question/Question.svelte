<script>
  import {Answer} from '../../components';
  import {questions} from '../../data';
  export let question;
  export let state;
</script>

<div class="question">
  <div class="question-container">
    <div class="question-number">{question.id}.</div>
    <div class="question-body">{question.body}</div>
  </div>
  {#each question.answers as answer}
    <Answer
      {answer}
      state={state.answers.find(a => a.letter === answer.letter)}
    />
  {/each}
</div>

<style type="text/scss">
  @import 'Question.scss';
</style>

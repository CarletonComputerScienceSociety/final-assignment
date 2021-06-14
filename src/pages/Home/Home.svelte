<script>
  import {onMount} from 'svelte';
  import {assign} from 'svelte/internal';
  import {Button, Assignment} from '../../components';
  import {questions} from '../../data';
  let state;

  onMount(async () => {
    state = {
      questions: [],
      submitted: false
    };

    for (let i = 0; i < questions.length; i++) {
      let questionState = {
        id: questions[i].id,
        answers: []
      };

      for (let j = 0; j < questions[i].answers.length; j++) {
        let answerState = {
          answerIndex: j,
          letter: questions[i].answers[j].letter,
          selected: false
        };

        questionState.answers.push(answerState);
      }

      state.questions.push(questionState);
    }
  });

  const selectAnswer = (questionId, answerId) => {};

  const submitAssignment = () => {
    state.submitted = true;
    console.log(state);
  };
</script>

<div class="home-page">
  <div class="home-page-inner">
    <h1>Summer 2021 - Final Assignment</h1>
    {#if state}
      <Assignment {questions} {state} />
    {/if}
  </div>
  <div on:click={submitAssignment}>
    <Button label="submit" />
  </div>
</div>

<style type="text/scss">
  @import 'Home.scss';
</style>

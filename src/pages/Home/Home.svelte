<script>
  import {onMount} from 'svelte';
  import {Assignment, Button, Confetti} from '../../components';
  import {questions} from '../../data';
  import {Assignment as AssignmentState} from '../../model';

  let assignment = new AssignmentState(questions);
  let ui;
  let object;

  $: {
    ui = $assignment.getComponentFormat();
    object = $assignment;
  }

  onMount(async () => {
    assignment = $assignment;
    ui = assignment.getComponentFormat();
    object = assignment;
  });
</script>

<div class="home-page">
  <div class="home-page-inner">
    <div class="home-page-header">
      <h1>Summer 2021 - Final Assignment</h1>
      <p>
        Before you graduate, the School of Computer Science has tasked you with
        completing one final assignment. Pay careful attention to the Summer
        2021 convocation video and answer the following multiple choice
        questions to unlock a bonus congratulatory message from the School of
        Computer Science.
      </p>
    </div>
    <!-- svelte-ignore a11y-missing-attribute -->
    <img class="home-image" src="/outside_hp.jpeg" />
    {#if assignment}
      <Assignment {ui} {object} />
    {/if}
  </div>
  {#if !object.submitted}
    <div on:click={() => object.submit()}>
      <Button label="Submit" />
    </div>
  {/if}
  <div class="home-page-score">
    {#if object.submitted}
      <Confetti score={object.getScore()} maxScore={object.getMaxScore()} />
      <!--
      <h2>You Scored: {object.getDisplayScore()}</h2>
      {#if object.isPassingScore()}
        <Confetti score={object.getScore())} maxScore={object.getMaxScore()}/>
      {:else}
        <div>Getting a perfect score will unlock the bonus message.</div>
      {/if}
      -->
    {/if}
  </div>
</div>

<style type="text/scss">
  @import 'Home.scss';
</style>

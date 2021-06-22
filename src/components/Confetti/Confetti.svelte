<script lang="ts">
  import {onMount} from 'svelte';

  export let score;
  export let maxScore;

  onMount(() => {
    let script = document.createElement('script');
    script.src =
      'https://unpkg.com/@lottiefiles/lottie-player@0.4.0/dist/lottie-player.js';
    document.head.append(script);
  });
</script>

<div class="congrats">
  <div class="lottie">
    <lottie-player
      src="/animation3.json"
      background="transparent"
      speed="1"
      loop
      autoplay
    />
  </div>
  <div class="lottie-mobile">
    <lottie-player
      src="/animation.json"
      background="transparent"
      speed="1"
      loop
      autoplay
    />
  </div>
  <div class="message">
    <div class="congratulations">Congratulations!</div>
    <h2>You Scored: {score}/{maxScore}</h2>
    <iframe
      class="home-page-video"
      src="https://www.youtube.com/embed/nrys2xH00u4?autoplay=1&?rel=0"
      title="YouTube video player"
      frameborder="0"
      allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
      allowfullscreen
    />
  </div>
</div>

<style>
  .congrats {
    position: fixed;
    top: 0;
    width: 100%;
    height: 100%;
    background-color: white;
  }

  .lottie {
    position: fixed;
    top: 0;
    width: 100%;
    height: 100%;
    z-index: -1;
  }
  .lottie-mobile {
    position: fixed;
    top: 0;
    width: 100%;
    height: 100%;
    z-index: -1;
  }

  .message {
    z-index: 100;
    display: flex;
    width: 100vw;
    height: 100vh;
    flex-direction: column;
    justify-content: center;
    align-items: center;
  }

  @media only screen and (max-width: 600px) {
    .lottie {
      display: none;
    }

    .lottie-mobile {
      display: block;
    }
  }

  @media only screen and (min-width: 600px) {
    .lottie {
      display: block;
    }

    .lottie-mobile {
      display: none;
    }
  }

  .congrats {
    z-index: 100;
  }

  .home-page-video {
    margin-top: 2rem;
    height: 315px;
    width: 100%;
    max-width: 535px;
  }

  .congratulations {
    font-size: 2rem;
    font-weight: bold;
  }
</style>

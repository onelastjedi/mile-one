<template>
  <div class="player" @click="onClick">
      <template v-if="!play">
        <img class="player--poster" :src="require('@/' + poster)" />

        <div class="player--meta">
          <div class="player--headline">{{ headline }}</div>
          <div class="player--button">
            <img src="@/assets/icons/play.svg" />
          </div>
        </div>
      </template>

    <video class="player--video" ref="video" preload>
      <source :src="source" type="video/mp4">
      Sorry, your browser doesn't support embedded videos.
    </video>
  </div>
</template>

<script>
export default {
  props: {
    headline: String,
    poster: String,
    source: String
  },
  data: function () {
    return {
      play: false
    }
  },
  methods: {
    onClick (evt) {
      const { video } = this.$refs
      this.play = !this.play
      this.play ? video.play() : video.pause()
    }
  },
  mounted () {
    const { video } = this.$refs

    video.onended = (event) => {
      this.play = !this.play
    }
  }
}
</script>

<style lang="scss">
  $desktop: "(min-width: 768px)";
  $mobile: "(max-width: 768px)";

  .player {
    cursor: pointer;
    width: 100%;
    position: relative;
    overflow: hidden;

    &--meta {
      position: absolute;
      width: 100%;
      top: 30%;
      z-index: 2;
    }

    &--poster {
      position: absolute;
      top: 0;
      display: block;
      width: 100%;
      height: 100%;
      object-fit: cover;
      z-index: 2;
    }

    &--headline {
      font-size: 5vw;
      text-align: center;
      position: relative;
      color: white;
      margin-bottom: 20px;

      @media #{$desktop} {
        font-size: 3vw;
      }
    }

    &--button {
      text-align: center;
      opacity: .9;
      position: relative;

      img {
        width: 7%;
      }
    }

    &--video {
      width: 100%;
    }
  }
</style>

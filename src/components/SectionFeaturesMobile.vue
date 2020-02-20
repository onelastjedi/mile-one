<template functional>
  <div class="section-features-mobile">
    <h2>3 Ways to Carry:</h2>
    <figure>
      <img src="@/assets/images/DSC00711.png" />
      <figcaption>Backpack</figcaption>
    </figure>
    <div class="row">
      <figure>
        <img src="@/assets/images/DSC00712.png" />
        <figcaption>Shoulder Pack</figcaption>
      </figure>
      <figure>
        <img src="@/assets/images/DSC00713.png" />
        <figcaption>Duffel Bag</figcaption>
      </figure>
    </div>
    <h2>Features:</h2>
    <div class="row">
      <figure>
        <img src="@/assets/images/DSC00714.png" />
        <figcaption>Minimal Design</figcaption>
      </figure>
      <figure>
        <img src="@/assets/images/DSC00715.png" />
        <figcaption>Waterproof Zippers</figcaption>
      </figure>
    </div>
    <div class="row">
      <figure>
        <img src="@/assets/images/DSC00716.png" />
        <figcaption>Petzl Carabiners</figcaption>
      </figure>
      <figure>
        <img src="@/assets/images/DSC00717.png" />
        <figcaption>Handles wear gracefully</figcaption>
      </figure>
    </div>
  </div>
</template>

<style lang="scss">
  .section-features-mobile {
    padding: 10px 20px;
    text-align: center;
    color: #191919;
    background: #fff;

    figure {
      padding: 0;
      margin: 0;
    }

    .row {
      display: grid;
      grid-template-columns: 1fr 1fr;
      margin-bottom: 20px;
    }
  }
</style>

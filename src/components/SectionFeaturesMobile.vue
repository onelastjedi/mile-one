<template functional>
  <div class="section-features-mobile">
    <h2>3 Ways to Carry:</h2>
    <figure>
      <img
        srcset="
          @/assets/images/mobile/feature-backpack.jpg 1x,
          @/assets/images/mobile/feature-backpack@2x.jpg 2x
        "
        alt="Backpack"
      />
      <figcaption>Backpack</figcaption>
    </figure>
    <div class="row">
      <figure>
        <img
          srcset="
            @/assets/images/mobile/feature-shoulder-pack.jpg 1x,
            @/assets/images/mobile/feature-shoulder-pack@2x.jpg 2x
          "
          alt="Shoulder Pack"
        />
        <figcaption>Over the Shoulder</figcaption>
      </figure>
      <figure>
        <img
          srcset="
            @/assets/images/mobile/feature-duffel-bag.jpg 1x,
            @/assets/images/mobile/feature-duffel-bag@2x.jpg 2x
          "
          alt="Duffel Bag"
        />
        <figcaption>Duffel Bag</figcaption>
      </figure>
    </div>
    <h2>Features:</h2>
    <div class="row">
      <figure>
        <img
          srcset="
            @/assets/images/mobile/feature-minimal-design.jpg 1x,
            @/assets/images/mobile/feature-minimal-design@2x.jpg 2x
          "
          alt="Minimal Design"
        />
        <figcaption>Discreet</figcaption>
      </figure>
      <figure>
        <img
          srcset="
            @/assets/images/mobile/feature-waterproof-zippers.jpg 1x,
            @/assets/images/mobile/feature-waterproof-zippers@2x.jpg 2x
          "
          alt="Waterproof Zippers"
        />
        <figcaption>Waterproof Zippers</figcaption>
      </figure>
    </div>
    <div class="row">
      <figure>
        <img
          srcset="
            @/assets/images/mobile/feature-petzl-carabiners.jpg 1x,
            @/assets/images/mobile/feature-petzl-carabiners@2x.jpg 2x
          "
          alt="Petzl Carabiners"
        />
        <figcaption>Petzl Carabiners</figcaption>
      </figure>
      <figure>
        <img
          srcset="
            @/assets/images/mobile/feature-handles-wear-gracefully.jpg 1x,
            @/assets/images/mobile/feature-handles-wear-gracefully@2x.jpg 2x
          "
          alt="Handles wear gracefully"
        />
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

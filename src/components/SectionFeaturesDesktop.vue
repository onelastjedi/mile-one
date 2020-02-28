<template functional>
  <div :class="$style.section">
    <div :class="$style.row">
      <h2>3 Ways to Carry:</h2>
      <figure>
        <img
          srcset="
            @/assets/images/desktop/feature-backpack.png 1x,
            @/assets/images/desktop/feature-backpack@2x.png 2x
          "
          alt="Backpack"
        />
        <figcaption>Backpack</figcaption>
      </figure>
      <figure>
        <img
          srcset="
            @/assets/images/desktop/feature-duffel-bag.png 1x,
            @/assets/images/desktop/feature-duffel-bag@2x.png 2x
          "
          alt="Duffel Bag"
        />
        <figcaption>Duffel Bag</figcaption>
      </figure>
      <figure>
        <img
          srcset="
            @/assets/images/desktop/feature-shoulder-bag.png 1x,
            @/assets/images/desktop/feature-shoulder-bag@2x.png 2x
          "
          alt="Shoulder Bag"
        />
        <figcaption>Shoulder Bag</figcaption>
      </figure>
    </div>
    <div :class="$style.row">
      <h2>Features:</h2>
      <figure>
        <img
          srcset="
            @/assets/images/desktop/feature-minimal-design.png 1x,
            @/assets/images/desktop/feature-minimal-design@2x.png 2x
          "
          alt="Minimal design"
        />
        <figcaption>Minimal design</figcaption>
      </figure>
      <figure>
        <img
          srcset="
            @/assets/images/desktop/feature-waterproof-zippers.png 1x,
            @/assets/images/desktop/feature-waterproof-zippers@2x.png 2x
          "
          alt="Waterproof zippers"
        />
        <figcaption>Waterproof zippers</figcaption>
      </figure>
      <figure>
        <img
          srcset="
            @/assets/images/desktop/feature-petzl-carabiners.png 1x,
            @/assets/images/desktop/feature-petzl-carabiners@2x.png 2x
          "
          alt="Petzl carabiners"
        />
        <figcaption>Petzl carabiners</figcaption>
      </figure>
      <figure>
        <img
          srcset="
            @/assets/images/desktop/feature-handles-wear-gracefully.png 1x,
            @/assets/images/desktop/feature-handles-wear-gracefully@2x.png 2x
          "
          alt="Handles wear gracefully"
        />
        <figcaption>Handles wear gracefully</figcaption>
      </figure>
    </div>
  </div>
</template>

<style module lang="scss">
  .section {
    padding: 20px 0;
    text-align: center;
    background-color: #4F4B49;
    color: #fff;

    .row {
      margin-bottom: 50px;
    }

    h2 {
      font-size: 46px;
    }

    figure {
      padding: 0 40px;
      display: inline-block;
      margin: 0 0 20px 0;
    }

    figcaption {
      font-size: 20px;
      margin-top: 10px;
    }
  }
</style>

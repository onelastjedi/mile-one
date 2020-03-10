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
        <figcaption>Over the Shoulder</figcaption>
      </figure>
    </div>
    <div :class="$style.row">
      <h2>Features:</h2>
      <figure>
        <img
          srcset="
            @/assets/images/desktop/feature-branding.png 1x,
            @/assets/images/desktop/feature-branding@2x.png 2x
          "
          alt="No Exterior Branding"
        />
        <figcaption>No Exterior Branding</figcaption>
      </figure>
      <figure>
        <img
          srcset="
            @/assets/images/desktop/feature-waterproof-zippers.png 1x,
            @/assets/images/desktop/feature-waterproof-zippers@2x.png 2x
          "
          alt="YKK® Waterproof Zippers"
        />
        <figcaption>YKK® Waterproof Zippers</figcaption>
      </figure>
      <figure>
        <img
          srcset="
            @/assets/images/desktop/feature-petzl-carabiners.png 1x,
            @/assets/images/desktop/feature-petzl-carabiners@2x.png 2x
          "
          alt="Petzl Carabiners"
        />
        <figcaption>Petzl Carabiners</figcaption>
      </figure>
      <figure>
        <img
          srcset="
            @/assets/images/desktop/feaute-wear-gracefully.png 1x,
            @/assets/images/desktop/feaute-wear-gracefully@2x.png 2x
          "
          alt="Handles Wear Gracefully"
        />
        <figcaption>Handles Wear Gracefully</figcaption>
      </figure>
    </div>
    <div :class="$style.row">
      <figure>
        <img
          srcset="
            @/assets/images/desktop/feature-clamshell-opening.png 1x,
            @/assets/images/desktop/feature-clamshell-opening@2x.png 2x
          "
          alt="Clamshell Opening"
        />
        <figcaption>Clamshell Opening</figcaption>
      </figure>
      <figure>
        <img
          srcset="
            @/assets/images/desktop/feature-rolltop-opening.png 1x,
            @/assets/images/desktop/feature-rolltop-opening@2x.png 2x
          "
          alt="Rolltop Opening"
        />
        <figcaption>Rolltop Opening</figcaption>
      </figure>
      <figure>
        <img
          srcset="
            @/assets/images/desktop/feature-laptop-storage.png 1x,
            @/assets/images/desktop/feature-laptop-storage@2x.png 2x
          "
          alt="Padded Laptop Storage"
        />
        <figcaption>Padded Laptop Storage</figcaption>
      </figure>
      <figure>
        <img
          srcset="
            @/assets/images/desktop/featire-adjustable-straps.png 1x,
            @/assets/images/desktop/featire-adjustable-straps@2x.png 2x
          "
          alt="Padded Adjustable Straps"
        />
        <figcaption>Padded Adjustable Straps</figcaption>
      </figure>
    </div>
    <div :class="$style.row">
      <figure>
        <img
          srcset="
            @/assets/images/desktop/feature-passport-pocket.png 1x,
            @/assets/images/desktop/feature-passport-pocket@2x.png 2x
          "
          alt="Exterior Passport Pocket"
        />
        <figcaption>Exterior Passport Pocket</figcaption>
      </figure>
      <figure>
        <img
          srcset="
            @/assets/images/desktop/feature-webbing-handles.png 1x,
            @/assets/images/desktop/feature-webbing-handles@2x.png 2x
          "
          alt="Biothane Webbing Handles"
        />
        <figcaption>Biothane Webbing Handles</figcaption>
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

      img {
        transition: all .14s ease-out;
      }

      &:hover {
        img {
          transform: scale(1.05);
        }
      }
    }

    figcaption {
      font-size: 20px;
      margin-top: 10px;
    }
  }
</style>

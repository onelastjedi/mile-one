<template functional>
  <div class="section-features-mobile">
    <h2>Material <em>+</em> Science</h2>
     <img class="fullwidth" srcset="
        @/assets/images/mobile/material-plus-science.png 1x,
        @/assets/images/mobile/material-plus-science@2x.png 2x"
        alt="Material + Science" />
    <p>Used in environments where there is no compromise on performance, Dyneema® fabric is ultra lightweight, weatherproof and rip-proof.</p>
    <h2>3 Ways to Carry:</h2>
    <figure>
      <img
        srcset="
          @/assets/images/mobile/feature-backpack.png 1x,
          @/assets/images/mobile/feature-backpack@2x.png 2x
        "
        alt="Backpack"
      />
      <figcaption>Backpack</figcaption>
    </figure>
    <div class="row">
      <figure>
        <img
          srcset="
            @/assets/images/mobile/feature-shoulder-pack.png 1x,
            @/assets/images/mobile/feature-shoulder-pack@2x.png 2x
          "
          alt="Shoulder Pack"
        />
        <figcaption>Over the Shoulder</figcaption>
      </figure>
      <figure>
        <img
          srcset="
            @/assets/images/mobile/feature-duffel-bag.png 1x,
            @/assets/images/mobile/feature-duffel-bag@2x.png 2x
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
            @/assets/images/mobile/feature-no-branding.png 1x,
            @/assets/images/mobile/feature-no-branding@2x.png 2x
          "
          alt="No Exterior Branding"
        />
        <figcaption>No Exterior Branding</figcaption>
      </figure>
      <figure>
        <img
          srcset="
            @/assets/images/mobile/feature-waterproof-zippers.png 1x,
            @/assets/images/mobile/feature-waterproof-zippers@2x.png 2x
          "
          alt="YKK® Waterproof Zippers"
        />
        <figcaption>YKK® Waterproof Zippers</figcaption>
      </figure>
    </div>
    <div class="row">
      <figure>
        <img
          srcset="
            @/assets/images/mobile/feature-petzl-carabiners.png 1x,
            @/assets/images/mobile/feature-petzl-carabiners@2x.png 2x
          "
          alt="Petzl Carabiners"
        />
        <figcaption>Petzl Carabiners</figcaption>
      </figure>
      <figure>
        <img
          srcset="
            @/assets/images/mobile/feature-handles-gracefully.png 1x,
            @/assets/images/mobile/feature-handles-gracefully@2x.png 2x
          "
          alt="Handles wear gracefully"
        />
        <figcaption>Handles wear gracefully</figcaption>
      </figure>
    </div>
    <div class="row">
      <figure>
        <img
          srcset="
            @/assets/images/mobile/feature-clamshell-opening.png 1x,
            @/assets/images/mobile/feature-clamshell-opening@2x.png 2x
          "
          alt="Clamshell Opening"
        />
        <figcaption>Clamshell Opening</figcaption>
      </figure>
      <figure>
        <img
          srcset="
            @/assets/images/mobile/feature-rolltop-opening.png 1x,
            @/assets/images/mobile/feature-rolltop-opening@2x.png 2x
          "
          alt="Rolltop Opening"
        />
        <figcaption>Rolltop Opening</figcaption>
      </figure>
    </div>
    <div class="row">
      <figure>
        <img
          srcset="
            @/assets/images/mobile/feature-laptop-storage.png 1x,
            @/assets/images/mobile/feature-laptop-storage@2x.png 2x
          "
          alt="Padded Laptop Storage"
        />
        <figcaption>Padded Laptop Storage</figcaption>
      </figure>
      <figure>
        <img
          srcset="
            @/assets/images/mobile/feature-adjustable-straps.png 1x,
            @/assets/images/mobile/feature-adjustable-straps@2x.png 2x
          "
          alt="Padded Adjustable Straps"
        />
        <figcaption>Padded Adjustable Straps</figcaption>
      </figure>
    </div>
    <div class="row">
      <figure>
        <img
          srcset="
            @/assets/images/mobile/feature-passport-pocket.png 1x,
            @/assets/images/mobile/feature-passport-pocket@2x.png 2x
          "
          alt="Exterior Passport Pocket"
        />
        <figcaption>Exterior Passport Pocket</figcaption>
      </figure>
      <figure>
        <img
          srcset="
            @/assets/images/mobile/feature-webbing-handles.png 1x,
            @/assets/images/mobile/feature-webbing-handles@2x.png 2x
          "
          alt="Biothane Webbing Handles"
        />
        <figcaption>Biothane Webbing Handles</figcaption>
      </figure>
    </div>
  </div>
</template>

<style lang="scss">
  .section-features-mobile {
    padding: 10px 20px;
    text-align: center;
    color: #191919;
    background: #E9E1DE;

    p {
      line-height: 1.5;
      font-size: 14px;
      margin-bottom: 40px;
    }

    .fullwidth {
      width: 100%;
    }

    em {
      font-style: normal;
      color: var(--main-font-color);
    }

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

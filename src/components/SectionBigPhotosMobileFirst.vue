<template functional>
  <div class="section-big-photos-mobile">
    <div class="image" key="01">
      <img class="dyneema-logo"
        alt="Dyneema®" src="@/assets/images/dyneema-logo-transparent-white-2x.png" />
      <img srcset="
        @/assets/images/mobile/dyneema-fabric-feature.jpg 1x,
        @/assets/images/mobile/dyneema-fabric-feature@2x.jpg 2x"
        alt="Dyneema® Fabric" />
      <div class="caption">
        <h3>Dyneema® Fabric</h3>
        <p>Made from a revolutionary lightweight fabric that<br>has a tensile strength 15x’s stonger than steel.</p>
      </div>
    </div>
    <div class="image" key="02">
      <img srcset="
        @/assets/images/mobile/material-plus-science.jpg 1x,
        @/assets/images/mobile/material-plus-science@2x.jpg 2x"
        alt="Material + Science" />
      <div class="caption">
        <h3>Material <span>+</span> Science</h3>
        <p>Dyneema® fabric is made of ultra-high-molecular-weight polyethylene fibers sandwiched between two layers of film, resulting in a flexible and extremely durable material.</p>
      </div>
    </div>
    <div class="image" key="03">
      <img srcset="
        @/assets/images/mobile/extreme-durability.jpg 1x,
        @/assets/images/mobile/extreme-durability@2x.jpg 2x"
        alt="Extreme Durability" />
      <div class="caption">
        <h3>Extreme Durability</h3>
        <p>Used in environments where there is no compromise on performance, Dyneema® fabric is ultra lightweight, weatherproof and rip-proof.</p>
      </div>
    </div>
  </div>
</template>

<style lang="scss">
  .section-big-photos-mobile {
    display: block;

    .dyneema-logo {
      width: 77px;
      height: 73px;
      position: absolute;
      top: 20px;
      left: 20px;
    }

    img {
      width: 100%;
      display: block;
    }

    h3 {
      font-size: 24px;
      margin: 0;
      padding: 0;
      line-height: 1.5;

      span {
        color: #D08938;
      }
    }

    p {
      margin-top: 5px;
      margin-bottom: 0;
      font-size: 14px;
      line-height: 1.5;
    }

    .image {
      position: relative;
      color: #fff;
    }

    .caption {
      position: absolute;
      bottom: 16px;
      left: 20px;
    }
  }
</style>

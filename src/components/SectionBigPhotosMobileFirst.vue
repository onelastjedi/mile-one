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
        <p>A revolutionary material with 15x’s the tensile strength of steel. </p>
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
      right: 20px;
    }
  }
</style>

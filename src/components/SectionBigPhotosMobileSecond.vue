<template functional>
  <div class="section-big-photos-mobile">
    <div class="image" key="00">
      <img src="@/assets/images/IMG_6784.jpg" />
      <div class="caption">
        <h3>Designed for<br>One Bag Travel</h3>
        <p>A minimalist travel bag made from ultra strong<br>Dyneema® fabric.</p>
      </div>
    </div>
    <!-- <div class="image" key="01">
      <img class="dyneema-logo" src="@/assets/images/dyneema-logo-transparent-white-2x.png" />
      <img src="@/assets/images/DSC_5347.jpg" />
      <div class="caption">
        <h3>Dyneema® Fabric</h3>
        <p>Made from a revolutionary lightweight fabric that<br>has a tensile strength 15x’s stonger than steel.</p>
      </div>
    </div> -->
    <div class="image" key="02">
      <img src="@/assets/images/20200119-DSC_5386.jpg" />
      <div class="caption">
        <h3>Rugged and Handsome</h3>
        <p>Built to withstand the rigors of global travel — <br>and look good doing it.</p>
      </div>
    </div>
    <div class="image" key="03">
      <img src="@/assets/images/20200119-DSC_5258.jpg" />
      <div class="caption">
        <h3>Accessible & Expansive</h3>
        <p>The rolltop makes it easy to grab your gear and<br>expand the Mile One to hold more.</p>
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

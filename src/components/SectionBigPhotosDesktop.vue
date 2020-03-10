<template>
  <div :class="$style.section">
    <div class="launch-1">
      <h1>Launching on<br>Kickstarter in May 2020</h1>
      <support-launch class="sp-input-1" />
    </div>
    <div :class="[$style.box, $style.b1]"
      data-aos="fade-up"
      data-aos-once="true"
      data-aos-duration="500"
      data-aos-easing="ease-out">
      <div :class="$style.text">
        <h1>Designed for<br>One Bag Travel</h1>
        <p>A minimalist travel bag made from<br>ultra strong Dyneema® fabric.</p>
      </div>
      <img srcset="
        @/assets/images/desktop/parallax-one-bag-travel.jpg 1x,
        @/assets/images/desktop/parallax-one-bag-travel@2x.jpg 2x"
        alt="Designed for One Bag Travel"
      />
    </div>
    <!-- <div :class="[$style.box, $style.b2]"
      data-aos="fade-up"
      data-aos-once="true"
      data-aos-duration="500"
      data-aos-easing="ease-out">
      <div :class="$style.text">
        <h1>Dyneema®<br>Fabric</h1>
        <p>
          Made from a revolutionary lightweight<br>fabric that has a tensile strength 15x’s<br>stonger than steel.
        </p>
      </div>
      <img srcset="
        @/assets/images/desktop/parallax-dyneema-fabric.jpg 1x,
        @/assets/images/desktop/parallax-dyneema-fabric@2x.jpg 2x"
        alt="Dyneema® Fabric"
      />
    </div> -->
    <div :class="[$style.box, $style.b3]"
      data-aos="fade-up"
      data-aos-once="true"
      data-aos-duration="500"
      data-aos-easing="ease-out">
      <div :class="$style.text">
        <h1>Rugged &<br>Handsome</h1>
        <p>
          Built to withstand the rigors of global<br>travel — and look good doing it.
        </p>
      </div>
      <img srcset="
        @/assets/images/desktop/parallax-rugged-and-handsome.jpg 1x,
        @/assets/images/desktop/parallax-rugged-and-handsome@2x.jpg 2x"
        alt="Rugged & Handsome"
      />
    </div>
    <div :class="[$style.box, $style.b4]"
      data-aos="fade-up"
      data-aos-once="true"
      data-aos-duration="500"
      data-aos-easing="ease-out">
      <div :class="$style.text">
        <h1>Accessible<br>& Expansive</h1>
        <p>
          The rolltop makes it easy to<br>grab your gear and expand the Mile One<br>to hold more.
        </p>
      </div>
      <img srcset="
        @/assets/images/desktop/parallax-expansive.jpg 1x,
        @/assets/images/desktop/parallax-expansive@2x.jpg 2x"
        alt="Accessible & Expansive"
      />
    </div>
    <div class="launch-2">
      <support-launch class="sp-input-2" />
      <h1>Don’t miss your chance<br>to access early-bird<br>deals</h1>
    </div>
  </div>
</template>

<script>
import SupportLaunch from '@/components/SupportLaunch'
export default {
  components: {
    SupportLaunch
  }
}
</script>

<style lang="scss">
  .sp-input-1 {
    max-width: 450px;
    margin-left: -20px;
    margin-right: -20px;
  }

  .launch-2 {
    white-space: nowrap;
    display: grid;
    margin: 0 auto;
    grid-template-columns: .8fr 1fr;
    margin-top: 1500px;
    grid-column-gap: 40px;
  }

  .sp-input-2 {
    max-width: 500px;
    width: 100%;
    justify-self: right;
    margin-left: -20px;
    margin-right: -20px;
  }
</style>

<style module lang="scss">
  .section {
    height: 2150px;
    padding: 70px 70px 20px;
    background-color: #000;
    color: #fff;
    position: relative;

    h1 {
      margin: 0 0 15px;
      font-size: 46px;
    }

    h2 {
      text-align: center;
      font-size: 46px;
      width: 620px;
      margin: 0 auto;
    }

    p {
      margin: 0;
      line-height: 1.5;
      font-size: 20px;
    }
  }

  .text {
    position: absolute;
    width: 100%;
  }

  .box {
    z-index: 1;
    position: absolute;
    box-shadow: 20px 22px 54px rgba(0, 0, 0, .4);

    img {
      display: block;
    }
  }

  .b1 {
    margin-top: -70px;
    right: 70px;

    .text{
      top: 110%;
      left: 0%;
    }
  }

  .b2 {
    margin-top: 560px;
    right: 80px;

    .text{
      top: 33%;
      left: -35%;
    }
  }

  .b3 {
    margin-top: 370px;
    margin-left: 20px;

    .text{
      bottom: 20%;
      left: 110%;
    }
  }

  .b4 {
    margin-top: 1000px;
    right: 80px;

    .text{
      text-align: right;
      bottom: 0%;
      right: 110%;
    }
  }

  .launch {
    position: relative;
    z-index: 1;
    text-align: center;
    margin: 0 auto;
    margin-top: 1700px;
  }

  .input {
    max-width: 400px;
    margin-right: auto;
    margin-left: auto;
    margin-top: 20px;
  }

  .disclaimer {
    margin-top: 10px;
    font-size: 10px;

    svg {
      fill: #fff;
      width: 9px;
      height: 9px;
    }
  }
</style>

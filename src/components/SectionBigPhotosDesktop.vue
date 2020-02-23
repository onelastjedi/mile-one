<template>
  <div :class="$style.section">
    <div :class="[$style.box, $style.b1]">
      <div :class="$style.text">
        <h1>Designed for<br>One Bag Travel</h1>
        <p>A minimalist travel bag made from<br>ultra strong Dyneema® fabric.</p>
      </div>
      <img src="@/assets/images/desktop/parallax-one-bag-travel.jpg" />
    </div>
    <div :class="[$style.box, $style.b2]">
      <div :class="$style.text">
        <h1>Dyneema®<br>Fabric</h1>
        <p>
          Made from a revolutionary lightweight<br>fabric that has a tensile strength 15x’s<br>stonger than steel.
        </p>
      </div>
      <img src="@/assets/images/desktop/parallax-dyneema-fabric.jpg" />
    </div>
    <div :class="[$style.box, $style.b3]">
      <div :class="$style.text">
        <h1>Rugged &<br>Handsome</h1>
        <p>
          Built to withstand the rigors of global<br>travel — and look good doing it.
        </p>
      </div>
      <img src="@/assets/images/desktop/parallax-rugged-and-handsome.jpg" />
    </div>
    <div :class="[$style.box, $style.b4]">
      <div :class="$style.text">
        <h1>Accessible<br>& Expansive</h1>
        <p>
          The rolltop makes it easy to<br>grab your gear and expand the Mile One<br>to hold more.
        </p>
      </div>
      <img src="@/assets/images/desktop/parallax-expansive.jpg" />
    </div>
    <div :class="$style.launch">
      <h2>Support our launch and get early access deals.</h2>
      <w-input :class="$style.input" />
      <div :class="$style.disclaimer">
        <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24"><path d="M18 10v-4c0-3.313-2.687-6-6-6s-6 2.687-6 6v4h-3v14h18v-14h-3zm-10 0v-4c0-2.206 1.794-4 4-4s4 1.794 4 4v4h-8z"/></svg>
        Your information is safe and wont be shared with any third party.
      </div>
    </div>
    <div :class="$style.bg">
      <img src="@/assets/images/desktop/bg-lines.png" />
    </div>
  </div>
</template>

<script>
import WInput from '@/components/WaitListInput'
export default {
  components: {
    WInput
  }
}
</script>

<style module lang="scss">
  .section {
    height: 2000px;
    padding: 20px 50px;
    background-color: #4F4B49;
    color: #fff;
    position: relative;
    // background-image: url('../assets/images/desktop/bg-lines.png');
    // background-repeat: no-repeat;
    // background-size: contain;

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
    .text{
      top: 20%;
      left: 88%;
    }
  }

  .b2 {
    margin-top: 360px;
    right: 80px;

    .text{
      top: 33%;
      left: -35%;
    }
  }

  .b3 {
    margin-top: 600px;
    margin-left: 20px;

    .text{
      bottom: 10%;
      left: 80%;
    }
  }

  .b4 {
    margin-top: 1250px;
    right: 80px;

    .text{
      bottom: 10%;
      left: -25%;
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

  .bg {
    position: absolute;
    top: -110px;
    z-index: 0;
    left: -6px;
    width: 100%;
  }
</style>

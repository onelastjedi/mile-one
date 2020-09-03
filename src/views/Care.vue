<template>
  <div class="care">
    <product-header />

    <div class="care--wrapper">
      <div class="care--aside">
        <img src="@/assets/images/desktop/care/01.png">
        <img src="@/assets/images/desktop/care/02.png" style="margin-top: 140px;">
      </div>

      <h1>Use & Care</h1>
      <h2>Dufflebag Assembly</h2>
      <img src="@/assets/images/mobile/care/01.png" class="care--fw-img">

      <div class="care--steps">
        <p><b>STEP 1</b> — Attach clip to biothane webbing on either side of the bag</p>
        <p><b>STEP 2</b> — Attach carabiner to the other side of the bag with the front of the strap facing up</p>
        <p><b>STEP 3</b> — Wear bag over the shoulder with the flat side of the bag resting against your body.</p>
      </div>

      <h2>Backpack Assembly</h2>
      <div class="care--assembly">
        <p><b>STEP 1</b> — Attach clip to the webbing loop at the bottom of the bag with the front of the strap facing up.</p>
        <img src="@/assets/images/mobile/care/02.png" class="care--fw-img">

        <p><b>STEP 2</b> — Feed strap through biothane webbing and lay flat on front of strap.</p>
        <img src="@/assets/images/mobile/care/03.png" class="care--fw-img">

        <p><b>STEP 3</b> — Clip carabiner to the front of the strap using one of the webbing loops depending on desired length.</p>
        <img src="@/assets/images/mobile/care/04.png" class="care--fw-img">
      </div>

      <img src="@/assets/images/mobile/care/05.png" class="care--fw-img care--desktop--hide">

      <div class="care--product">
        <h2>Product Care</h2>
        <p>The MILE ONE is designed to be rugged and stand up to the rigors of global travel.</p>
        <p>Use the bag as you see fit, but don’t abuse it.</p>
        <p>Dyneema® develops a marbled finish as it wears. This doesn’t reduce the performance of the fabric and is a nice reflection of the travel you’ve made with your MILE ONE.</p>
        <p>To wash your MILE ONE, soak it in a bathtub or large basin with Kookaburra Wash — a plant-based alternative to “traditional” laundry detergents.</p>
        <p>Rinse thoroughly. Then, air dry.</p>
        <p>Do not tumble dry, use harsh chemicals, bleach or iron.</p>
      </div>
    </div>
  </div>
</template>

<script>
import ProductHeader from '@/components/ProductHeader'
export default {
  components: {
    ProductHeader
  }
}
</script>

<style lang="scss">
  $mobile: "(max-width: 768px)";
  $desktop: "(min-width: 768px)";

  .care {
    background-color: #E9E1DE;
    position: relative;

    &--desktop--hide {
      @media #{$desktop} {
        display: none!important;
      }
    }

    &--aside {
      position: absolute;
      left: 70%;
      @media #{$mobile} {
        display: none;
      }
    }

    &--wrapper {
      position: relative;
      padding: 20px;

      @media #{$desktop} {
        box-sizing: border-box;
        padding: 20px 400px 60px 20px;
        max-width: 1010px;
        margin: 0 auto;
      }
    }

    &--fw-img {
      width: 100%;
      margin-bottom: 10px;
      display: block;
    }

    &--assembly {
      display: grid;
      grid-template-columns: repeat(2, 1fr);
      grid-column-gap: 30px;
      grid-row-gap: 30px;
    }

    &--product {
      margin-top: 40px;
    }

    h1 {
      font-size: 40px;
      font-family: "Avenir Next", Helvetica, Arial, sans-serif!important;
      font-weight: 500!important;
      text-align: center;

      @media #{$desktop} {
        text-align: left;
      }
    }

    h2 {
      font-size: 24px;
      font-family: "Avenir Next", Helvetica, Arial, sans-serif!important;
      font-weight: 500!important;
      text-align: center;

      @media #{$desktop} {
        text-align: left;
      }
    }

    p {
      line-height: 1.7;
    }
  }
</style>

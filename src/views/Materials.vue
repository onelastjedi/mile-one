<template>
  <div class="materials">
    <product-header />

    <div class="materials--wrapper">
      <h1>Material <span>+</span> Science</h1>
      <p class="materials--preface">We choose only the finest and most durable materials when crafting BLACK MILE packs and gear.</p>

      <img src="@/assets/images/desktop/materials/02.png" class="materials--ill">

      <div class="materials--grid">
        <div class="materials--grid--column">
          <h3>DYNEEMA®</h3>
          <p>Rugged and extremely light weight, Dyneema® is a revolutionary fabric that is waterproof and 15x’s stronger than steel by weight. Used extensively by the U.S. Military for armor solutions, Dyneema® is also resistant to UV light, making it an ideal fabric for the extremes of global travel.</p>

          <h3>YKK WATER-RESISTANT ZIPPERS</h3>
          <p>From the most trusted name in zippers, our YKK water-resistant zippers keep your gear inside your bag, and the elements outside.</p>
        </div>

        <div class="materials--grid--column">
          <h3>RIPSTOP NYLON CORDS</h3>
          <p>During the weaving process, thick nylon threads are interwoven into our nylon cords to prevent ripping, tearing and fraying.</p>

          <h3>PETZL CARABINERS</h3>
          <p>Widely regarded as the best carabiner on the market, we integrate Petzl Carabiners in the straps of the MILE ONE to keep your bag secure on your back or shoulder.</p>
        </div>
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

  .materials {
    position: relative;

    &--ill {
      margin: 40px auto;
      display: block;
      width: 100%;
      max-width: 560px;
    }

    &--preface {
      max-width: 680px;
      margin: 0 auto;
    }

    &--grid {
      width: 80%;
      margin: 0 auto;
      display: grid;
      grid-template-columns: 1fr 1fr;
      grid-column-gap: 40px;

      @media #{$mobile} {
        grid-template-columns: none;
      }
    }

    &--wrapper {
      box-sizing: border-box;
      padding: 60px 40px 10%;
      text-align: center;
      margin: 0 auto;
      color: white;
      background-image: linear-gradient(to bottom, rgba(#141414, 1) 0%,rgba(#141414, 0) 230%),
        url('~@/assets/images/desktop/materials/01.png');
      background-size: cover;
      background-position-x: center;

      @media #{$mobile} {
        background-image: linear-gradient(to bottom, rgba(#141414, 1) 0%,rgba(#141414, 0) 230%),
          url('~@/assets/images/mobile/materials/01.png');
        background-size: cover;
        background-position-x: center;
      }

      h1 {
        font-size: 40px;
        font-family: "Avenir Next", Helvetica, Arial, sans-serif!important;

        span {
          color: #00D266;
        }
      }

      h3 {
        color: #00CD71;
        font-family: "Avenir Next", Helvetica, Arial, sans-serif!important;
        font-weight: 900;
      }

      p {
        font-size: 18px;
        line-height: 1.7;
        margin-bottom: 40px;
      }
    }
  }
</style>

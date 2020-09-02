<template>
  <div class="brand">
    <product-header />

    <div class="brand--wrapper">
      <div class="brand--logo">
        <svg width="184" height="179" viewBox="0 0 184 179" fill="none" xmlns="http://www.w3.org/2000/svg">
          <path fill-rule="evenodd" clip-rule="evenodd" d="M38.7363 134.424L42.1584 130.289C27.5508 117.213 18.3448 98.2622 18.3448 77.2048C18.3448 37.8469 50.4902 5.82439 89.9991 5.82439C129.51 5.82439 161.653 37.8469 161.653 77.2048C161.653 98.3012 152.414 117.281 137.761 130.359L141.176 134.5C157.014 120.45 167 99.994 167 77.2048C167 34.842 132.526 0.5 89.9991 0.5C47.4738 0.5 13 34.842 13 77.2048C13 99.953 22.9468 120.378 38.7363 134.424Z" fill="white"/>
          <mask id="mask0" mask-type="alpha" maskUnits="userSpaceOnUse" x="0" y="67" width="184" height="112">
          <path d="M0.000610352 67.7462H183.72V178.499H0.000610352V67.7462Z" fill="white"/>
          </mask>
          <g mask="url(#mask0)">
          <path fill-rule="evenodd" clip-rule="evenodd" d="M91.8597 76.2909L176.617 178.499H183.721L91.8597 67.7462L0.000610352 178.499H7.10418L91.8597 76.2909Z" fill="white"/>
          </g>
          <mask id="mask1" mask-type="alpha" maskUnits="userSpaceOnUse" x="0" y="67" width="184" height="112">
          <path d="M0.000610352 67.7463H183.72V178.499H0.000610352V67.7463Z" fill="white"/>
          </mask>
          <g mask="url(#mask1)">
          <path fill-rule="evenodd" clip-rule="evenodd" d="M91.8597 67.7463L0.000610352 178.499H7.10418L91.8597 76.2911L176.617 178.499H183.721L91.8597 67.7463Z" fill="white"/>
          <path fill-rule="evenodd" clip-rule="evenodd" d="M91.5 118.029L141.486 177.5H148L91.5 109.5L35 177.5H41.5163L91.5 118.029Z" fill="white"/>
          </g>
        </svg>
      </div>

      <h1>The Brand</h1>
      <p>Black Mile produces elite gear for discerning individuals and global travelers. Made from Dyneema®, the world’s strongest fiber™, our gear is rugged enough for back trails, yet refined enough for boardrooms.</p>
      <p>Our founder, Charley, has made traveling and pursuing exciting business endeavors his life’s work. Black Mile, and all that it represents, is the result of the alchemy of these two pursuits – the constant search for new and unique experiences, and the fortitude to make a living doing what makes you feel most alive.</p>
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
  $desktop: "(min-width: 768px)";
  $mobile: "(max-width: 768px)";

  .brand {
    position: relative;

    @media #{$mobile} {
      height: 1000px;
    }

    img {
      width: 100%;
    }

    &--logo {
      width: 184px;
      height: 179px;
      display: inline-block;

      svg {
        width: inherit;
        height: inherit;
      }
    }

    &--wrapper {
      box-sizing: border-box;
      padding: 60px 40px 50%;
      text-align: center;
      margin: 0 auto;
      color: white;
      background-image: linear-gradient(to bottom, rgba(#141414, 1) 0%,rgba(#141414, 0) 100%),
        url('~@/assets/images/desktop/brand/01.png');
      background-size: cover;
      background-position-x: center;
      background-position-y: 40%;

      h1 {
        font-size: 40px;
        font-family: "Avenir Next", Helvetica, Arial, sans-serif!important;
      }

      p {
        font-size: 18px;
        line-height: 1.7;
        max-width: 680px;
        margin: 0 auto 20px;
      }
    }
  }
</style>

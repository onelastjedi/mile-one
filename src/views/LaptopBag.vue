<template>
  <section>
    <product-header />

    <div class="laptop mobile">
      <div class="laptop--content">
        <div class="laptop--container">
          <h4>Laptop Sleeve <span>$125.00</span></h4>
        </div>

        <img src="@/assets/images/mobile/laptop/01.png" class="laptop--fw-img" />

        <div class="laptop--container">
          <p>When we produced the Mile One, we wanted to include a protective sleeve for a laptop or tablet. Our lightweight laptop insert stows securely in the Mile One or Daypack, and is compatible with other packs and bags. When you only need your laptop, you can use the strap from the Mile One to transform the insert into a shoulder-carry laptop bag.</p>
        </div>

        <div class="laptop--container">
          <button class="laptop--btn">Add to cart</button>
        </div>

        <div class="laptop--container">
          <h5>Features</h5>

          <ul>
            <li>Lightweight construction</li>
            <li>Fits smaller laptops and widescreen Pro laptops</li>
            <li>Padded to protect the screen and components</li>
            <li>Stows securely in the Mile One or Daypack</li>
            <li>Compatible with other packs and bags</li>
            <li>Can be used with the Mile One strap to create a laptop bag</li>
          </ul>

          <h5>Materials</h5>

          <ul>
            <li>2.2 oz HEX70 XL (70 denier nylon)</li>
            <li>Nylon mesh</li>
            <li>YKK zippers</li>
          </ul>
        </div>

        <br>
          <img class="laptop--fw-img"
            src="@/assets/images/mobile/laptop/02.png" />
          <img class="laptop--fw-img"
            src="@/assets/images/mobile/laptop/03.png" />
          <img class="laptop--fw-img"
            src="@/assets/images/mobile/laptop/04.png" />
          <img class="laptop--fw-img"
            src="@/assets/images/mobile/laptop/05.png" />

        <br>

        <div class="laptop--container">
          <button class="laptop--btn">Add to cart</button>
        </div>
      </div>
    </div>

    <div class="laptop desktop">
      <div class="laptop--content">
        <div class="laptop--container">
          <div class="laptop--grid">
            <div class="laptop--column">
              <img class="laptop--fw-img"
                src="@/assets/images/desktop/laptop/01.png" />
            </div>

            <div class="laptop--column">
              <h4>Laptop Sleeve  <span>$125.00</span></h4>

              <p>When we produced the Mile One, we wanted to include a protective sleeve for a laptop or tablet. Our lightweight laptop insert stows securely in the Mile One or Daypack, and is compatible with other packs and bags. When you only need your laptop, you can use the strap from the Mile One to transform the insert into a shoulder-carry laptop bag.</p>

              <button class="laptop--btn">Add to cart</button>

              <h5>Features</h5>

              <ul>
                <li>Lightweight construction</li>
                <li>Fits smaller laptops and widescreen Pro laptops</li>
                <li>Padded to protect the screen and components</li>
                <li>Stows securely in the Mile One or Daypack</li>
                <li>Compatible with other packs and bags</li>
                <li>Can be used with the Mile One strap to create a laptop bag</li>
              </ul>

              <h5>Materials</h5>

              <ul>
                <li>2.2 oz HEX70 XL (70 denier nylon)</li>
                <li>Nylon mesh</li>
                <li>YKK zippers</li>
              </ul>
            </div>
          </div>

          <img class="laptop--fw-img"
            src="@/assets/images/desktop/laptop/02.png" />
          <img class="laptop--fw-img"
            src="@/assets/images/desktop/laptop/03.png" />
          <img class="laptop--fw-img"
            src="@/assets/images/desktop/laptop/04.png" />
          <img class="laptop--fw-img"
            src="@/assets/images/desktop/laptop/05.png" />

        </div>
      </div>
    </div>
  </section>
</template>

<script>
import ProductHeader from '@/components/ProductHeader'
export default {
  components: {
    ProductHeader
  },
  data: function () {
    return {
      large: 0,
      small: 0
    }
  },
  computed: {
    nothingSelected () {
      return !this.large > 0 && !this.small > 0
    }
  },
  methods: {
    increase (model) {
      if (this[model] < 10) this[model] += 1
    },
    decrease (model) {
      if (this[model] !== 0) this[model] -= 1
    }
  }
}
</script>

<style lang="scss">
  $desktop: "(min-width: 768px)";
  $mobile: "(max-width: 768px)";

  .desktop {
    @media #{$mobile} {
      display: none;
    }
  }

  .mobile {
    @media #{$desktop} {
      display: none;
    }
  }

  .laptop {
    background-color: #E9E1DE;
    position: relative;

    &--btn {
      background-color: var(--main-font-color);
      border: none;
      outline: none;
      display: block;
      width: 100%;
      text-align: center;
      font-size: 20px;
      padding: 20px 0;
      margin: 25px 0;
      text-transform: uppercase;
      cursor: pointer;

      &:disabled {
        background-color: #CFCFCF;
        color: white;
      }

      @media #{$desktop} {
        padding: 15px 0;
        font-size: 14px;
      }
    }

    &--fw-img {
      width: 100%;
      margin-bottom: 10px;
      display: block;

      @media #{$desktop} {
        margin-bottom: 20px;
      }
    }

    &--container {
      padding: 0 25px;
    }

    &--header {
      padding: 15px 20px;
      background-color: #222222;
      display: grid;
      align-items: center;
      grid-template-columns: 1fr auto;

      svg {
        width: 160px;
      }

      &--burger {
        width: 30px;
        height: 17px;
        border-top: 1px solid white;
        border-bottom: 1px solid white;
        cursor: pointer;
        position: relative;

        &:after {
          content: '';
          position: absolute;
          width: 100%;
          border-bottom: 1px solid white;
          top: 49%;
        }
      }
    }

    &--content {
      padding: 40px 0;
      max-width: 1024px;
      margin: 0 auto;

      @media #{$desktop} {
        padding: 80px 0;
      }

      h4 {
        font-family: 'Avenir Next', sans-serif;
        font-size: 24px;
        display: grid;
        grid-template-columns: 1fr auto;
        align-items: end;
        margin: 0 0 20px;

        span {
          font-family: 'Avenir Next', sans-serif;
          font-size: 16px;
          font-weight: bold;
        }
      }

      h5 {
        font-family: 'Avenir Next', sans-serif;
        font-weight: 600;
        letter-spacing: 1.14px;
        font-size: 23px;
        margin-bottom: 10px;

        @media #{$desktop} {
          margin-top: 20px;
        }
      }

      p {
        line-height: 1.7;
      }

      ul {
        line-height: 1.7;
        padding: 0 0 0 20px;
        margin: 0;
      }
    }

    &--quantity {
      display: grid;
      grid-template-columns: 1fr auto;
      grid-row-gap: 20px;
      font-size: 14px;

       @media #{$desktop} {
        margin: 20px 0;
      }

      &--descr {
        font-weight: bold;

        span {
          font-size: 12px;
          margin-top: 5px;
          font-weight: 300;
          display: block;
        }
      }

      &--controls {
        border: 1px solid #979797;
        display: grid;
        height: 30px;
        grid-template-columns: auto 30px auto;

        button {
          outline: none;
          border: none;
          background-color: #00CD77;
          width: 30px;
          margin: 0;
          display: block;
          padding: 0;
          font-size: 16px;
          cursor: pointer;
        }

        span {
          display: block;
          border: none;
          outline: none;
          max-width: 30px;
          text-align: center;
          margin: 0;
          line-height: 28px;
        }
      }
    }

    &--grid {
      display: grid;
      grid-template-columns: 1.2fr .8fr;
      grid-column-gap: 30px;
      font-size: 14px;
      min-width: 1000px;
    }
  }
</style>

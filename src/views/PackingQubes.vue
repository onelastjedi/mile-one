<template>
  <section>
    <product-header />

    <div class="qubes mobile">
      <div class="qubes--content">
        <div class="qubes--container">
          <h4>Packing Cubes <span>$24.99 / $14.99</span></h4>
        </div>

        <img src="@/assets/images/mobile/qubes/01.png" class="qubes--fw-img" />

        <div class="qubes--container">
          <p>Designed to fit perfectly with the Mile One, our packing cubes make it easy to stay organized on the road. Available in large and small sizes, each cube features a breathable mesh panel secured with a YKK zipper closure to keep your gear fresh and keep pests out.</p>
        </div>

        <div class="qubes--quantity qubes--container">
          <div class="qubes--quantity--descr">
            Large Packing Cube — $24.99 each
            <span>15 x 10 x 4"  / 38 x 25 x 10 cm</span>
          </div>

          <div class="qubes--quantity--controls">
            <button @click="decrease('large')">-</button>
            <span>{{ large }}</span>
            <button @click="increase('large')">+</button>
          </div>

          <div class="qubes--quantity--descr">
            Small Packing Cube — $14.99 each
            <span>15 x 10 x 4"  / 38 x 25 x 10 cm</span>
          </div>

          <div class="qubes--quantity--controls">
            <button @click="decrease('small')">-</button>
            <span>{{ small }}</span>
            <button @click="increase('small')">+</button>
          </div>

          <template v-if="nothingSelected">
            Must select quantity first.
          </template>
        </div>

        <div class="qubes--container">
          <button :disabled="nothingSelected" class="qubes--btn">Add to cart</button>
        </div>

        <div class="qubes--container">
          <h5>Features</h5>

          <ul>
            <li>Lightweight construction</li>
            <li>Fits the Mile One perfectly</li>
            <li>Compatible with other packs and bags</li>
            <li>Water resistant nylon to keep your clothes and gear dry</li>
            <li>Breathable mesh panel to keep clothes fresh and pests out</li>
            <li>Rolls up or lays flat for minimal storage space</li>
            <li>Premium YKK zipper closures</li>
            <li>Grab handles for easy packing and unpacking</li>
          </ul>

          <h5>Materials</h5>

          <ul>
            <li>2.2 oz HEX70 XL (70 denier nylon)</li>
            <li>Nylon mesh</li>
            <li>YKK zippers</li>
          </ul>
        </div>

        <br>
          <img class="qubes--fw-img"
            src="@/assets/images/mobile/qubes/02.gif" />
          <img class="qubes--fw-img"
            src="@/assets/images/mobile/qubes/03.png" />
          <img class="qubes--fw-img"
            src="@/assets/images/mobile/qubes/04.png" />
          <img class="qubes--fw-img"
            src="@/assets/images/mobile/qubes/05.png" />
          <img class="qubes--fw-img"
            src="@/assets/images/mobile/qubes/06.png" />
        <br>

        <div class="qubes--quantity qubes--container">
          <div class="qubes--quantity--descr">
            Large Packing Cube — $24.99 each
            <span>15 x 10 x 4"  / 38 x 25 x 10 cm</span>
          </div>

          <div class="qubes--quantity--controls">
            <button @click="decrease('large')">-</button>
            <span>{{ large }}</span>
            <button @click="increase('large')">+</button>
          </div>

          <div class="qubes--quantity--descr">
            Small Packing Cube — $14.99 each
            <span>15 x 10 x 4"  / 38 x 25 x 10 cm</span>
          </div>

          <div class="qubes--quantity--controls">
            <button @click="decrease('small')">-</button>
            <span>{{ small }}</span>
            <button @click="increase('small')">+</button>
          </div>

          <template v-if="nothingSelected">
            Must select quantity first.
          </template>
        </div>

        <div class="qubes--container">
          <button :disabled="nothingSelected" class="qubes--btn">Add to cart</button>
        </div>
      </div>
    </div>

    <div class="qubes desktop">
      <div class="qubes--content">
        <div class="qubes--container">
          <div class="qubes--grid">
            <div class="qubes--column">
              <img class="qubes--fw-img"
                src="@/assets/images/desktop/qubes/01.png" />
            </div>

            <div class="qubes--column">
              <h4>Packing Cubes <span>$24.99 / $14.99</span></h4>

              <p>Designed to fit perfectly with the Mile One, our packing cubes make it easy to stay organized on the road. Available in large and small sizes, each cube features a breathable mesh panel secured with a YKK zipper closure to keep your gear fresh and keep pests out.</p>

              <div class="qubes--quantity">
                <div class="qubes--quantity--descr">
                  Large Packing Cube — $24.99 each
                  <span>15 x 10 x 4"  / 38 x 25 x 10 cm</span>
                </div>

                <div class="qubes--quantity--controls">
                  <button @click="decrease('large')">-</button>
                  <span>{{ large }}</span>
                  <button @click="increase('large')">+</button>
                </div>

                <div class="qubes--quantity--descr">
                  Small Packing Cube — $14.99 each
                  <span>15 x 10 x 4"  / 38 x 25 x 10 cm</span>
                </div>

                <div class="qubes--quantity--controls">
                  <button @click="decrease('small')">-</button>
                  <span>{{ small }}</span>
                  <button @click="increase('small')">+</button>
                </div>

                <template v-if="nothingSelected">
                  Must select quantity first.
                </template>
              </div>

              <button class="qubes--btn"
                :disabled="nothingSelected">Add to cart</button>

              <h5>Features</h5>

              <ul>
                <li>Lightweight construction</li>
                <li>Fits the Mile One perfectly</li>
                <li>Compatible with other packs and bags</li>
                <li>Water resistant nylon to keep your clothes and gear dry</li>
                <li>Breathable mesh panel to keep clothes fresh and pests out</li>
                <li>Rolls up or lays flat for minimal storage space</li>
                <li>Premium YKK zipper closures</li>
                <li>Grab handles for easy packing and unpacking</li>
              </ul>

              <h5>Materials</h5>

              <ul>
                <li>2.2 oz HEX70 XL (70 denier nylon)</li>
                <li>Nylon mesh</li>
                <li>YKK zippers</li>
              </ul>
            </div>
          </div>

          <img class="qubes--fw-img"
            src="@/assets/images/desktop/qubes/02.gif" />
          <img class="qubes--fw-img"
            src="@/assets/images/desktop/qubes/03.png" />
          <img class="qubes--fw-img"
            src="@/assets/images/desktop/qubes/04.png" />
          <img class="qubes--fw-img"
            src="@/assets/images/desktop/qubes/05.png" />
          <img class="qubes--fw-img"
            src="@/assets/images/desktop/qubes/06.png" />
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

  .qubes {
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
        background-color: #FFFFFF;
        color: #B4B4B4;
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
          background-color: #ffffff;
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

<template>
  <section>
    <div class="qubes mobile">
      <div class="qubes--header">
        <svg width="283" height="21" viewBox="0 0 283 21" fill="none" xmlns="http://www.w3.org/2000/svg">
          <path d="M0 2.22718V0.222709H10.0965C13.5115 0.222709 15.5902 1.93021 15.5902 5.34521C15.5902 7.57239 14.6994 9.05717 13.1403 9.79957C14.9963 10.4677 16.0357 12.101 16.0357 14.5509C16.0357 17.9659 14.0312 19.7476 10.542 19.7476H0.0742438V17.7432H2.74685V2.22718H0ZM5.04827 8.98295H9.79958C12.1752 8.98295 13.2888 7.79513 13.2888 5.64219C13.2888 3.48925 12.101 2.30142 9.79958 2.30142H5.04827V8.98295ZM10.1708 17.7432C12.4722 17.7432 13.66 16.5553 13.66 14.4024C13.66 12.1752 12.5464 10.9874 10.1708 10.9874H4.97403V17.7432H10.1708Z" fill="white"/>
          <path d="M41.574 2.22718H38.2332V17.7432H46.1768V13.5858H48.4782V19.7476H33.2592V17.7432H35.9318V2.22718H33.2592V0.222709H41.574V2.22718Z" fill="white"/>
          <path d="M64.2912 17.7432H66.7411L73.4226 0.222709H76.2437L82.9252 17.7432H85.2267V19.7476H77.9512V17.7432H80.4754L78.9163 13.7343H70.6015L69.0425 17.7432H71.7151V19.7476H64.3654V17.7432H64.2912ZM71.1955 11.7298H78.2482L74.7589 2.52413L71.1955 11.7298Z" fill="white"/>
          <path d="M114.403 6.38458C114.403 3.56349 112.472 1.93022 109.429 1.93022C106.162 1.93022 104.232 3.71195 104.232 6.90424V12.9919C104.232 16.1842 106.162 17.9659 109.429 17.9659C112.547 17.9659 114.477 16.3326 114.477 13.5115V13.4373H116.778V13.5115C116.778 17.6689 113.957 19.9704 109.429 19.9704C104.826 19.9704 101.93 17.4462 101.93 12.9919V6.97848C101.93 2.59837 104.677 0 109.206 0C111.656 0 113.586 0.668149 114.7 2.15293L114.997 0.222709H116.778V6.53304H114.477V6.38458H114.403Z" fill="white"/>
          <path d="M145.286 0.222709H153.156V2.22718H150.854L143.95 8.68598L151.225 17.7432H153.601V19.7476H145.732V17.7432H148.182L142.168 10.1708L139.273 12.9176V17.7432H141.945V19.7476H134.299V17.7432H136.971V2.22718H134.299V0.222709H141.945V2.22718H139.273V10.3193L147.81 2.22718H145.286V0.222709Z" fill="white"/>
          <path d="M175.799 17.7432H178.471V19.7476H170.824V17.7432H173.497V2.22718H170.824V0.222709H175.724L181.886 11.804L188.048 0.222709H192.948V2.22718H190.275V17.7432H192.948V19.7476H185.375V17.7432H188.048V4.75131L181.96 16.1841L175.799 4.75131V17.7432Z" fill="white"/>
          <path d="M243.876 2.22718H240.535V17.7432H248.479V13.5858H250.78V19.7476H235.487V17.7432H238.16V2.22718H235.487V0.222709H243.802V2.22718H243.876Z" fill="white"/>
          <path d="M270.379 2.22718H267.707V0.222709H283V5.79065H280.699V2.22718H272.755V8.98295H279.956V10.9874H272.755V17.7432H280.699V14.1797H283V19.7476H267.707V17.7432H270.379V2.22718Z" fill="white"/>
          <path d="M218.189 20.2673H210.023V18.0401H212.992V2.44989H210.023V0.222709H218.189V2.44989H215.22V18.0401H218.189V20.2673Z" fill="white"/>
        </svg>
        <div class="qubes--header--burger"></div>
      </div>

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
export default {
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
    background-color: white;
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

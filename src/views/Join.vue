<template>
  <div class="join">
    <div class="join__box">
      <h1>Thanks for your support!</h1>
      <p>Join our facebook group for the latest updates on our launch.</p>

      <a class="join__button" href="https://facebook.com">
        <div class="join__button__icon">
          <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 24 24"><path d="M9 8h-3v4h3v12h5v-12h3.642l.358-4h-4v-1.667c0-.955.192-1.333 1.115-1.333h2.885v-5h-3.808c-3.596 0-5.192 1.583-5.192 4.615v3.385z"/></svg>
        </div>
        Join our facebook group
      </a>

      <p class="small">
        By reserving, you can purchase Blackmile at the lowest possible price.<br>
        Be sure to check your email for your receipt and more information as<br>
        we get closer to our launch.
      </p>
    </div>
  </div>
</template>

<style lang="scss">
  $desktop: "(min-width: 768px)";
  $mobile: "(max-width: 768px)";

  .join {
    display: grid;
    align-items: center;
    justify-items: center;
    background-image: url('../assets/images/rW74RT0.jpg');
    background-size: cover;
    background-repeat: no-repeat;
    background-position: center center;

    h1 {
      font-size: 24px;
      margin: 0;
      letter-spacing: 0.62px;
    }

    p {
      letter-spacing: 0.41px;
      margin-bottom: 30px;
    }

    .small {
      letter-spacing: 0.26px;
      margin-top: 14px;
    }

    &__box {
      width: 100%;
      max-width: 596px;;
      border-radius: 9px;
      padding: 50px 0;
      text-align: center;
      color: #fff;
      background-color: rgba(25, 25, 25, .9);

      @media #{$mobile} {
        background: transparent;
      }
    }

    &__button {
      display: grid;
      grid-template-columns: 44px 1fr;
      align-items: center;
      width: 326px;
      height: 44px;
      margin: 0 auto;
      border-radius: 3px;
      text-transform: uppercase;
      font-size: 13px;
      letter-spacing: 0.4px;
      font-weight: 600;
      background-color: #4B6BB0;
      color: #fff;
      transition: .2s all ease-out;

      &:hover {
        box-shadow: 0 3px 6px rgba(0, 0, 0, .5);
        background-color: #3D5A98;
      }

      &__icon {
        border-top-left-radius: 3px;
        border-bottom-left-radius: 3px;
        display: grid;
        align-items: center;
        justify-items: center;
        height: 44px;
        background-color: #3D5A98;

        svg {
          fill: #fff;
        }
      }
    }
  }
</style>

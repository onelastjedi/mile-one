<template>
  <div class="header-m">
    <div class="padded-20">
      <img class="blackmile-logo-mobile" src="@/assets/images/blackmile_logo-transparent-2x.png" />
      <img class="kickstarter-logo-mobile" src="@/assets/images/kickstarter-logo-transparent-2x.png" />
      <h1>Introducing<br>the Mile One</h1>
      <div class="descr">
        <img class="dyneema-logo-mobile" src="@/assets/images/dyneema-logo-transparent-2x.png" />
        A minimalist travel bag made from ultra strong Dyneema® fabric.
      </div>
    </div>
    <img class="fullwidth" src="@/assets/images/20200119-DSC_4941.jpg" />
    <div class="features">
      <h3>Features:</h3>
      <ul class="list">
        <li><b>+</b>3 Ways to Carry</li>
        <li><b>+</b>Dyneema® fabric</li>
        <li><b>+</b>Waterproof zippers</li>
        <li><b>+</b>Petzl carabiners</li>
        <li><b>+</b>Minimalist design</li>
        <li><b>+</b>Clamshell feature</li>
      </ul>
    </div>
    <div class="signup">
      <i>Signup now for exclusive access to launch-day deals.</i>
      <w-input />
      <div class="disclaimer">
        <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24"><path d="M18 10v-4c0-3.313-2.687-6-6-6s-6 2.687-6 6v4h-3v14h18v-14h-3zm-10 0v-4c0-2.206 1.794-4 4-4s4 1.794 4 4v4h-8z"/></svg>
        Your information is safe and wont be shared with any third party.
      </div>
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
<style lang="scss">
  .header-m {
    color: #fff;
    position: relative;
    padding-bottom: 15px;

    h1 {
      font-size: 36px;
    }

    .padded-20 {
      padding: 20px;
    }

    .fullwidth {
      width: 100%;
    }

    .blackmile-logo-mobile {
      width: 120px;
      height: 53px;
    }

    .kickstarter-logo-mobile {
      width: 99px;
      height: 96px;
      position: absolute;
      right: 20px;
    }

    .dyneema-logo-mobile {
      width: 52px;
      height: 49px;
    }

    .descr {
      display: grid;
      grid-template-columns: auto 1fr;
      grid-column-gap: 20px;
      color: #D08938;
      line-height: 24px;
    }

    .features {
      padding: 20px;

      h3 {
        margin: 0 0 10px 0;
        font-size: 16px;
        font-weight: 300;
        text-transform: uppercase;
      }

      b {
        color: #D08938;
        margin-right: 7px;
      }

      .list {
        line-height: 1.9;
        margin: 0;
        padding: 0;
        list-style: none;
        display: grid;
        grid-template-columns: repeat(auto-fit, minmax(43%, 1fr));
        grid-column-gap: 7%;

        li {
          white-space: nowrap;
        }
      }
    }

    .signup {
      padding: 0 20px 20px;

      i {
        font-size: 14px;
      }

      .disclaimer {
        display: grid;
        grid-template-columns: auto 1fr;
        grid-column-gap: 5px;
        align-items: center;
        font-size: 10px;

        svg {
          fill: #fff;
          width: 9px;
        }
      }
    }
  }
</style>

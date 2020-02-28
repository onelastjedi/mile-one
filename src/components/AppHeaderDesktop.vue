<template>
  <div class="header-d">
    <div class="column text">
      <img class="blackmile-logo-mobile" alt="Blackmile" src="@/assets/images/blackmile-logo.svg" />
      <h1>Introducing<br>the Mile One</h1>
      <div class="descr">
        A minimalist travel bag made from ultra strong Dyneema® fabric.
      </div>
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
        <i>Signup now for exclusive access to <em>launch-day</em> deals.</i>
        <w-input />
        <div class="disclaimer">
          <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24"><path d="M18 10v-4c0-3.313-2.687-6-6-6s-6 2.687-6 6v4h-3v14h18v-14h-3zm-10 0v-4c0-2.206 1.794-4 4-4s4 1.794 4 4v4h-8z"/></svg>
          Your information is safe and wont be shared with any third party.
        </div>
      </div>
      <div class="scroll">
        <p>Scroll for features</p>
        <svg width="30" height="17" viewBox="0 0 30 17" fill="none" xmlns="http://www.w3.org/2000/svg">
          <path fill-rule="evenodd" clip-rule="evenodd" d="M0.292892 2.20711L1.70711 0.792892L15 14.0858L28.2929 0.792892L29.7071 2.20711L15 16.9142L0.292892 2.20711Z" fill="#D08938"/>
        </svg>
      </div>
    </div>
    <div class="column images">
      <img src="@/assets/images/kickstarter-logo-desktop-2x.png"
        alt="Kickstarter" class="kickstarter-logo" />
      <img srcset="
        @/assets/images/desktop/pictures-4-main.jpg 1x,
        @/assets/images/desktop/pictures-4-main@2x.jpg 2x"
        alt="A minimalist travel bag"
      />
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
  .header-d {
    color: #fff;
    display: grid;
    grid-template-columns: 1fr 2fr;

    h1 {
      margin: 15px 0;
      font-size: 46px;
    }

    .descr {
      line-height: 1.5;
      padding: 15px 0;
      font-size: 20px;
    }

    .text {
      padding: 40px;
      position: relative;
    }

    .blackmile-logo-mobile {
      width: 189px;
      height: 85px;
    }

    .images {
      position: relative;
      // display: grid;
      // grid-template-columns: 50% 50%;

      .kickstarter-logo {
        top: 20px;
        left: 30px;
        position: absolute;
        width: 130px;
        height: 125px;
      }

      img {
        display: block;
        height: 100%;
        width: 100%;
        object-fit: cover;
        object-position: 50% 50%;
      }
    }

    .features {
      padding: 20px 0;

      h3 {
        font-family: 'Avenir Next', sans-serif !important;
        margin: 0 0 10px 0;
        font-size: 16px;
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
        font-size: 20px;

        li {
          white-space: nowrap;
        }
      }
    }

    .signup {
      padding: 15px 0;

      i {
        line-height: 1.5;
        font-size: 20px;
        display: block;
        margin-bottom: 20px;

        em {
          white-space: nowrap;
        }
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

    .scroll {
      display: grid;
      align-items: center;
      justify-items: center;
      text-align: center;
    }
  }
</style>

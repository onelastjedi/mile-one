<template functional>
  <div class="header-m">
    <div class="logos padded-20">
      <img class="blackmile-logo-mobile" alt="Blackmile" src="@/assets/images/blackmile-logo.svg" />
      <img class="kickstarter-logo-mobile" alt="Kickstarter" src="@/assets/images/kickstarter-logo-transparent-2x.png" />
    </div>
    <h1>Join the Packing Light<br>Revolution</h1>
    <div class="features">
      <ul class="list">
        <li><b>+</b>Dyneema® fabric</li>
        <li><b>+</b>Petzl carabiners</li>
        <li><b>+</b>3 Ways to Carry</li>
        <li><b>+</b>Minimalist design</li>
        <li><b>+</b>Waterproof zippers</li>
        <li><b>+</b>Clamshell opening</li>
        <li><b>+</b>Rolltop functionality</li>
        <li><b>+</b>Extreme durability</li>
      </ul>
    </div>
    <img class="fullwidth"
      srcset="@/assets/images/mobile/header-2-bags.png 1x,
              @/assets/images/mobile/header-2-bags@2x.png 2x"
      alt="A minimalist travel bag"
    />
    <div class="signup">
      <div class="input">
        <svg width="22" height="15" viewBox="0 0 22 15" xmlns="http://www.w3.org/2000/svg">
          <path fill-rule="evenodd" clip-rule="evenodd" d="M20.9841 1.6734C18.7639 3.67454 16.5769 5.64554 14.3827 7.62334C16.5864 9.53568 18.7696 11.4303 20.9841 13.352V1.6734ZM1.01062 13.3613C3.23288 11.4328 5.42101 9.53376 7.62303 7.62289C5.41672 5.63446 3.22815 3.66198 1.01062 1.6635V13.3613ZM1.83233 13.9759H20.1687C17.9633 12.0677 15.7936 10.19 13.6229 8.3118C13.5749 8.35406 13.543 8.38139 13.5118 8.40946C12.8062 9.04312 12.1023 9.67855 11.3947 10.3098C11.1064 10.5671 10.8901 10.5616 10.6014 10.3039C10.4336 10.1541 10.2677 10.0027 10.1004 9.85244C9.53149 9.3417 8.96226 8.83111 8.38062 8.30914C6.20357 10.1931 4.03391 12.0708 1.83233 13.9759ZM11.0062 9.31969C14.0713 6.55237 17.1272 3.79362 20.2022 1.01743H1.79909C4.88694 3.80174 7.94362 6.55798 11.0062 9.31969ZM10.9892 15C7.63736 15 4.28536 15 0.933503 15C0.285972 15 0.000249306 14.7131 0.000249306 14.0599C-8.3102e-05 9.68195 -8.3102e-05 5.30396 0.000249306 0.926128C0.000249306 0.288777 0.289223 9.25345e-05 0.927002 9.25345e-05C7.64489 -6.11918e-05 14.3626 -6.11918e-05 21.0804 0.000388015C21.7189 0.000388015 22 0.285231 22 0.929821C22 5.3078 22 9.68549 22 14.0635C22 14.719 21.7195 15 21.0659 15H10.9892Z" />
        </svg>
        <input type="text" placeholder="Email address"/>
      </div>
      <button>GET EARLY ACCESS TO SAVE 30% OFF</button>
      <div class="disclaimer">
        <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24"><path d="M18 10v-4c0-3.313-2.687-6-6-6s-6 2.687-6 6v4h-3v14h18v-14h-3zm-10 0v-4c0-2.206 1.794-4 4-4s4 1.794 4 4v4h-8z"/></svg>
        Your information is safe and wont be shared with any third party.
      </div>
    </div>
    <div class="descr">
      A minimalist travel bag made from<br>ultra strong Dyneema® fabric.
    </div>
  </div>
</template>

<style lang="scss">
  .header-m {
    color: #fff;
    position: relative;
    background-color: #E9E1DE;
    color: #1A1A1A;

    h1 {
      font-size: 6.3vw;
      line-height: 1.5;
      margin: 10px 0 5px;
      color: #1A1A1A;
      padding: 0 20px;
    }

    .logos {
      background-color: #262626;
    }

    .padded-20 {
      padding: 15px 20px 10px;
    }

    .fullwidth {
      margin-top: 10px;
      width: 100%;
    }

    .blackmile-logo-mobile {
      width: 120px;
      height: 53px;
    }

    .kickstarter-logo-mobile {
      width: 85px;
      height: 82px;
      position: absolute;
      right: 20px;
    }

    .dyneema-logo-mobile {
      width: 52px;
      height: 49px;
    }

    .descr {
      padding: 20px 20px 30px;
      font-size: 18px;
      text-align: center;
      line-height: 1.5;
      color: #252525;
    }

    .features {
      padding: 5px 20px 10px;
      max-width: 540px;

      h3 {
        font-family: 'Avenir Next', sans-serif !important;
        margin: 0 0 10px 0;
        font-size: 16px;
        text-transform: uppercase;
      }

      b {
        color: var(--main-font-color);
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
        font-size: 14px;

        li {
          white-space: nowrap;
        }
      }
    }

    .signup {
      padding: 0 20px 0;

      .input {
        display: block;
        width: 100%;
        height: 44px;
        background: white;
        display: grid;
        grid-template-columns: auto 1fr;
        align-items: center;
        border-radius: 4px;
        padding: 0 15px;
        border: 1px solid var(--main-font-color);
      }

      button {
        width: 100%;
        background-color: var(--main-font-color);
        font-size: 16px;
        border: none;
        font-weight: 600;
        height: 44px;
        margin-top: 10px;
        border-radius: 4px;
        outline: none;
      }

      svg {
        fill: var(--main-font-color);
      }

      input[type=text] {
        font-size: 14px;
        width: 100%;
        display: block;
        padding-left: 10px;
        outline: none;
        border: none;
      }

      i {
        font-size: 3.5vw;
      }

      .disclaimer {
        display: grid;
        grid-template-columns: auto 1fr;
        grid-column-gap: 5px;
        align-items: center;
        font-size: 10px;

        svg {
          fill: #252525;
          width: 9px;
        }
      }
    }
  }
</style>

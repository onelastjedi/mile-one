<template>
  <div class="pay">
    <div class="pay__box">
      <h1>Reserve your Mile One Travel Bag made from Dyneema® fabric and get this amazing deal.</h1>
      <div class="descr">
        The Mile One is in the final stages of development and you can help us launch by reserving yours today for only $1.
      </div>
      <div class="list">
        <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24"><path d="M20.285 2l-11.285 11.567-5.286-5.011-3.714 3.716 9 8.728 15-15.285z"/></svg>
        <p class="small">Benefit: <b>With $1</b>, you can support us to take Blackmile through tooling and the first manufacturing run. As a token of our appreciation, we will be offering you the lowest price we can - <b>$ZZZ (a full X% OFF retail price of $Y)</b>.</p>
        <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24"><path d="M20.285 2l-11.285 11.567-5.286-5.011-3.714 3.716 9 8.728 15-15.285z"/></svg>
        <p class="small">Since we are in the final stages of development, we have tried to describe the Blackmile as accurately as possible, but things may change over time.</p>
        <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24"><path d="M20.285 2l-11.285 11.567-5.286-5.011-3.714 3.716 9 8.728 15-15.285z"/></svg>
        <p class="small">Blackmile will MSRP for $Y, and this is a limited time offer so <b>now is the time to support us</b>.</p>
        <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24"><path d="M20.285 2l-11.285 11.567-5.286-5.011-3.714 3.716 9 8.728 15-15.285z"/></svg>
        <p class="small">By reserving a Blackmile, you’re commiting to purchasing on the Blackmile crowdfunding page. You’ll be <b>notified via email</b> once the page is live and your payment needs to be submitted. Once payment is received, your order will be shipped out within the estimated delivery timeline.</p>
      </div>
      <div class="form">
        <div class="reservation">
          <h4>Reservation Review</h4>
          <div class="column">
            <b>Item:</b>
            <b>Price:</b>
          </div>
          <hr>
          <div class="column">
            <label><input type="radio" checked />Blackmile</label>
            $1.00
          </div>
        </div>
        <div class="billing">
          <h4>Billing details</h4>
          <label>Email:</label>
          <input type="text" placeholder="Enter your email address here"/>
          <fieldset class="card">
            <label>Credit Card Number:</label>
            <input type="text" maxlength="16" placeholder="Card number" />
          </fieldset>
          <fieldset class="cvc">
            <label>CVC Number:</label>
            <input type="text" maxlength="3" placeholder="CVC" />
          </fieldset>
          <div>
            <fieldset>
              <label>Exp. Month</label>
              <select>
                <option>01</option>
                <option>02</option>
                <option>03</option>
                <option>04</option>
                <option>05</option>
                <option>06</option>
                <option>07</option>
                <option>08</option>
                <option>09</option>
                <option>10</option>
                <option>11</option>
                <option>12</option>
              </select>
            </fieldset>
            <fieldset>
              <label>Exp. Year</label>
              <select>
                <option>2020</option>
                <option>2021</option>
                <option>2022</option>
                <option>2023</option>
                <option>2024</option>
                <option>2025</option>
                <option>2026</option>
                <option>2027</option>
                <option>2028</option>
                <option>2029</option>
                <option>2030</option>
                <option>2031</option>
              </select>
            </fieldset>
          </div>
          <button>COMPLETE RESERVATION FOR $1</button>
        </div>
        <div class="disclaimer">
          <p><b>DISCLAIMER</b>: Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.</p>
          <p>Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.</p>
          <p>Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.</p>
        </div>
      </div>
    </div>
  </div>
</template>

<style lang="scss">
  $desktop: "(min-width: 768px)";
  $mobile: "(max-width: 768px)";

  .pay {
    @media #{$desktop} {
      background-image: url('../assets/images/DSC00484.jpg');
      background-size: cover;
      background-repeat: no-repeat;
      background-position: center center;
    }

    .descr {
      line-height: 1.5;

      @media #{$desktop} {
        padding: 0 80px;
      }
    }

    h1 {
      font-size: 24px;
      line-height: 1.7;
      margin: 0;
      letter-spacing: 0.62px;
      margin-bottom: 15px;
      padding: 0 20px;

      @media #{$mobile} {
        padding: 0;
        font-size: 20px;
        margin-bottom: 20px;
        line-height: 1.5;

        br {
          display: inline;
        }
      }
    }

    input[type=radio] {
      margin-right: 8px;
    }

    button {
      cursor: pointer;
      white-space: nowrap;
      background-color: #D08938;
      border: 0;
      height: 44px;
      margin: 10px 0 10px 0;
      padding: 0;
      color: #fff;
      text-transform: uppercase;
      font-size: 12px;
      padding: 0 20px;
      border-radius: 3px;
      width: 100%;
      outline: none;
      transition: .2s all ease-out;

      &:hover {
        background-color: #B9711F;
      }
    }

    h4 {
      font-weight: normal;
      color: #D08938;
      font-size: 16px;
      margin: 0 0 10px;
    }

    hr {
      border: none;
      height: 1px;
      background-color: #979797;
    }

    &__box {
      width: 100%;
      max-width: 808px;
      border-radius: 9px;
      padding: 50px 0;
      text-align: center;
      color: #fff;
      background-color: rgba(25, 25, 25, .9);
      padding: 40px;
      margin: 50px auto;

      @media #{$mobile} {
        margin: 0;
        padding: 25px 20px 0 20px;

        br {
          display: none;
        }
      }
    }

    .list {
      padding: 20px 0;
      text-align: left;
      display: grid;
      grid-column-gap: 7px;
      grid-row-gap: 15px;
      grid-template-columns: auto 1fr;

      @media #{$mobile} {
        grid-row-gap: 15px;
      }
    }

    .small {
      margin: 0;
      line-height: 1.7 !important;

      @media #{$desktop} {
        line-height: 1.6 !important;
        font-size: 12px !important;
      }
    }

    svg {
      fill: #D08938;
      width: 12px;
      height: 20px;
    }

    .form {
      text-align: left;

      @media #{$desktop} {
        display: grid;
        grid-template-areas: "a b"
                             "c b";
        grid-column-gap: 30px;
      }
    }

    .reservation {
      font-size: 12px;
      margin-bottom: 15px;

      @media #{$desktop} {
        grid-area: a;

        h4 {
          margin-bottom: 14px;
        }
      }

      .column {
        display: grid;
        grid-template-columns: 1fr auto;
      }
    }

    .billing {
      @media #{$desktop} {
        grid-area: b;
      }

      label {
        display: inline-block;
        margin-bottom: 5px;
        font-size: 12px;
        font-weight: bold;
      }

      .fieldset {
        border: 0;
        padding: 0;
        margin: 0;
      }

      fieldset {
        border: none;
        padding-left: 0;
        margin: 0;
        display: inline-block;
      }

      .cvc {
        width: 100px;
      }

      .card {
        width: 50%;
        min-width: 200px;
        max-width: 300px;
      }

      input {
        display: block;
        border: none;
        width: 100%;
        font-size: 16px;
        padding: 13px 15px;
        outline: none;
        border-radius: 4px;
      }

      select {
        width: 70px;
        height: 24px;
        border-radius: 2px;
        outline: none;
        background: #CDCDCD;
        display: block;
      }
    }

    .disclaimer {
      @media #{$desktop} {
        grid-area: c;
      }

      line-height: 1.9;
      color: #A9A9A9;
      font-size: 8px;
      padding-bottom: 15px;
    }
  }
</style>

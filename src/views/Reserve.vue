<template>
  <div class="reserve">
    <div class="reserve__box">
      <h1>Save XX% when you reserve <br>your Mile One today!</h1>
      <p>To receive this offer, simply place a $1 deposit and you will secure your spot for an <br>exclusive discount on the Mile One Travel Bag made from Dyneema® fabric.</p>
      <p>Placing a $1 deposit now locks in a <b>XX% discount off</b> our MSRP of $Y.</p>
      <p>That means you’ll pay a total of $Z for your Mile One when we ship.</p>
      <router-link to="/pay">
        <div class="reserve__button">Reserve my mile one</div>
      </router-link>
    </div>
    <div class="reserve__box--small">
      <div class="column">
        <header>
          <svg width="25" height="26" viewBox="0 0 25 26" id="like" xmlns="http://www.w3.org/2000/svg">
            <path d="M19.5 10C19.5 10 21 5.00002 20.5 3.00001C20 1.00001 16.801 0.141621 15.254 2C13.707 3.85838 11.002 11.992 8.5 12V11H0.5V24H8.5V23C8.5 23 10.493 24 12.5 24.5C14.507 25 17.5 25.5 21.468 25C25.436 24.5 25 14 24.5 11.813C24 9.62601 21.5221 9.71027 19.5 10ZM21.468 23C19.968 23.775 15.707 23.5 13.5 23C11.293 22.5 8.5 21 8.5 21V14C14.9047 14 14.284 3.00001 17.5 3.00001C20.716 3.00002 16.5 12 16.5 12C16.5 12 22.5 11 22.5 12.5C22.5 14 22.968 22.225 21.468 23Z" />
          </svg>
          100% Refund Guarantee
        </header>
        <div class="small">
          If you cancel your reservation, we guarantee a full refund at any time before the project moves into production.
        </div>
      </div>
      <div class="column">
        <header>
          <svg width="39" height="13" viewBox="0 0 39 13" xmlns="http://www.w3.org/2000/svg">
            <path d="M28.7629 0C23.5046 0 23.035 1.51775 19.4992 1.49988C15.9633 1.51775 15.5002 0 10.2354 0C6.79222 0 3.09062 0.5395 0 1.16188V3.53763C0.532978 3.98613 1.62331 4.264 1.62656 5.84188C1.63631 12.0608 4.20695 12.9708 9.10612 13C15.6871 13 16.5759 11.4936 17.6744 6.2595C17.9181 5.09763 18.508 4.394 19.4976 4.394C20.4871 4.394 21.077 5.09925 21.3207 6.2595C22.4224 11.4936 23.3113 13 29.8923 13C34.7931 12.9708 37.3637 12.0608 37.3734 5.84188C37.3767 4.264 38.467 3.98613 39 3.53763V1.16188C35.9078 0.5395 32.2062 0 28.7629 0ZM16.0966 5.824C15.1866 10.1497 14.9786 11.4173 9.11425 11.375C4.50106 11.3474 3.24986 10.4488 3.24986 5.80775C3.24986 3.34425 3.24986 1.625 10.2354 1.625C13.3634 1.625 15.2825 2.34162 15.9406 3.2955C16.2899 3.80412 16.3436 4.654 16.0966 5.824ZM29.8841 11.375C24.0214 11.4173 23.8134 10.1497 22.9018 5.824C22.6564 4.654 22.7084 3.8025 23.0594 3.2955C23.7159 2.34162 25.6349 1.625 28.7629 1.625C35.7485 1.625 35.7485 3.34425 35.7485 5.80775C35.7485 10.4488 34.4973 11.3474 29.8841 11.375Z" />
          </svg>
          Transparency Guarantee
        </header>
        <div class="small">
          We will be transparent about the progress of our project throughout the entire campaign.
        </div>
      </div>
      <div class="column">
        <header>
          <svg width="18" height="24" viewBox="0 0 18 24" id="shield" xmlns="http://www.w3.org/2000/svg">
            <path d="M9 4.942C7.173 6.047 5.526 6.542 4 6.775V14.535C4 16.141 4.415 16.47 9 19.295V4.942ZM0 3V14.535C0 19.138 3.203 20.339 9 24C14.797 20.339 18 19.138 18 14.535V3C14.484 3 12.371 2.866 9 0C5.629 2.866 3.516 3 0 3ZM2 4.96C4.446 4.836 6.5 4.349 9 2.544C11.5 4.349 13.554 4.836 16 4.96V14.535C16 17.577 14.31 18.365 9 21.642C3.687 18.361 2 17.577 2 14.535V4.96Z" />
          </svg>
          Secure Payment
        </header>
        <div class="small">
          All orders are processed through a secure network. Your credit card is never stored in any way. We respect your privacy.
        </div>
      </div>
    </div>
  </div>
</template>

<style lang="scss">
  $desktop: "(min-width: 768px)";
  $mobile: "(max-width: 768px)";

  .reserve {
    display: grid;
    align-items: center;
    justify-items: center;
    background-image: url('../assets/images/bg/rocks-bg.jpg');
    background-size: cover;
    background-repeat: no-repeat;
    background-position: center center;

    @media #{$mobile} {
      align-items: start;
      background: none;
    }

    h1 {
      font-size: 37px;
      line-height: 1.5;
      margin: 0;
      letter-spacing: 0.62px;
      margin-bottom: 30px;

      @media #{$mobile} {
        font-size: 22px;

        br {
          display: inline;
        }
      }
    }

    p {
      letter-spacing: 0.41px;
      margin-bottom: 30px;

      @media #{$mobile} {
        max-width: 373px;
        margin-left: auto;
        margin-right: auto;
      }
    }

    .small {
      letter-spacing: 0.26px;
      margin-top: 14px;

      @media #{$mobile} {
        margin-top: 10px;
      }
    }

    &__box {
      width: 100%;
      max-width: 818px;
      border-radius: 9px;
      padding: 50px 0;
      text-align: center;
      color: #fff;
      background-color: rgba(25, 25, 25, .9);

      @media #{$mobile} {
        padding: 25px 15px 0;

        br {
          display: none;
        }
      }
    }

    &__box--small {
      margin-top: 20px;
      display: grid;
      grid-template-columns: repeat(3, 1fr);
      grid-column-gap: 22px;
      width: 100%;
      max-width: 818px;
      border-radius: 9px;
      padding: 30px;
      text-align: center;
      color: #fff;
      background-color: rgba(25, 25, 25, .9);

      @media #{$mobile} {
        display: block;
        max-width: 370px;
      }

      .column {
        @media #{$mobile} {
          margin-bottom: 20px;
        }

        header {
          height: 24px;
        }

        font-size: 14px;
        position: relative;
      }

      svg {
        margin-right: 5px;
        fill: #D08938;
        vertical-align: middle;
      }
    }

    &__button {
      display: grid;
      align-items: center;
      width: 326px;
      height: 44px;
      margin: 0 auto;
      border-radius: 3px;
      text-transform: uppercase;
      font-size: 13px;
      letter-spacing: 0.4px;
      font-weight: 600;
      background-color: #D08938;
      color: #fff;
      transition: .2s all ease-out;

      &:hover {
        box-shadow: 0 3px 6px rgba(0, 0, 0, .5);
        background-color: #B9711F;
      }
    }
  }
</style>

<template>
  <div class="contact">
    <product-header />

    <div class="contact--wrapper">
      <h1>Contact</h1>
      <p>Thanks for your interest. We will respond as soon as possible.</p>

      <form class="contact--form" @submit.prevent="onSubmit">
        <input type="text" placeholder="Name" id="name">
        <input type="text" placeholder="Email Address" id="email">
        <textarea placeholder="Message"></textarea>
        <button>Send</button>
      </form>
    </div>

  </div>
</template>

<script>
import ProductHeader from '@/components/ProductHeader'

export default {
  components: {
    ProductHeader
  },
  methods: {
    onSubmit () {
    }
  }
}
</script>

<style lang="scss">
  $mobile: "(max-width: 768px)";
  $desktop: "(min-width: 768px)";

  .contact {
    position: relative;
    background-color: #E9E1DE;

    &--wrapper {
      position: relative;
      padding: 20px;

      @media #{$desktop} {
        box-sizing: border-box;
        padding: 20px 300px 60px 20px;
        max-width: 1000px;
        margin: 0 auto;
      }
    }

    &--form {
      input {
        display: block;
        margin-bottom: 10px;
        width: 100%;
        border: none;
        border-radius: 4px;
        outline: none;
        height: 44px;
        font-size: 16px;
        padding: 0 15px;
        max-width: 390px;
        font-family: 'Avenir Next', Helvetica, Arial, sans-serif;
      }

      textarea {
        display: block;
        margin-bottom: 10px;
        width: 100%;
        border: none;
        border-radius: 4px;
        outline: none;
        padding: 15px;
        font-size: 16px;
        max-width: 620px;
        height: 290px;
        resize: none;
        font-family: 'Avenir Next', Helvetica, Arial, sans-serif;
      }

      button {
        background-color: #00CD77;
        border: none;
        width: 100%;
        max-width: 300px;
        height: 50px;
        font-size: 16px;
        text-transform: uppercase;
        outline: none;
        cursor: pointer;
      }
    }

    h1 {
      font-size: 40px;
      font-family: "Avenir Next", Helvetica, Arial, sans-serif!important;
      font-weight: 500!important;
    }

    h2 {
      font-size: 24px;
      font-family: "Avenir Next", Helvetica, Arial, sans-serif!important;
      font-weight: 500!important;
      text-align: center;

      @media #{$desktop} {
        text-align: left;
      }
    }

    p {
      line-height: 1.7;
    }
  }
</style>

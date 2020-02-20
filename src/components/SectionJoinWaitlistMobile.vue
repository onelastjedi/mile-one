<template>
  <div class="section-join-waitlist-mobile">
    <h2>Support our launch and<br>get early access deals.</h2>
    <w-input borders />
    <div class="disclaimer">
      <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24"><path d="M18 10v-4c0-3.313-2.687-6-6-6s-6 2.687-6 6v4h-3v14h18v-14h-3zm-10 0v-4c0-2.206 1.794-4 4-4s4 1.794 4 4v4h-8z"/></svg>
      Your information is safe with us and wont be shared with any third party.
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
  .section-join-waitlist-mobile {
    padding: 20px;
    background-color: #fff;

    h2 {
      text-align: center;
      margin: 0 0 15px 0;
      font-size: 26px;
    }

    .disclaimer {
      display: grid;
      grid-template-columns: auto 1fr;
      grid-column-gap: 5px;
      align-items: center;
      font-size: 10px;

      svg {
        fill: #000;
        width: 9px;
      }
    }
  }
</style>

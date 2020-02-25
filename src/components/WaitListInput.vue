<template>
  <div class="w-input">
    <div class="bg" :class="{ borders: borders }">
      <svg width="22" height="15" viewBox="0 0 22 15" xmlns="http://www.w3.org/2000/svg">
        <path fill-rule="evenodd" clip-rule="evenodd" d="M20.9841 1.6734C18.7639 3.67454 16.5769 5.64554 14.3827 7.62334C16.5864 9.53568 18.7696 11.4303 20.9841 13.352V1.6734ZM1.01062 13.3613C3.23288 11.4328 5.42101 9.53376 7.62303 7.62289C5.41672 5.63446 3.22815 3.66198 1.01062 1.6635V13.3613ZM1.83233 13.9759H20.1687C17.9633 12.0677 15.7936 10.19 13.6229 8.3118C13.5749 8.35406 13.543 8.38139 13.5118 8.40946C12.8062 9.04312 12.1023 9.67855 11.3947 10.3098C11.1064 10.5671 10.8901 10.5616 10.6014 10.3039C10.4336 10.1541 10.2677 10.0027 10.1004 9.85244C9.53149 9.3417 8.96226 8.83111 8.38062 8.30914C6.20357 10.1931 4.03391 12.0708 1.83233 13.9759ZM11.0062 9.31969C14.0713 6.55237 17.1272 3.79362 20.2022 1.01743H1.79909C4.88694 3.80174 7.94362 6.55798 11.0062 9.31969ZM10.9892 15C7.63736 15 4.28536 15 0.933503 15C0.285972 15 0.000249306 14.7131 0.000249306 14.0599C-8.3102e-05 9.68195 -8.3102e-05 5.30396 0.000249306 0.926128C0.000249306 0.288777 0.289223 9.25345e-05 0.927002 9.25345e-05C7.64489 -6.11918e-05 14.3626 -6.11918e-05 21.0804 0.000388015C21.7189 0.000388015 22 0.285231 22 0.929821C22 5.3078 22 9.68549 22 14.0635C22 14.719 21.7195 15 21.0659 15H10.9892Z" />
      </svg>
      <input type="text" placeholder="Email Address" />
    </div>
    <button>Join Waitlist</button>
  </div>
</template>

<script>
export default {
  props: {
    borders: Boolean
  }
}
</script>

<style lang="scss">
.w-input {
  display: grid;
  height: 44px;
  margin: 10px 0 3px;
  grid-template-columns: 1fr auto;

  svg {
   fill: #D08938;
  }

  input {
    outline: none;
    font-size: 12px;
    color: #1B1B1B;
    border: none;
  }

  .bg {
    border-top-left-radius: 3px;
    border-bottom-left-radius: 3px;
    background-color: #fff;
    display: grid;
    height: 44px;
    grid-template-columns: auto 1fr;
    grid-column-gap: 7px;
    align-items: center;
    padding: 0 12px;
  }

  .borders {
    border-top: 1px solid #979797;
    border-left: 1px solid #979797;
    border-bottom: 1px solid #979797;
  }

  button {
    cursor: pointer;
    white-space: nowrap;
    background-color: #D08938;
    border: 0;
    height: 44px;
    margin: 0;
    padding: 0;
    color: #fff;
    text-transform: uppercase;
    font-size: 12px;
    padding: 0 20px;
    border-top-right-radius: 3px;
    border-bottom-right-radius: 3px;
    outline: none;
    transition: .2s all ease-out;

    &:hover {
      background-color: #B9711F;
    }
  }
}
</style>

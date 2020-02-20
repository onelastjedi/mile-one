<template functional>
  <div class="section-square-photos-mobile">
    <img key="00" src="@/assets/images/20200119-DSC_5130.jpg" />
    <img key="01" src="@/assets/images/20200119-DSC_5131.jpg" />
    <img key="02" src="@/assets/images/20200119-DSC_5132.jpg" />
    <img key="03" src="@/assets/images/20200119-DSC_5133.jpg" />
  </div>
</template>

<style lang="scss">
  .section-square-photos-mobile {
    display: grid;
    grid-template-columns: 1fr 1fr;

    img {
      width: 100%;
    }
  }
</style>

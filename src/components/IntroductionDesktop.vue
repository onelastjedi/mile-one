<template functional>
  <div class="introduction" key="00">
    <div class="fabric">
      <img srcset="
        @/assets/images/desktop/introduction-dyneema.png 1x,
        @/assets/images/desktop/introduction-dyneema@2x.png 2x"
        alt="Dyneema® Fabric"
      />
      <div>
        <h1>Dyneema®<br>Fabric</h1>
        <p>Made from a revolutionary lightweight<br>fabric that has a tensile strength 15x’s<br>stonger than steel.</p>
      </div>
    </div>
    <div class="material">
      <h1>Material <span>+</span> Science</h1>
      <img srcset="
        @/assets/images/desktop/introduction-material.png 1x,
        @/assets/images/desktop/introduction-material@2x.png 2x"
        alt="Material + Science"
      />
      <p>Used in environments where there is no compromise on performance, Dyneema® fabric is ultra lightweight, weatherproof and rip-proof.</p>
    </div>
  </div>
</template>

<style lang="scss">
  .introduction {
    position: relative;
    background-color: #E9E1DE;
    height: 1200px;
    padding: 0 5%;

    h1 {
      margin: 0 0 20px 0;
      font-size: 46px;
    }

    span {
      color: var(--main-font-color);
    }

    p {
      font-size: 20px;
      line-height: 1.5;
      margin: 0;
    }

    .fabric {
      display: grid;
      align-items: top;
      grid-template-columns: auto 1fr;

      div {
        margin-top: 100px;
      }
    }

    .material {
      position: absolute;
      bottom: 20px;
      right: 5%;
      text-align: center;
      width: 600px;

      p {
        width: 420px;
        margin: 0 auto;
      }
    }
  }
</style>

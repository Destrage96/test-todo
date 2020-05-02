<template>
  <div class="layout">
    <div class="layout__header">
      <div class="layout__logo">
        <input type="checkbox"
               v-model="logo"
               id="logo"/>
        <label for="logo" v-model="logo" />
        <p>Your Todo's</p>
      </div>
    </div>
    <div class="layout__content">
      <nuxt/>
    </div>
    <div class="layout__footer">

    </div>
  </div>
</template>

<script>
  export default {
    data() {
      return {
        logo: true
      }
    }
  }
</script>

<style lang="less">
  .layout {
    height: 100%;
    display: flex;
    flex-wrap: wrap;
    justify-content: center;
    position: relative;
    background-color: ivory;
    .layout__header {
      width: 100%;
      height: 65px;
      align-items: center;
      display: flex;
      position: absolute;
      top: 0;
      background-color: #41c4c4;
      .layout__logo {
        font-size: 16px;
        padding: 0 8px;
        display: flex;
        align-items: baseline;
        margin-left: 50px;
        border: 2px solid #020303;
        border-radius: 5px;
        background-color: ivory;

        p {
          padding: 8px 8px 0;
          margin: 0 0 10px;
          border-bottom: 2px solid #020303;
        }
        input[type="checkbox"] + label:before {
          border: 2px solid #020303;
          color: #20bf4f;
          line-height: 14px;
        }

        input[type="checkbox"]:checked + label:before {
          font-size: 28px;
          line-height: 4px;
        }

        input[type="checkbox"]:checked + label:after {
          line-height: 4px;
        }
      }
    }

    //70px - высота footer
    //20px - padding
    //65px - высота header
    .layout__content {
      position: relative;
      top: 65px;
      width: 100%;
      height: calc(100% - 70px - 65px);
      padding: 20px;
    }

    .layout__footer {
      width: 100%;
      height: 70px;
      position: absolute;
      bottom: 0;
      background-color: #47494e;
    }
  }
</style>


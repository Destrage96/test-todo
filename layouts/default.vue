<template>
  <div class="layout">
    <div class="layout__header">

    </div>
    <div class="layout__content">
      <nuxt/>
    </div>
    <div class="layout__footer">

    </div>
  </div>
</template>

<style lang="less">
  .layout {
    height: 100%;
    display: flex;
    flex-wrap: wrap;
    justify-content: center;
    position: relative;
    .layout__header {
      width: 100%;
      height: 65px;
      position: absolute;
      top: 0;
      background-color: #41c4c4;
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


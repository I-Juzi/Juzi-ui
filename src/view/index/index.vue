<template>
  <div class="basic-container"
       :class="{'basic-container--block':block}">
    <el-card style="margin: auto">
      <slot>
        <router-view></router-view>
      </slot>
    </el-card>
  </div>
</template>

<script>
export default {
  name: "basicContainer",
  props: {
    block: {
      type: Boolean,
      default: false,
    }
  }
};
</script>

<style scoped lang="scss">
.basic-container {
  padding: 8px 10px;
  border-radius: 10px;
  box-sizing: border-box;
  margin: auto;
  display: block;
  .el-card {
    width: 100%;
  }
  &:first-child {
    padding-top: 0;
  }
  &--block {
    height: 100%;
    .el-card {
      height: 100%;
    }
  }
}
</style>

<script setup lang="ts">
function handleMessage() {
  NtMessage.info("消息提示");
}
</script>

<template>
  <nt-tooltip title="按钮" placement="topStart">
    <nt-button @click="handleMessage">按钮</nt-button>
    <nt-input
      placeholder="请输入用户名"
      v-clickoutside="handleMessage"
    ></nt-input>
  </nt-tooltip>
</template>

<style>
.nt-btn:active {
  color: #4fa9fd;
  border: 1px solid #4fa9fd;
}
</style>

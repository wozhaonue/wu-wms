<template>
  <div id="global-layout">
    <a-layout style="min-height: 100vh">
      <a-layout-sider
        style="background: #fff"
        v-model:collapsed="collapsed"
        :trigger="null"
        collapsible
      >
        <div class="logo">
          <img src="@/assets/favicon.svg" alt="" />
        </div>
        <a-menu v-model:selectedKeys="selectedKeys" theme="light" mode="inline">
          <a-menu-item key="1">
            <user-outlined />
            <span>nav 1</span>
          </a-menu-item>
          <a-menu-item key="2">
            <video-camera-outlined />
            <span>nav 2</span>
          </a-menu-item>
          <a-menu-item key="3">
            <upload-outlined />
            <span>nav 3</span>
          </a-menu-item>
        </a-menu>
      </a-layout-sider>
      <a-layout>
        <a-layout-header style="background: #fff; padding: 0">
          <a-row>
            <a-col flex="100px">
              <div class="menu-outlined">
                <menu-unfold-outlined
                  v-if="collapsed"
                  class="trigger"
                  @click="() => (collapsed = !collapsed)"
                />
                <menu-fold-outlined
                  v-else
                  class="trigger"
                  @click="() => (collapsed = !collapsed)"
                />
              </div>
            </a-col>
            <a-col flex="auto">
              <div class="header-title">
                <h1>Wu-MS</h1>
              </div>
            </a-col>
            <a-col flex="100px">
              <div class="header-menu">下拉菜单</div>
            </a-col>
          </a-row>
        </a-layout-header>
        <a-layout-content
          :style="{ margin: '24px 16px', padding: '24px', background: '#fff', minHeight: '280px' }"
        >
          Content
        </a-layout-content>
        <a-layout-footer style="text-align: center; font-size: 17px">
          仓库管理系统bywsb
        </a-layout-footer>
      </a-layout>
    </a-layout>
  </div>
</template>
<script lang="ts" setup>
import { ref, h } from 'vue'
import {
  UserOutlined,
  VideoCameraOutlined,
  UploadOutlined,
  MenuUnfoldOutlined,
  MenuFoldOutlined,
} from '@ant-design/icons-vue'
const selectedKeys = ref<string[]>(['1'])
const collapsed = ref<boolean>(false)
</script>
<style scoped>
#components-layout-demo-custom-trigger .trigger {
  font-size: 18px;
  line-height: 64px;
  padding: 0 24px;
  cursor: pointer;
  transition: color 0.3s;
}

#components-layout-demo-custom-trigger .trigger:hover {
  color: #1890ff;
}
.site-layout .site-layout-background {
  background: #fff;
}
#global-layout .menu-outlined {
  margin-left: 30px;
}
#global-layout .header-title {
  text-align: center;
  font-size: 28px;
}
#global-layout .logo img {
  width: 30px;
  height: auto;
}
</style>

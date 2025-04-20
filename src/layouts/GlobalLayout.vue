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
          <img v-if="collapsed" src="@/assets/cangku.png" alt="" />
          <div v-else>仓库管理系统</div>
        </div>
        <a-menu v-model:selectedKeys="selectedKeys" theme="light" mode="inline">
          <a-menu-item key="/">
            <HomeOutlined />
            <span>首页</span>
          </a-menu-item>
          <a-menu-item key="/admin">
            <video-camera-outlined />
            <span>管理员管理</span>
          </a-menu-item>
          <a-menu-item key="/user">
            <UserOutlined />
            <span>用户管理</span>
          </a-menu-item>
          <a-menu-item key="/warehouse">
            <SplitCellsOutlined />
            <span>仓库管理</span>
          </a-menu-item>
          <a-menu-item key="/category">
            <PieChartOutlined />
            <span>物品分类管理</span>
          </a-menu-item>
          <a-menu-item key="/goods">
            <GoldOutlined />
            <span>物品管理</span>
          </a-menu-item>
          <a-menu-item key="/record ">
            <FileMarkdownOutlined />
            <span>记录管理</span>
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
          仓库管理系统 by @wsb
        </a-layout-footer>
      </a-layout>
    </a-layout>
  </div>
</template>
<script lang="ts" setup>
import { ref } from 'vue'
import {
  HomeOutlined,
  VideoCameraOutlined,
  UserOutlined,
  SplitCellsOutlined,
  PieChartOutlined,
  GoldOutlined,
  FileMarkdownOutlined,
  MenuUnfoldOutlined,
  MenuFoldOutlined,
} from '@ant-design/icons-vue'
const selectedKeys = ref<string[]>([])
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
#global-layout .logo {
  margin-top: 10px;
  text-align: center;
}
#global-layout .logo img {
  height: 30px;
  width: auto;
  display: inline-block;
}
#global-layout .logo div {
  text-align: center;
  font-size: 20px;
  margin-bottom: 10px;
  color: #434343;
  font-weight: bold;
}
</style>

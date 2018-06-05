<style scoped>
.layout {
  border: 1px solid #d7dde4;
  background: #f5f7f9;
  position: relative;
  border-radius: 4px;
  overflow: hidden;
}
.layout-header-bar {
  background: #fff;
  box-shadow: 0 1px 1px rgba(0, 0, 0, 0.1);
}
.layout-logo-left {
  width: 90%;
  height: 30px;
  background: #5b6270;
  border-radius: 3px;
  margin: 15px auto;
}
.menu-icon {
  transition: all 0.3s;
}
.rotate-icon {
  transform: rotate(-90deg);
}
.menu-item span {
  display: inline-block;
  overflow: hidden;
  width: 69px;
  text-overflow: ellipsis;
  white-space: nowrap;
  vertical-align: bottom;
  transition: width 0.2s ease 0.2s;
}
.menu-item i {
  transform: translateX(0px);
  transition: font-size 0.2s ease, transform 0.2s ease;
  vertical-align: middle;
  font-size: 16px;
}
.collapsed-menu span {
  width: 0px;
  transition: width 0.2s ease;
}
.collapsed-menu i {
  transform: translateX(5px);
  transition: font-size 0.2s ease 0.2s, transform 0.2s ease 0.2s;
  vertical-align: middle;
  font-size: 22px;
}
.home_layout,
.home_Sider {
  height: 100%;
}

a{ 
text-decoration:none; 
color:#fff; 
} 
</style>
<template>
    <div class="layout home_layout">
        <Layout  class="home_Sider" >
            <Sider ref="side1" hide-trigger collapsible :collapsed-width="78" v-model="isCollapsed">
                <i-Menu :active-name="1-1" :open-names="['1','2']"  theme="dark" width="auto" :class="menuitemClasses">
                    <Submenu name="1">
                        <template  slot="title">
                             <Icon type="ios-analytics"></Icon>
                            用户中心
                        </template>
                        <MenuItem name="1-1">
                            <Icon type="ios-navigate"></Icon>
                                <router-link to="/home/user" ><span>用户信息统计</span></router-link>
                        </MenuItem>
                    </Submenu>
                    <Submenu name="2">
                        <template  slot="title">
                             <Icon type="ios-analytics"></Icon>
                            运营管理
                        </template>  
                        <MenuItem name="2-1">
                            <Icon type="ios-navigate"></Icon>
                            <router-link to="/home/message" ><span>消息管理</span></router-link>
                        </MenuItem>
                        <MenuItem name="2-2">
                            <Icon type="search"></Icon>
                            <router-link to="/home/carousel" ><span>轮播图设置</span></router-link>
                        </MenuItem>
                        <MenuItem name="2-3">
                            <Icon type="settings"></Icon>
                            <router-link to="/home/convertibility" ><span>积分兑换列表</span></router-link>
                        </MenuItem>
                        <MenuItem name="2-4">
                            <Icon type="settings"></Icon>
                            <router-link to="/home/dataserver" ><span>定制数据服务客户列表</span></router-link>
                        </MenuItem>
                    </Submenu> 
                </i-Menu>
            </Sider>
            <Layout>
                <Header :style="{padding: 0}" class="layout-header-bar">
                    <Icon @click.native="collapsedSider" :class="rotateIcon" :style="{margin: '20px 20px 0'}" type="navicon-round" size="24"></Icon>
                </Header>
                <Content :style="{margin: '20px', background: '#fff', minHeight: '260px'}">
                        <router-view></router-view>
                </Content>
            </Layout>
        </Layout>
    </div>
</template>
<script>
export default {
  data() {
    return {
        open:[1,2],
      isCollapsed: false
    };
  },
  computed: {
    rotateIcon() {
      return ["menu-icon", this.isCollapsed ? "rotate-icon" : ""];
    },
    menuitemClasses() {
      return ["menu-item", this.isCollapsed ? "collapsed-menu" : ""];
    }
  },
  methods: {
    collapsedSider() {
      this.$refs.side1.toggleCollapse();
    }
  }
};
</script>

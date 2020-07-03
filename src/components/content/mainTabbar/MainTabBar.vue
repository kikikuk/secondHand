<template>
  <tab-bar>
    <tab-bar-item link="/home">
      <img slot="icon" src="~assets/img/tabbar/home.png" alt="">
      <img slot="active-icon" src="~assets/img/tabbar/home_active.png" alt="">
      <div slot="text">首页</div>
    </tab-bar-item>
    <tab-bar-item link="/publish">
      <img slot="icon" src="~assets/img/tabbar/publish.png" alt="">
      <img slot="active-icon" src="~assets/img/tabbar/publish_active.png" alt="">
      <div slot="text">发布</div>
    </tab-bar-item>
    <!-- <tab-bar-item link="/message">
      <img slot="icon" src="~assets/img/tabbar/message.png" alt="">
      <img slot="active-icon" src="~assets/img/tabbar/message_active.png" alt="">
      <div slot="text">消息</div>
    </tab-bar-item> -->
    <tab-bar-item link="/profile">
      <img slot="icon" src="~assets/img/tabbar/profile.png" alt="">
      <img slot="active-icon" src="~assets/img/tabbar/profile_active.png" alt="">
      <div slot="text">我的</div>
    </tab-bar-item>
  </tab-bar>
</template>

  <script>
    import TabBar from 'components/common/tabbar/TabBar'
    import TabBarItem from 'components/common/tabbar/TabBarItem'

    export default {
      name: "MainTabBar",
      components: {
        TabBar, TabBarItem
      }
    }
  </script>

<style scoped>

</style>

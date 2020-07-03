<template>
  <div class="commodityList">
    <div class="header">
      <i class="el-icon-arrow-left" style="margin-right:20px" @click="back"></i>
      {{titleList[$route.query.type]}}
    </div>
    <div class="bottom" v-infinite-scroll="load">
        <div class="one" v-for="(item,index) in order" @click="toDetail(index)">
                <div class="oneTop" >
                    <span style="display: flex;flex-direction: row;">
                    <img :src="item.avartar" alt="">
                    <div style="height:50px;line-height:50px;font-size:18px;">{{item.nickName}}</div>
                    </span>
                    <!-- <div class="status">{{item.status}}</div> -->
                </div>
                <div class="two">
                    <img :src="item.picUrl[0]" alt="">
                    <div class="detailWords">{{item.description}}</div>
                </div>
                <div class="money">
                    实付款  ￥{{item.price}}元
                </div>
            </div>
    </div>
  </div>
</template>

<script>
export default {
  name: "CommodityList",
  components: {},
  data() {
    return {
      titleList: ["我发布的", "我卖出的", "我买到的"],
      order:[]
    };
  },
  computed: {},
  created(){
    console.log(this.$route.query.order)
    this.order=this.$route.query.order
  },
  updated(){
    console.log(this.$route.query.order)
    this.order=this.$route.query.order
  },
  methods: {
    back() {
      console.log("back!!!!");
      this.$router.back();
    },
    toDetail(index){
			this.$router.push({path:'/detail',query:{arrDetails:this.order[index]}})
    }
  }
};
</script>

<style scoped>
.commodityList {
  width: 100%;
  height: 100%;
}

.header {
  height: 49px;
  width: 100%;
  position: fixed;
  top: 0;
  background-color: #fff;
  z-index: 12;
  display: flex;
  flex-direction: row;
  align-items: center;
  font-size: 22px;
  padding-left: 10px;
  border-bottom: 1px #ececec solid;
}

.bottom {
  background-color: #ececce;

    width: 100%;
  display: flex;
  flex-direction: column;
  align-items: center;
  position: absolute;
  top: 49px;
  z-index: 11;
}


.one{
    margin-top: 10px;
    display: flex;
    flex-direction: column;
    width: 97.5%;
    background-color: #fff;
    border-radius: 10px;
}

.oneTop{
    display: flex;
    flex-direction: row;
    flex-wrap: nowrap;
    justify-content: space-between;
}

.oneTop img{
    height: 30px;
    width: 30px;
    border-radius: 15px;
    margin: 10px;
}


.status{
    height:50px;
    line-height:50px;
    font-size:18px;
    font-weight: bold;
    color: #ffc300;
    margin-right: 10px;
}

.two{
    width: 100%;
    display: flex;
    flex-direction: row;
    flex-wrap: nowrap;
}

.two img{
    width: 40%;
    margin: 10px;
}
.detailWords{
    margin: 10px 10px 10px 0;
    width: 50%;
    font-size: 18px;
}

.money{
    margin: 10px;
    align-self: flex-end;
}
</style>
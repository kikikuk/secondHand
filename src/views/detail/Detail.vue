<template>
  <div class="detail">
    <div class="header">
      <i class="el-icon-arrow-left" style="margin-right:20px" @click="back"></i>
      商品详情
    </div>
    <div class="top">
      <img :src="arrDetails.avartar" alt />
      <div style="display:flex;flex-direction:column">
        {{arrDetails.nickName}}
        <div style="font-size:12px;font-weight:normal;float:right;margin-right:10px">联系方式：{{arrDetails.sellerId}}</div>
      </div>
    </div>
    <div class="bottom" v-infinite-scroll="load">
      <div class="descript">
        <div class="price">￥{{arrDetails.price}}元</div>
        {{arrDetails.description}}
        <br />
感兴趣的话请联系我吧~
      </div>
      <div class="picture" v-for="item in arrDetails.picUrl">
        <img :src="item" alt />
      </div>
      <div class="xiadan" @click="xiadan">下单</div>
    </div>
  </div>
</template>

<script>
export default {
  name: "Detail",
  components: {},
  data() {
    return {
      arrDetails:{},
      tele: 18181094324,
      avartar: "https://s1.ax1x.com/2020/04/13/GXL9IA.jpg",
      nickName: "bibabo",
      price: 12,
      descirpt:
        "商品描述lalsndajaosnjasdcasdcsdcas速度可能从拉萨觉得你打破山东济南擦了擦拭调查啊实打实的长时间的此怕是地产按时到场阿斯顿从",
      picUrl: [
        "https://s1.ax1x.com/2020/04/13/GXL9IA.jpg",
        "https://s1.ax1x.com/2020/04/13/GXL9IA.jpg",
        "https://s1.ax1x.com/2020/04/13/GXL9IA.jpg",
        "https://s1.ax1x.com/2020/04/13/GXL9IA.jpg"
      ]
    };
  },
  computed: {},
  created(){
    console.log(this.$route.query.arrDetails)
    this.arrDetails=this.$route.query.arrDetails
    console.log(this.arrDetails)
  },
  updated(){
    console.log(this.$route.query.order)
    this.arrDetails=this.$route.query.order
  },
  methods: {
    back() {
      console.log("back!!!!");
      this.$router.back();
    },
    xiadan(){
      console.log('点击了下单')
      this.$axios({
        method: "post",
        url: "/order",
        data: {
          buyerId:this.$store.state.personalInformation.tele,
          goodsId:this.arrDetails.goodsId,
          sellerId:this.arrDetails.sellerId  
        }
      }).then(res => {
        console.log(res);
      });
        this.$router.push('/ok')

    }
  }
};
</script>

<style scoped>
.detail {
  width: 100%;
  height: 100vh;
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
}

.top {
  height: 60px;
  width: 100%;
  display: flex;
  flex-direction: row;
  flex-wrap: nowrap;
  align-items: center;
  position: fixed;
  top: 49px;
  z-index: 12;
  font-size: 22px;
  font-weight: bold;
  border-bottom: 1px #ececec solid;
  background-color: #fff;
}

.top img {
  height: 40px;
  width: 40px;
  border-radius: 5px;
  margin: 10px;
}

.bottom {
  width: 100%;
  display: flex;
  flex-direction: column;
  align-items: center;
  position: absolute;
  top: 109px;
  z-index: 11;
}

.descript {
  /* margin-left: 10px; */
  width: 95%;
  display: flex;
  flex-direction: column;
  margin-bottom: 10px;
  font-size: 20px;
}

.price {
  font-weight: bold;
  font-size: 24px;
  width: 100%;
  color: #f40;
  margin: 10px 0;
}

.picture {
  width: 95%;
  display: flex;
  flex-direction: column;
  /* margin-left: 8px; */
}

.picture img {
  width: 100%;
  margin-bottom: 2px;
}

.xiadan{
  height: 35px;
  line-height: 35px;
  text-align: center;
  width: 60px;
  border-radius: 20px;
  position: fixed;
  top: 85%;
  left: 75%;
  color: #fff;
  background-color: #f40;
}
</style>
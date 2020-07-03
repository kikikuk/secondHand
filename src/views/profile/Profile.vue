<template>
    <div class="profile">
        <div class="top">
            <!-- <img class="set" @click="set" src="~assets/img/profile/setting.png" alt=""> -->
            <img class="avartar" :src="personalInformation.avartar" alt="">
            <div class="nickname">{{personalInformation.nickName}}</div>
            <div class="school">{{personalInformation.school}}</div>
            <div class="name">{{personalInformation.name}}</div>
        </div>
        <div class="mid">
            <div class="midone" @click="toListPage(index)" v-for="item,index in toList">
                <img :src="item.icon" alt="">
                {{item.word}}
            </div>
        </div>
        <div class="bottom">最近一笔订单
            <div class="one" @click="toDetail" v-if="allGoods[0]?true:false">
                <div class="oneTop">
                    <span style="display: flex;flex-direction: row;">
                        <img :src="allGoods[0].avartar" alt="">
                        <div
                            style="height:50px;line-height:50px;font-size:18px;"
                        >{{allGoods[0].nickName}}</div>
                    </span>
                    <!-- <div class="status">{{allGoods[0].status}}</div> -->
                </div>
                <div class="two">
                    <img :src="allGoods[0].picUrl[0]" alt="">
                    <div class="detailWords">{{allGoods[0].description}}</div>
                </div>
                <div class="money">实付款 ￥{{allGoods[0].price}}元</div>
            </div>
            <div v-else style="width:100%;text-align:center;margin-top:30px;">暂无相关订单</div>
        </div>
    </div>
</template>

<script>
export default {
  name: "Profile",
  components: {},
  data() {
    return {
      allGoods: [],
      partGoods:[],
      buyGoods:[],
      personalInformation: {},
      toList: [
        {
          icon: require("assets/img/profile/publish.png"),
          word: "我发布的"
        },
        {
          icon: require("assets/img/profile/sell.png"),
          word: "我卖出的"
        },
        {
          icon: require("assets/img/profile/buy.png"),
          word: "我买到的"
        }
      ]
    };
  },
  computed: {},
  created() {
    console.log("页面进来了");
    console.log(this.$store.state.personalInformation);
    this.personalInformation = this.$store.state.personalInformation;
    // 查看相关订单
    this.$axios({
      method: "get",
      url: "/relatedOrder",
      params: {
        sellerId: this.personalInformation.tele
      }
    }).then(res => {
      console.log(res);
      this.allGoods = res.data;
    });
    // 我买到的
    this.$axios({
      method: "get",
      url: "/hadBuy",
      params: {
        buyerId: this.personalInformation.tele
      }
    }).then(res => {
      console.log(res);
      this.buyGoods = res.data;
    });
  },
  methods: {
      set(){
      this.$router.push('/setting');

      },
    toListPage(index) {
        this.partGoods=[]
        if(index==0){
            this.partGoods=this.allGoods
        }else if(index==1){
            // 卖出的
            for(let item of this.allGoods){
                if(item.buyerId){
                    this.partGoods.push(item)
                }
            }
        }else{
            this.partGoods=this.buyGoods
        }
      this.$router.push({ path: "/commodityList", query: { order: this.partGoods,type:index } });
    },
    toDetail() {
	  this.$router.push({path:'/detail',query:{arrDetails:this.allGoods[0]}})
    }
  }
};
</script>

<style scoped>
.profile {
  width: 100%;
  height: 100vh;
  background-color: #ececce;
}
.top {
  height: 225px;
  width: 100%;
  background-color: #ffc300;
  display: flex;
  flex-direction: column;
  align-items: center;
  position: fixed;
  top: 0;
  z-index: 10;
}

.mid {
  display: flex;
  flex-direction: row;
  flex-wrap: nowrap;
  justify-content: space-around;
  align-items: center;
  height: 100px;
  width: 95%;
  margin-left: 2.5%;
  background-color: #fff;
  border-radius: 20px;
  position: fixed;
  top: 175px;
  z-index: 10;
}

.bottom {
  width: 100%;
  height: 70%;
  position: fixed;
  top: 290px;
  font-weight: bold;
  padding-left: 2.5%;
}

.set {
  height: 30px;
  width: 30px;
  align-self: flex-end;
  margin-right: 10px;
  margin-top: 20px;
}
.avartar {
  height: 60px;
  width: 60px;
  margin-top: 30px;
  border-radius: 30px;
}
.nickname {
  font-weight: bolder;
  font-size: 20px;
  margin-top: 10px;
}

.school {
  margin-top: 10px;
  font-size: 12px;
}

.name {
  margin-top: 5px;
  font-size: 12px;
}

.midone {
  height: 90px;
  width: 80px;
  display: flex;
  flex-direction: column;
  text-align: center;
  align-items: center;
  justify-content: space-around;
  font-size: 12px;
  font-weight: bold;
}

.midone img {
  height: 45px;
  width: 40px;
}

.one {
  margin-top: 10px;
  display: flex;
  flex-direction: column;
  width: 97.5%;
  background-color: #fff;
  border-radius: 10px;
}

.oneTop {
  display: flex;
  flex-direction: row;
  flex-wrap: nowrap;
  justify-content: space-between;
}

.oneTop img {
  height: 30px;
  width: 30px;
  border-radius: 15px;
  margin: 10px;
}

.status {
  height: 50px;
  line-height: 50px;
  font-size: 18px;
  font-weight: bold;
  color: #ffc300;
  margin-right: 10px;
}

.two {
  width: 100%;
  display: flex;
  flex-direction: row;
  flex-wrap: nowrap;
}

.two img {
  width: 40%;
  margin: 10px;
}
.detailWords {
  margin: 10px 10px 10px 0;
  width: 50%;
  font-size: 18px;
}

.money {
  margin: 10px;
  align-self: flex-end;
}
</style>
<template>
  <div class="home">
    <div class="top">
      <div class="nav-top">首页</div>
      <!-- <div class="search-top">
        <div class="el-icon-search search-icon"></div>
        <input type="text" placeholder="搜索你想要的内容" />
      </div> -->
    </div>
    <div class="bottom" v-infinite-scroll="load">
      <el-carousel height="150px">
        <el-carousel-item v-for="item in swiper" :key="item">
          <img :src="item" alt="" style="width=100%">
        </el-carousel-item>
      </el-carousel>
      <div class="category">
        <span :class="categoryId==key?'one-category1':'one-category'" 
        v-for="item,key in arrCategory" 
        @click="changCategory(key)">
          <img :src="item.imgurl" alt />
          {{item.words}}
        </span>
      </div>
      <div class="details">
        <div class="one-detail" v-for="item,key in arrDetails" @click="intoDetails(key)">
          <img class="picurl" :src="item.picUrl[0]" alt />
          <div class="description">{{item.description}}</div>
          <div class="person">
            <img class="avatar" :src="item.avartar" alt />
            <span class="perName">{{item.nickName}}</span>
            <span class="price">￥{{item.price}}元</span>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: "Home",
  components: {},
  data() {
    return {
      type:'',
      swiper:['https://s1.ax1x.com/2020/05/10/Y36Ep8.png',
      'https://s1.ax1x.com/2020/05/10/Y36V1S.png',
      'https://s1.ax1x.com/2020/05/10/Y36kff.png',
      'https://s1.ax1x.com/2020/05/10/Y36FtP.png'],
      categoryId:'0',
      arrCategory: [
        {
          imgurl: require("assets/img/home/book.png"),
          words: "书籍"
        },
        { imgurl: require("assets/img/home/mobilephone.png"), words: "数码" },
        { imgurl: require("assets/img/home/clothes.png"), words: "衣物" },
        { imgurl: require("assets/img/home/bag.png"), words: "箱包" },
        { imgurl: require("assets/img/home/other.png"), words: "其他" }
      ],
      arrDetails: []
    };
  },
  computed: {},
  created(){
    // 请求默认的商品信息
    this.$axios({
        method:'get',
        url:'/changCategory',
        params:{
          type:'book'
        }
      }).then(res=>{
        console.log(res)
        this.arrDetails=res.data
      })
  },
  methods: {
    changCategory(key){
      this.categoryId=key;
      console.log(this.categoryId)
      switch(this.categoryId){
        case 0:
          this.type='book'
          break;
        case 1:
          this.type='phone'
          break;
        case 2:
          this.type='cloth'
          break;
          case 3:
          this.type='bag'
          break;
          case 4:
          this.type='other'
          break;
      }
      console.log(this.type)
      this.$axios({
        method:'get',
        url:'/changCategory',
        params:{
          type:this.type
        }
      }).then(res=>{
        console.log(res)
        this.arrDetails=res.data
      })
    },
    intoDetails(key){
      // console.log(this.arrDetails[key])
			this.$router.push({path:'/detail',query:{arrDetails:this.arrDetails[key]}})
    }
  }
};
</script>

<style scoped>
.home {
  /* height: 100vh; */
  width: 100%;
  background-color: #ececce;
}

.top {
  width: 100%;
  height: 60px;
  position: fixed;
  top: 0;
  z-index: 10;
}

.bottom {
  position: relative;
  top: 60px;
  width: 100%;
  padding: 0 2.5%;
}

.nav-top {
  width: 100%;
  height: 80%;
  background-color: #ffc300;
  border-bottom-left-radius: 20px;
  border-bottom-right-radius: 20px;
  box-shadow: 0 1px 3px #b6b5b5;
  text-align: center;
  padding-top: 4%;
  font-size: 18px;
  font-weight: bold;
}

.search-top {
  width: 90%;
  height: 40px;
  background-color: #fff;
  border-radius: 25px;
  position: absolute;
  top: 50%;
  left: 5%;
}

.search-icon {
  height: 40px;
  line-height: 40px;
  margin-left: 5%;
  margin-right: 3%;
  font-size: 18px;
}

.search-top input {
  width: 80%;
  border: none;
  height: 60%;
}

.el-carousel__item h3 {
  color: #475669;
  font-size: 14px;
  opacity: 0.75;
  line-height: 150px;
  margin: 0;
}

.el-carousel__item:nth-child(2n) {
  background-color: #99a9bf;
}

.el-carousel__item:nth-child(2n + 1) {
  background-color: #d3dce6;
}

.category {
  height: 90px;
  display: flex;
  flex-direction: row;
  flex-wrap: nowrap;
  justify-content: space-around;
}

.one-category {
  margin-top: 10px;
  height: 85px;
  width: 60px;
  display: flex;
  flex-direction: column;
  justify-content: space-around;
  font-size: 12px;
  text-align: center;
}

.one-category1{
  margin-top: 10px;
  height: 85px;
  width: 60px;
  display: flex;
  flex-direction: column;
  justify-content: space-around;
  font-size: 12px;
  text-align: center;
  background-color: #fff;
  border-radius: 10px;
}

.one-category img {
  height: 50px;
  width: 50px;
  margin-left: 5px;
}

.one-category1 img {
  height: 50px;
  width: 50px;
  margin-left: 5px;
}

.details {
  display: flex;
  flex-direction: row;
  flex-wrap: wrap;
  justify-content: space-around;
}

.one-detail {
  width: 45%;
  display: flex;
  flex-direction: column;
  flex-wrap: wrap;
  border-radius: 20px;
  margin-top: 20px;
  background-color: #fff;
  font-size: 12px;
}

.picurl {
  width: 100%;
  border-top-left-radius: 20px;
  border-top-right-radius: 20px;
}

.description {
  width: 90%;
  margin-left: 5%;
  height: 30px;
  line-height: 15px;
  margin-top: 5px;
  overflow: hidden;
  white-space: wrap;
  text-overflow: ellipsis;
}

.person {
  height: 25px;
  display: flex;
  flex-direction: row;
  flex-wrap: nowrap;
 
  margin-top: 5px;
  font-size: 12px;
  line-height: 25px;
}

.avatar {
  height: 20px;
  width: 20px;
  border-radius: 10px;
  margin-left: 5px;
}

.perName {
  margin-left: 5px;
  height: 25px;
  line-height: 25px;
  display: inline-block;
}

.price {
  color: #ffc300;
  font-weight: bold;
  margin-left: 90px;
}
</style>
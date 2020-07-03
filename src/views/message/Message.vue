<template>
    <div class="message">
        <div class="top">
      <div class="nav-top">消息</div>
    </div>
    <div class="bottom" v-infinite-scroll="load">
      <div class="choose">
      <div class="chooseone">
        <img src="~assets/img/message/message.png" alt="">
        消息通知
      </div>
      <div class="grayline"></div>
      <div class="chooseone">
        <img src="~assets/img/message/pro.png" alt="">
        交易进度
      </div>
    </div>
    <div class="mes" v-for="item in message">
      <img :src="item.avatar" alt="">
      <div class="word">
        <div class="name">{{item.name}}</div>
        <div class="content">{{item.content}}</div>
        <div class="time">{{item.time}}</div>
      </div>
    </div>
    </div>
    
    </div>
</template>

<script>
    export default {
        name:"Message",
        components: {

        },
        data () {
            return {
              message:[
                {
                  avatar: "https://s1.ax1x.com/2020/04/13/GXL9IA.jpg",
                  name:'xiaoliu',
                  content:'啦啦啦啦难道就是你的家十大山东境内发生的是觉得你发i单反时代精神的那份拉萨的',
                  time:'2020/4/16'
                },{
                  avatar: "https://s1.ax1x.com/2020/04/13/GXL9IA.jpg",
                  name:'xiaoliu',
                  content:'啦啦啦啦难道就是你的家十大山东境内发生的是觉得你发i单反时代精神的那份拉萨的',
                  time:'2020/4/16'
                },{
                  avatar: "https://s1.ax1x.com/2020/04/13/GXL9IA.jpg",
                  name:'xiaoliu',
                  content:'啦啦啦啦难道就是你的家十大山东境内发生的是觉得你发i单反时代精神的那份拉萨的',
                  time:'2020/4/16'
                },{
                  avatar: "https://s1.ax1x.com/2020/04/13/GXL9IA.jpg",
                  name:'xiaoliu',
                  content:'啦啦啦啦难道就是你的家十大山东境内发生的是觉得你发i单反时代精神的那份拉萨的',
                  time:'2020/4/16'
                },{
                  avatar: "https://s1.ax1x.com/2020/04/13/GXL9IA.jpg",
                  name:'xiaoliu',
                  content:'啦啦啦啦难道就是你的家十大山东境内发生的是觉得你发i单反时代精神的那份拉萨的',
                  time:'2020/4/16'
                },{
                  avatar: "https://s1.ax1x.com/2020/04/13/GXL9IA.jpg",
                  name:'xiaoliu',
                  content:'啦啦啦啦难道就是你的家十大山东境内发生的是觉得你发i单反时代精神的那份拉萨的',
                  time:'2020/4/16'
                },{
                  avatar: "https://s1.ax1x.com/2020/04/13/GXL9IA.jpg",
                  name:'xiaoliu',
                  content:'啦啦啦啦难道就是你的家十大山东境内发生的是觉得你发i单反时代精神的那份拉萨的',
                  time:'2020/4/16'
                }
              ]
            };
        },
        computed: {

        },
        methods: {

        },
    }
</script>

<style scoped>
.message{
  height: 100vh;
  width: 100%;
  background-color: #fff;
}

.top {
  width: 100%;
  height: 60px;
  position: fixed;
  top: 0;
  z-index: 10;
}

.bottom{
  position: relative;
  top: 60px;
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

.choose{
  width: 95%;
  margin-left: 2.5%;
  display: flex;
  flex-direction: row;
  flex-wrap: nowrap;
  height: 80px;
  justify-content: space-around;
  align-items: center;
  border-radius: 25px;
  /* border: #b6b5b5 1px solid; */
  box-shadow:2px 2px 3px #b6b5b5;
  background-color: #fff;
}

.chooseone{
  width: 40%;
  display: flex;
  flex-direction: row;
  flex-wrap: nowrap;
  height: 35px;
  line-height: 35px;
  font-weight: bolder;
}

.chooseone img{
  height: 35px;
  margin-right: 20px;
}
.grayline{
  background-color: #d4d4d4;
  height: 40px;
  width: 2px;
}

.mes{
  width: 95%;
  margin-left: 2.5%;
  height: 100px;
  border-bottom: #b6b5b5 1px solid;
  display: flex;
  flex-direction: row;
  flex-wrap: nowrap;

}

.mes img{
  margin-top: 10px;
  margin-left: 10px;
  height: 50px;
  border-radius: 5px;
}

.word{
  margin: 10px 0;
  height: 80px;
  display: flex;
  flex-direction: column;
  justify-content: space-around;
  margin-left: 10px;
}

.name{
  font-weight: bolder;
  color: black;
  font-size: 20px;
}

.content{
  height: 30px;
  line-height: 30px;
  overflow: hidden;
  text-overflow: ellipsis;
  white-space: wrap;
}
</style>
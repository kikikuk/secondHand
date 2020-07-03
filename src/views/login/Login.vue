<template>
  <div class="login">
    <img class="topImg" src="https://s1.ax1x.com/2020/05/09/YQ9OHA.png" alt="">
    <div class="query">
      <div class="top">
        <div :class="isChoose==1?'topOne1':'topOne'" id="1" @click="choose">登录</div>
        <div :class="isChoose==2?'topOne1':'topOne'" id="2" @click="choose">注册</div>
      </div>
      <div class="mid">
        <div class="in">账号:
          <div class="input">
            <el-input v-model="account" placeholder="请输入手机号码" maxlength="11" @input="changeAcc"></el-input>
          </div>
          <!-- <input type="number" placeholder="请输入手机号码"> -->
        </div>
        <div class="in">密码:
          <div class="input">
            <el-input
              v-model="psd"
              placeholder="请输6位密码"
              show-password
              maxlength="6"
              @input="changePsd"
            ></el-input>
          </div>
          <!-- <input type="password" placeholder="请输入密码"> -->
        </div>
      </div>
      <button class="btn" @click="login">{{isChoose==2?'注册':'登录'}}</button>
    </div>
    <!-- 遮罩层 -->
    <div class="mack" v-if="ifMack">
      <div class="mackQ">
        <div style="font-size: 22px;font-weight: bold;">提示</div>
        <div style="font-size: 20px;">{{message}}</div>
        <el-button type="info" round @click="closeMack">确定</el-button>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: "Login",
  components: {},
  data() {
    return {
      ifMack: false,
      message: "账号密码不能为空",
      isChoose: 1,
      account: "",
      psd: "",
      inAcc: "",
      inPsd: ""
    };
  },
  computed: {},
  methods: {
    closeMack() {
      this.ifMack = false;
    },
    choose(e) {
      console.log(e.target.id);
      this.isChoose = e.target.id;
    },
    changeAcc(e) {
      console.log("账号");
      console.log(e);
      this.inAcc = e;
    },
    changePsd(e) {
      console.log("密码");
      console.log(e);
      this.inPsd = e;
    },
    login() {
      console.log("点击了登录");
      if (this.inAcc && this.inPsd) {
        if (this.isChoose == 1) {
          // 点击的登录
          // 登录查询是否有账号
          this.$axios({
            method: "get",
            url: "/hadAccount",
            params: {
              tele: this.inAcc
            }
          }).then(res => {
            if (!res.data[0]) {
              this.ifMack = true;
              this.message = "账号不存在，请先注册";
            }
            console.log(res);

            if (res.data[0].password == this.inPsd) {
              this.$store.commit('edit',res.data[0])
              this.$router.push("/home");
            } else {
              this.ifMack = true;
              this.message = "密码不正确";
            }
          });
        } else {
          //点击的注册
          this.$axios({
            method: "post",
            url: "/registered",
            data: {
              tele: this.inAcc,
              password:this.inPsd
            }
          }).then(res => {
            console.log(res);
            if(res.data=='插入成功'){
              this.$store.commit('edit',{tele: this.inAcc,password:this.inPsd})
              this.$router.push({path:'/setting',query:{tele: this.inAcc,password:this.inPsd}});
            }else{
              this.ifMack = true;
              this.message = "注册失败，请重试";
            }
          });
        }
      } else {
        this.ifMack = true;
        this.message = "账号密码不能为空";
      }
    }
  }
};
</script>

<style scoped>
.login {
  width: 100%;
  height: 100vh;
  background-color: #ffc300;
  position: fixed;
  z-index: 11;
  display: flex;
  justify-content: center;
}

.topImg {
  height: 40%;
  /* width: 40%; */
}

.query {
  height: 45%;
  width: 90%;
  position: absolute;
  top: 40%;
  background-color: #fff;
  z-index: 12;
  border-radius: 20px;
  box-shadow: 2px 2px 2px rgb(145, 145, 145);
  padding: 10px;
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  align-items: center;
}

.top {
  display: flex;
  flex-direction: row;
  justify-content: space-around;
}

.topOne {
  width: 100px;
  font-size: 25px;
  font-weight: bold;
  height: 50px;
  line-height: 50px;
  text-align: center;
}

.topOne1 {
  color: #ffc300;
  width: 100px;
  font-size: 27px;
  font-weight: bold;
  height: 50px;
  line-height: 50px;
  text-align: center;
  border-bottom: 1px #ffc300 solid;
}

.in {
  font-size: 20px;
  display: flex;
  flex-direction: row;
  justify-content: space-around;
  height: 70px;
  line-height: 70px;
}

.input {
  width: 75%;
  margin-left: 10px;
}

.btn {
  background-color: #ffc300;
  border: none;
  height: 50px;
  width: 100px;
  border-radius: 20px;
  color: aliceblue;
  font-size: 21px;
  font-weight: bold;
  box-shadow: 2px 2px 2px #c2c2c2;
}

.mack {
  height: 100%;
  width: 100%;
  position: fixed;
  z-index: 14;
  background: rgba(0, 0, 0, 0.6);
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
}

.mackQ {
  height: 30%;
  width: 80%;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: space-around;
  z-index: 15;
  text-align: center;
  background: #fff;
}
</style>
<template>
  <div class="publish">
    <div class="top">
      <div class="nav-top">发布</div>
    </div>
    <div class="content">
      <div class="description">
        <el-input
          type="textarea"
          :rows="8"
          placeholder="请输入商品描述:品牌型号，新旧程度，入手渠道，转手原因等。"
          v-model="textarea"
        ></el-input>
      </div>
      <div class="picUpload">
        <el-upload
          action="https://jsonplaceholder.typicode.com/posts/"
          list-type="picture-card"
          :on-preview="handlePictureCardPreview"
          :on-remove="handleRemove"
          :on-change="picUp"
        >
          <i class="el-icon-plus"></i>
        </el-upload>
        <el-dialog :visible.sync="dialogVisible">
          <img width="100%" :src="dialogImageUrl" alt="">
        </el-dialog>
      </div>
      <div class="priceinput">
        价格
        <input type="text" placeholder="请输入价格" v-model="price">
      </div>
      <div class="priceinput" style="margin-top:20px;">
        <el-radio-group v-model="radio">
          <el-radio :label="1">书籍</el-radio>
          <el-radio :label="2">数码</el-radio>
          <el-radio :label="3">衣物</el-radio>
          <el-radio :label="4">箱包</el-radio>
          <el-radio :label="5">其他</el-radio>
        </el-radio-group>
      </div>
      <button class="publicBtn" @click="addData">发布</button>
    </div>
  </div>
</template>

<script>
export default {
  name: "Publish",
  components: {},
  data() {
    return {
      picUrl: [],
      radio: 1,
      price: 0,
      textarea: "",
      dialogImageUrl: "",
      dialogVisible: false
    };
  },
  computed: {},
  created() {
    console.log("页面进来了");
    console.log(this.$store.state.personalInformation);
  },

  methods: {
    handleRemove(file, fileList) {
      console.log(file);
      console.log(fileList);
    },
    handlePictureCardPreview(file) {
      this.dialogImageUrl = file.url;
      this.dialogVisible = true;
      console.log("图片放大");
    },
    picUp(event, file, fileList) {
      // 图片上传
      console.log("上传中！！！！！");
      console.log(file);
      for (let item of file) {
        this.picUrl.push(item.url);
      }
    },
    addData() {
      console.log("点击了发布");
      // console.log(this.textarea);
      // console.log(this.picUrl);
      // console.log(this.price);
      // console.log(this.radio);
      switch (this.radio) {
        case 1:
          this.type = "book";
          break;
        case 2:
          this.type = "phone";
          break;
        case 3:
          this.type = "cloth";
          break;
        case 4:
          this.type = "bag";
          break;
        case 5:
          this.type = "other";
          break;
      }
      this.$axios({
        method: "post",
        url: "/publish",
        data: {
          description: this.textarea,
          picUrl: this.picUrl,
          price: this.price,
          type: this.type,
          sellerId:this.$store.state.personalInformation.tele,
          nickName:this.$store.state.personalInformation.nickName,
          name:this.$store.state.personalInformation.name,
          school:this.$store.state.personalInformation.school,
          avartar:this.$store.state.personalInformation.avartar
        }
      }).then(res => {
        console.log(res);
        this.textarea=''
      this.picUrl=[]
      this.price=0
      this.radio=1
      });
    }
  }
};
</script>

<style scoped>
.publish {
  height: 100vh;
  width: 100%;
  background-color: #fff;
}

.top {
  width: 100%;
  height: 60px;
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

.description {
  width: 90%;
  margin-left: 5%;
  height: 200px;
}

.picUpload {
  width: 90%;
  margin-left: 5%;
}
.priceinput {
  width: 90%;
  margin-left: 5%;
  margin-top: 20px;
  height: 50px;
  line-height: 50px;
  display: flex;
  justify-content: space-around;
}
.priceinput input {
  border: none;
  border-bottom: 1px solid #ffc300;
}

.publicBtn {
  height: 35px;
  line-height: 35px;
  width: 60px;
  text-align-last: center;
  border-radius: 20px;
  float: right;
  background-color: #ffc300;
  margin-right: 10%;
  margin-top: 20px;
}
</style>
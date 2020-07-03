<template>
    <div class="setting">
        <div class="header">
            <i class="el-icon-arrow-left" style="margin-right:20px" @click="back"></i>
            修改信息
        </div>
        <div class="bottom">
          <!-- 选择头像：
            <el-upload
                class="avatar-uploader"
                action="https://jsonplaceholder.typicode.com/posts/"
                :show-file-list="false"
                :on-success="handleAvatarSuccess"
                :before-upload="beforeAvatarUpload"
                :on-change="upAvartar"
            >
                <img v-if="imageUrl" :src="imageUrl" class="avatar">
                <i v-else class="el-icon-plus avatar-uploader-icon"></i>
            </el-upload> -->
            学校：
            <el-input v-model="school" placeholder="请输入内容"></el-input>姓名：
            <el-input v-model="name" placeholder="请输入内容"></el-input>昵称：
            <el-input v-model="nickName" placeholder="请输入内容"></el-input>
            <div class="btn">
                <el-button type="warning" round @click="update">修改</el-button>
            </div>
        </div>
    </div>
</template>

<script>
export default {
  name: "Setting",
  components: {},
  data() {
    return {
      imageUrl: "",
      school:"",
      name:'',
      nickName:'',
      obj:{}
    };
  },
  computed: {},
  methods: {
    back() {
      console.log("back!!!!");
      this.$router.back();
    },
    handleAvatarSuccess(res, file) {
      this.imageUrl = URL.createObjectURL(file.raw);
    },
    beforeAvatarUpload(file) {
      const isJPG = file.type === "image/jpeg";
      const isLt2M = file.size / 1024 / 1024 < 2;

      if (!isJPG) {
        this.$message.error("上传头像图片只能是 JPG 格式!");
      }
      if (!isLt2M) {
        this.$message.error("上传头像图片大小不能超过 2MB!");
      }
      return isJPG && isLt2M;
    },
    upAvartar(file, fileList){
        console.log(file)
    },
    update(){
        console.log(this.imageUrl)
        console.log(this.school)
        console.log(this.name)
        console.log(this.nickName)

         //点击修改数据
          this.$axios({
            method: "post",
            url: "/update",
            data: {
              tele: this.$route.query.tele,
              password:this.$route.query.password,
              nickName:this.nickName,
              name:this.name,
              school:this.school,
              avartar:this.imageUrl
            }
          }).then(res => {
            console.log(res);
            if(res.data=='修改成功'){
              this.obj={
                tele: this.$route.query.tele,
              password:this.$route.query.password,
              nickName:this.nickName,
              name:this.name,
              school:this.school,
              avartar:this.imageUrl
              }
              this.$store.commit('edit',this.obj)
              console.log('修改成功零零零零')
              console.log(this.obj)
              console.log(this.$store.state.personalInformation)
              this.$router.push('/home');
            }
          });
    }
  }
};
</script>

<style scoped>
.setting {
  width: 100%;
  height: 100vh;
  background-color: #fff;
  position: fixed;
  top: 0;
  left: 0;
  z-index: 11;
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
  border-bottom: 1px #8c939d solid;
}

.avatar-uploader .el-upload {
  border: 1px dashed #d9d9d9;
  border-radius: 6px;
  cursor: pointer;
  position: relative;
  overflow: hidden;
}
.avatar-uploader .el-upload:hover {
  border-color: #409eff;
}
.avatar-uploader-icon {
  font-size: 28px;
  color: #8c939d;
  width: 50px;
  height: 50px;
  line-height: 50px;
  text-align: center;
  /* border: 1px #8c939d solid; */
  margin-top: 10px;
}
.avatar {
  width: 178px;
  height: 178px;
  display: block;
}

.bottom {
  position: fixed;
  top: 49px;
  padding: 20px;
  font-size: 20px;
  font-weight: bold;
  line-height: 50px;
}

.btn {
  width: 100%;
  display: flex;
  justify-content: center;
  margin-top: 30px;
}
</style>
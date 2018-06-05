<template>
       <div class="login">
           <div class="login_md">
                账号:<Input v-model="uName" placeholder="请输入账号..." style="width: 300px" />
                密码:<Input type="password" v-model="pwd" placeholder="请输入密码..." style="width: 300px" />
                <Button style="margin-top:8px" :loading="loading"  @click="event().login()" type="success" long>
                     <span v-if="!loading">登录</span>
                    <span v-else>Loading...</span>
                </Button>
           </div>
        </div>
</template>
<script>
import md5 from "md5";
import qs from "qs";
import { _cookie, _localStorage } from "@/utils/cookie";

export default {
  data() {
    return {
      uName: "",
      pwd: "",
      loading:false
    };
  },
  methods: {
    event() {
      let _this = this;
      return {
        login: async () => {
          this.loading = true
          let data = await this.$ajax({
            method: "post",
            url: `/api/shuzhi/login.html`,
            data: qs.stringify({
              uName: this.uName,
              pwd: md5(this.pwd)
            })
          });
          this.loading = false;
          if (data.success) {
            this.$Message.success("登录成功");
            _cookie.setCookies({ t }, 30);
            _localStorage.setLocalStorage("user", data.data);
            this.$router.push("/home");
            let t = data.data.token;
          } else {
            this.$Message.error(data.message || "登录失败");
          }
        }
      };
    }
  }
};
</script>
<style scoped>
.login {
  position: absolute;
  left: 0;
  right: 0;
  top: 0;
  bottom: 0;
}
.login_md {
  position: absolute;
  width: 300px;
  top: 50%;
  left: 50%;
  transform: translate(-50%);
}
</style>

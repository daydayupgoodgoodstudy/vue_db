<template>
  <div>
    <router-link to="/login">to login</router-link>
    <div @click="toLogin">tologin</div>
  </div>
</template>
<script>
export default {
  name: "Page404",
  data() {
    return {};
  },
  methods:{
      toLogin(){
          alert(11)
          this.$router.push('/500')
      }
  }
};
</script>
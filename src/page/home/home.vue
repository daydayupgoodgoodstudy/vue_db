<template>
    <div class="home">
        <div class="layout-sider">
            <div class="layout-sider-children"></div>
        </div>
        <div class="layout"></div>
        <!-- <span @click="loginOut">退出</span>
        <div>姓名:{{userinfo.name}}</div>
        <img :src="userinfo.avator" alt=""> -->

    </div>
</template>
<script>
import { _localStorage } from '@/utils/cookie';
export default {
    name:'home',
    data(){
        return {
            userinfo:{}
        }
    },
    mounted(){
        this.userinfo = _localStorage.getLocalStorage('userinfo')
    },
    methods:{
        loginOut(){
            _localStorage.delLocalStorage('userinfo')
            this.$router.push('/login')
        }
    }
}
</script>
<style>
    .login{
        position : absolute;
        
    }
</style>
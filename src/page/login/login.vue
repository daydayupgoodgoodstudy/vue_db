<template>
    <div class="login">
        <p>用户名</p>
        <input v-model="username" type="text" >
        <p>密码</p>
        <input v-model="password" type="password" >
        <button @click="Login">提交</button>
    </div>
</template>
<script>
import { _localStorage } from '@/utils/cookie';

export default {
    name:'Login',
    data(){
        return {
            username:"",
            password:""
        }
    },
    mounted(){
        console.log(this.$router,'this.route')
    },
    methods:{
        async Login(){
            let result = await this.$http.post('login',{
                username:this.username,
                password:this.password
            })
            console.log(result.data)
            _localStorage.setLocalStorage('userinfo',result.data);
            this.$router.push('home')
        }
    }
}
</script>
<style>
    .login{
        position : absolute;
        
    }
</style>
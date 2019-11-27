<template>
    <div id="app">
        <router-view></router-view>
    </div>
</template>
<script>
var Login = { template: '<div>login</div>' };
export default {
    name: 'app',
    data(){
        return {
            a:111
        }
    },
    components:{
        Login:Login,
    },
    created() {

	},
	mounted() {
    }
}
</script>
<style>
</style>



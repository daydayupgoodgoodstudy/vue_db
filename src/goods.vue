<template>
    <div>
        <div>a:{{a}}<button @click="add(2)">+</button>    </div> 
        <div>计算属性:{{messages}}<button>获取router</button></div>
        <div>{{this.$store.state.count}}</div>
        <div v-once>这个标签(v-once)内的内容之被渲染一次，之后会被视为静态内容:{{a}}</div>
        <div v-html="html"></div>
        <button v-bind:disabled="disabled">按钮(v-bind:disabled)</button>
        <button :disabled="disabled">按钮(缩写   :disabled)</button>
        <p v-if="disabled">是否显示(v-if)</p>
       <p>
          <a v-on:click="click_a">v-on:click{{a_click}}</a>
        <a @click="click_a">缩写@click{{a_click}}</a>
       </p>
    </div>
</template>
<script>
export default {
  data() {
    return {
      a: 1,
      message: "router",
      html: "<span style='color:red'>插入的html</span>",
      disabled: false,
      a_click: "点击修改此处的值"
    };
  },
  beforeCreate() {
    console.group("beforeCreate 创建前状态===============》");
  },
  created() {
    console.group("created 创建完毕状态===============》");
  },
  beforeMount() {
    console.group("beforeMount 挂载前状态===============》");
  },
  mounted() {
    console.group("mounted 挂载结束状态===============》");
  },
  beforeUpdate() {
    console.group("beforeUpdate 更新前状态===============》");
  },
  updated() {
    console.group("updated 更新完成状态===============》");
  },
  beforeDestroy() {
    console.group("beforeDestroy 销毁前状态===============》");
  },
  destroyed() {
    console.group("destroyed 销毁完成状态===============》");
  },
  methods: {
    click_a() {
      this.a_click = "已经修改此处的值";
    },
    add: function(num) {
      // this.$store.commit('increment',10)
      this.disabled = !this.disabled;
      if (num != "") {
        this.a += num;
      } else {
        this.a++;
      }
    }
  },
  computed: {
    messages() {
      return this.a + 10;
    }
  }
};
</script>

<template>
  <div id="app">
    <router-view/>
  </div>
</template>

<script>
export default {
  name: 'app'
}
</script>

<style>
/*css初始化*/
/*默认是全局的样式*/

html,body{
  width:100%;
  height:100%;
  padding:0;
  margin:0;
  font-family: "Microsoft YaHei";
  font-size:14px;
}

  /*清除a的默认样式*/
  
  a{
    color:#fff;
    text-decoration: none;
  }
  ul{
    list-style-type:none;
    padding:0;
    margin:0;
  }

button:focus{
  outline:none;
}

#app {
  font-family: 'Microsoft YaHei', Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  /*text-align: center;*/
  width:100%;
  height:100%;
}
</style>

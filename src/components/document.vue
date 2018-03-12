<!-- 文档页 -->
<template>
    <div class="document-wrapper">
<!--         <el-form class="top-wrapper" v-bind:inline="true">
            <el-form-item>
                <el-input v-model="input" placeholder="请输入……"></el-input>                
            </el-form-item>
            <el-form-item>
                <el-button type="primary" icon="el-icon-search" @click="query">搜索</el-button>             
            </el-form-item>
        </el-form> -->
        <div class="content-wrapper">
            <el-row :gutter="20">
                <el-col :span="6">
                    <el-card :body-style="{padding:'0px'}">
                        <a href="http://www.w3school.com.cn/html/index.asp" target="_blank">
                            <img src="../images/html.jpg" >
                        </a>
                    </el-card>
                </el-col>
                <el-col :span="6">
                    <el-card :body-style="{padding:'0px'}">
                        <a href="http://www.w3school.com.cn/css/index.asp" target="_blank">
                            <img src="../images/css.jpg">    
                        </a>
                    </el-card>
                </el-col>
                <el-col :span="6">
                    <el-card :body-style="{padding:'0px'}">
                        <a href="http://www.w3school.com.cn/js/" target="_blank">
                            <img src="../images/JavaScript.jpg">
                        </a>
                    </el-card>
                </el-col>
                <el-col :span="6">
                    <el-card :body-style="{padding:'0px'}">
                        <a href="http://www.bootcss.com/" target="_blank">
                            <img src="../images/bootstrap.jpg">
                        </a>
                    </el-card>
                </el-col>
            </el-row>
            <el-row :gutter="20">
                <el-col :span="6">
                    <el-card :body-style="{padding:'0px'}">
                        <a href="http://www.angularjs.net.cn/" target="_blank">
                            <img src="../images/angular.jpg">
                        </a>
                    </el-card>
                </el-col>
                <el-col :span="6">
                    <el-card :body-style="{padding:'0px'}">
                       <a href="https://doc.react-china.org/" target="_blank">
                           <img src="../images/react.jpg">
                       </a>
                    </el-card>
                </el-col>
                <el-col :span="6">
                    <el-card :body-style="{padding:'0px'}">
                        <a href="https://cn.vuejs.org/" target="_blank">
                            <img src="../images/vue.jpeg">
                        </a>
                    </el-card>
                </el-col>
                <el-col :span="6">
                    <el-card :body-style="{padding:'0px'}">
                        <a href="http://www.layui.com/" target="_blank">
                            <img src="../images/layui.png">
                        </a>
                    </el-card>
                </el-col>
            </el-row>
            <el-row :gutter="20">
                <el-col :span="6">
                    <el-card :body-style="{padding:'0px'}">
                        <a href="http://es6.ruanyifeng.com/#README" target="_blank">
                            <img src="../images/es6.jpg">
                        </a>
                    </el-card>
                </el-col>
                <el-col :span="6">
                    <el-card :body-style="{padding:'0px'}">
                        <a href="https://www.gulpjs.com.cn/" target="_blank">
                            <img src="../images/gulp.jpg">
                        </a>                        
                    </el-card>
                </el-col>
                <el-col :span="6">
                    <el-card :body-style="{padding:'0px'}">
                        <a href="https://doc.webpack-china.org/" target="_blank">
                            <img src="../images/webpack.png">
                        </a>                        
                    </el-card>
                </el-col>
                <el-col :span="6">
                    <el-card :body-style="{padding:'0px'}">
                        <a href="http://nodejs.cn/" target="_blank">
                            <img src="../images/node.png">
                        </a>
                    </el-card>
                </el-col>
            </el-row>
        </div>
    </div>
</template>

<script type="text/javascript">
    export default{
        data(){
            return {
                input:''
            }
        },
        methods:{
            query:function(){
                alert(this.input);
            }
        }
    }
</script>

<style type="text/css">
    div.content-wrapper img{
        width:100%;
        height:280px;
        cursor:pointer;
    }


</style>
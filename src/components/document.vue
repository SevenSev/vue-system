<!-- 文档页 -->
<template>
    <div class="document-wrapper">
        <div class="content-wrapper">
            <el-row :gutter="20">
                <el-col :span="6">
                    <el-card :body-style="{padding:'0px'}">
                            <img src="../images/html.jpg">
                            <div class="card-message">
                                <span>html</span>
                                <a href="http://www.w3school.com.cn/html/index.asp" target="_blank">
                                    <span>详情</span>
                                </a>
                            </div>                       
                    </el-card>
                </el-col>
                <el-col :span="6">
                    <el-card :body-style="{padding:'0px'}">
                            <img src="../images/css.jpg">
                            <div class="card-message">
                                <span>css</span>
                                <a href="http://www.w3school.com.cn/css/index.asp" target="_blank">                               
                                    <span>详情</span>
                                </a>
                            </div>                           
                    </el-card>
                </el-col>
                <el-col :span="6">
                    <el-card :body-style="{padding:'0px'}">                       
                            <img src="../images/JavaScript.jpg">
                            <div class="card-message">
                                <span>JavaScript</span>
                                <a href="http://www.w3school.com.cn/js/" target="_blank">
                                    <span>详情</span>
                                </a> 
                            </div>                      
                    </el-card>
                </el-col>
                <el-col :span="6">
                    <el-card :body-style="{padding:'0px'}">                     
                            <img src="../images/bootstrap.jpg">
                            <div class="card-message">
                                <span>BootStrap</span>
                                 <a href="http://www.bootcss.com/" target="_blank">
                                    <span>详情</span>
                                 </a>  
                            </div>                      
                    </el-card>
                </el-col>
            </el-row>
            <el-row :gutter="20">
                <el-col :span="6">
                    <el-card :body-style="{padding:'0px'}">                       
                            <img src="../images/angular.jpg">
                            <div class="card-message">
                                <span>Angular</span>
                                <a href="http://www.angularjs.net.cn/" target="_blank">
                                    <span>详情</span>
                                 </a>   
                            </div>                     
                    </el-card>
                </el-col>
                <el-col :span="6">
                    <el-card :body-style="{padding:'0px'}">                       
                            <img src="../images/vue.jpeg">
                            <div class="card-message">
                                <span>Vue</span>
                                <a href="https://cn.vuejs.org/" target="_blank">
                                    <span>详情</span>
                                </a>
                            </div>                       
                    </el-card>
                </el-col>
                <el-col :span="6">
                    <el-card :body-style="{padding:'0px'}">                     
                            <img src="../images/layui.png">
                            <div class="card-message">
                                <span>Layui</span>
                                <a href="http://www.layui.com/" target="_blank">
                                    <span>详情</span>
                                 </a>   
                            </div>                       
                    </el-card>
                </el-col>

                <el-col :span="6">
                    <el-card :body-style="{padding:'0px'}">                     
                           <img src="../images/echarts.jpg">
                           <div class="card-message">
                               <span>Echarts</span>
                               <a href="http://echarts.baidu.com/" target="_blank">
                                    <span>详情</span>
                                </a>
                           </div>                      
                    </el-card>
                </el-col> 

            </el-row>
            <el-row :gutter="20">
                <el-col :span="6">
                    <el-card :body-style="{padding:'0px'}">                      
                            <img src="../images/es6.jpg">
                            <div class="card-message">
                                <span>ES6</span>
                                <a href="http://es6.ruanyifeng.com/#README" target="_blank">
                                    <span>详情</span>
                                 </a>   
                            </div>                       
                    </el-card>
                </el-col>
                <el-col :span="6">
                    <el-card :body-style="{padding:'0px'}">                     
                            <img src="../images/gulp.jpg">
                            <div class="card-message">
                                <span>Gulp</span>
                                <a href="https://www.gulpjs.com.cn/" target="_blank">
                                    <span>详情</span>
                                 </a>   
                            </div>                                               
                    </el-card>
                </el-col>
                <el-col :span="6">
                    <el-card :body-style="{padding:'0px'}">                        
                            <img src="../images/webpack.png">
                            <div class="card-message">
                                <span>Webpack</span>
                                <a href="https://doc.webpack-china.org/" target="_blank">
                                    <span>详情</span>
                                 </a>    
                            </div>                                               
                    </el-card>
                </el-col>
                <el-col :span="6">
                    <el-card :body-style="{padding:'0px'}">                        
                            <img src="../images/node.png">
                            <div class="card-message">
                                <span>Node</span>
                                <a href="http://nodejs.cn/" target="_blank">
                                    <span>详情</span>
                                 </a>   
                            </div>                       
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
    .el-row{
        margin-bottom:10px;
    }

    div.content-wrapper img{
        width:100%;
        height:200px;
    }
    
    div.card-message{
        height:30px;
        line-height:30px;
        padding:0px 15px;
    }

    div.card-message span{
        color:#333;
        display:inline-block; 
    }

    div.card-message  > span{
        width:200px;
    }

    div.card-message > a > span:hover{
        cursor:pointer;
        color:#f56c6c;
    }
</style>
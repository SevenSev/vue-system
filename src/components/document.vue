<!-- 文档页 -->
<template>
    <div class="document-wrapper">
        <div class="top-wrapper">
            <el-input v-model="input" placeholder="请输入……">
                <el-button slot="append" icon="el-icon-search" @click="query">搜索</el-button>
            </el-input>

        </div>
        <div class="content-wrapper">
            <el-row :gutter="20">
                <el-col :span="6">
                    <el-card :body-style="{padding:'0px'}">
                        <img src="../images/html5.jpg" >
                    </el-card>
                </el-col>
                <el-col :span="6">
                    <el-card :body-style="{padding:'0px'}">
                        <img src="../images/css.jpg">
                    </el-card>
                </el-col>
                <el-col :span="6">
                    <el-card :body-style="{padding:'0px'}">
                        <img src="../images/JavaScript.jpg" >
                    </el-card>
                </el-col>
                <el-col :span="6">
                    <el-card :body-style="{padding:'0px'}">
                        <img src="">
                    </el-card>
                </el-col>
            </el-row>
            <el-row :gutter="20">
                <el-col :span="6">
                    <el-card :body-style="{padding:'0px'}">
                        <img src="">
                    </el-card>
                </el-col>
                <el-col :span="6">
                    <el-card :body-style="{padding:'0px'}">
                        <img src="">
                    </el-card>
                </el-col>
                <el-col :span="6">
                    <el-card :body-style="{padding:'0px'}">
                        <img src="">
                    </el-card>
                </el-col>
                <el-col :span="6">
                    <el-card :body-style="{padding:'0px'}">
                        <img src="">
                    </el-card>
                </el-col>
            </el-row>
            <el-row :gutter="20">
                <el-col :span="6">
                    <el-card :body-style="{padding:'0px'}">
                        <img src="">
                    </el-card>
                </el-col>
                <el-col :span="6">
                    <el-card :body-style="{padding:'0px'}">
                        <img src="">
                    </el-card>
                </el-col>
                <el-col :span="6">
                    <el-card :body-style="{padding:'0px'}">
                        <img src="">
                    </el-card>
                </el-col>
                <el-col :span="6">
                    <el-card :body-style="{padding:'0px'}">
                        <img src="">
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
        width:280px;
        height:280px;
    }


</style>
<!-- table页面 -->

<template>
    <div>
        <el-table v-bind:data="list" border style="width:100%;">
            <el-table-column type="selection" width="55"></el-table-column>
            <el-table-column prop="date" label="日期" width="180"></el-table-column>
            <el-table-column prop="name" label="姓名" width="180"></el-table-column>
            <el-table-column prop="address" label="地址"></el-table-column>
            <el-table-column label="操作">
                <template slot-scope="scope">
                    <el-button size="mini" type="">编辑</el-button>
                    <el-button size="mini" type="danger">删除</el-button>
                </template> 
            </el-table-column>
        </el-table>
    </div>
</template>

<script type="text/javascript">
    import Mock from 'mockjs'
    export default{ 
      data(){
        return {
            list:[]
        }
      },

      methods:{
          initMock(){
            Mock.mock('/data', {
                'data|4-10':[
                {
                  'date':'@date("yyyy-mm-dd")',
                  'name':'@cname',
                  'address':'@city(true)'
                }
                ] 
            });
          },
          getData(){
            this.$http.get('/data').then(function(json){
                this.list = json.data.data;
                console.log(json);
            });
          }
      },
     mounted(){
      this.initMock();
      this.getData();
     }
    }
</script>

<style type="text/css">
  
</style>
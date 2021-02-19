<template>
  <el-table
      :data="fieldsData"
      height="500"
      size="mini"
      border>
    <el-table-column
        prop="name"
        label="字段名">
    </el-table-column>
    <el-table-column
        label="状态">
      <template slot-scope="scope">
        <span v-if="parseInt(scope.row.status) === 1">启用</span>
        <span v-else>停用</span>
      </template>
    </el-table-column>
    <el-table-column>
      <template slot="header" slot-scope="scope">
        <el-button size="mini" type="success" @click="openMessageBox">新增数据</el-button>
      </template>
      <template slot-scope="scope">
        <el-button
            size="mini"
            @click="handleEdit(scope.$index, scope.row)">编辑</el-button>
        <el-button
            size="mini"
            type="danger"
            @click="handleDelete(scope.$index, scope.row)">删除</el-button>
      </template>
    </el-table-column>
  </el-table>
</template>

<script>
  export default {
    name: "FieldTable",
    data(){
      return {

      }
    },
    props: {
      fieldsData: {
        type: Array,
        default: function(){
          return []
        }
      },
    },
    methods: {
      handleEdit(){},
      handleDelete(){},
      openMessageBox(){
        this.$prompt('请输入字段名', '提示', {
          confirmButtonText: '确定',
          cancelButtonText: '取消',
        }).then(({value}) => {
          this.$message({
            type: 'success',
            message: '你的字段名是: ' + value
          })
          this.$emit('handleAddNewField', value)
        }).catch(() => {
          this.$message({
            type: 'info',
            message: '取消输入'
          })
        })
      },
    }
  }
</script>

<style scoped>

</style>

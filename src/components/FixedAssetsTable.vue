<template>
  <el-table
    :data="fixedAssetsData"
    height="500"
    size="mini"
    border>
    <el-table-column
        prop="category"
        label="品名"
        width="80">
    </el-table-column>
    <el-table-column
        prop="brand"
        label="品牌"
        width="80">
    </el-table-column>
    <el-table-column
        prop="model"
        label="型号">
    </el-table-column>
    <el-table-column
        prop="count"
        label="数量"
        width="50">
    </el-table-column>
    <el-table-column
        prop="serial_number"
        label="S/N">
    </el-table-column>
    <el-table-column
        prop="status"
        label="状态"
        width="70">
    </el-table-column>
    <el-table-column
        prop="created_at"
        label="登记日期">
    </el-table-column>
    <el-table-column
        prop="updated_at"
        label="最后更新">
    </el-table-column>
  </el-table>
</template>

<script>
  export default {
    name: "FixedAssetsTable",
    data(){
      return {
        tableData: []
      }
    },
    props: {
      fixedAssetsData: {
        type: Array,
        default: function(){
          return []
        }
      }
    }
  }
</script>

<style scoped>

</style>

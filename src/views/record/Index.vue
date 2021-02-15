<template>
  <div class="record-wrap">
    <div class="record-title">
      设备管理
    </div>
    <div class="record-search">
      <el-form :inline="true" :model="formInline" size="mini" class="demo-form-inline">
        <el-form-item label="品名">
          <el-select v-model="formInline.category" placeholder="品名">
            <el-option label="内存条" value="0"></el-option>
            <el-option label="显示器" value="1"></el-option>
            <el-option label="主板" value="2"></el-option>
            <el-option label="硬盘" value="3"></el-option>
            <el-option label="电源" value="4"></el-option>
            <el-option label="键盘" value="5"></el-option>
            <el-option label="鼠标" value="6"></el-option>
            <el-option label="显卡" value="7"></el-option>
            <el-option label="iMAC" value="8"></el-option>
          </el-select>
        </el-form-item>
        <el-form-item label="状态">
          <el-select v-model="formInline.status" placeholder="状态">
            <el-option label="使用" value="0"></el-option>
            <el-option label="闲置" value="1"></el-option>
            <el-option label="损坏" value="2"></el-option>
            <el-option label="报废" value="3"></el-option>
          </el-select>
        </el-form-item>
        <el-form-item>
          <el-button type="primary" @click="onSubmit">查询</el-button>
        </el-form-item>
      </el-form>
    </div>
    <FixedAssetsTable :fixedAssetsData="fixedAssetsData" />
  </div>
</template>

<script>
  import FixedAssetsTable from '../../components/FixedAssetsTable'
  export default {
    name: "FixedAssetsRecordPage",
    data(){
      return {
        fixedAssetsData: [
          {
            "category": "内存条",
            "brand": "三星",
            "model": "DDR4 4G",
            "count": "2",
            "serial_number": "",
            "created_at": "2021-02-17 12:19:00",
            "updated_at": "2021-02-17 12:19:00",
            "status": "闲置"
          },
          {
            "category": "内存条",
            "brand": "三星",
            "model": "DDR4 4G",
            "count": "2",
            "serial_number": "",
            "created_at": "2021-02-17 12:19:00",
            "updated_at": "2021-02-17 12:19:00",
            "status": "闲置"
          },
          {
            "category": "内存条",
            "brand": "三星",
            "model": "DDR4 4G",
            "count": "2",
            "serial_number": "",
            "created_at": "2021-02-17 12:19:00",
            "updated_at": "2021-02-17 12:19:00",
            "status": "闲置"
          },
          {
            "category": "内存条",
            "brand": "三星",
            "model": "DDR4 4G",
            "count": "2",
            "serial_number": "",
            "created_at": "2021-02-17 12:19:00",
            "updated_at": "2021-02-17 12:19:00",
            "status": "闲置"
          },
          {
            "category": "内存条",
            "brand": "三星",
            "model": "DDR4 4G",
            "count": "2",
            "serial_number": "",
            "created_at": "2021-02-17 12:19:00",
            "updated_at": "2021-02-17 12:19:00",
            "status": "闲置"
          },
          {
            "category": "内存条",
            "brand": "三星",
            "model": "DDR4 4G",
            "count": "2",
            "serial_number": "",
            "created_at": "2021-02-17 12:19:00",
            "updated_at": "2021-02-17 12:19:00",
            "status": "闲置"
          },
        ],
        formInline: {
          category: '',
          status: ''
        }
      }
    },
    components: {
      FixedAssetsTable
    },
    methods: {
      onSubmit(){},
    }
  }
</script>

<style lang="less" scoped>
  .record-title {
    text-align: center;
    font-size: 18px;
    font-weight: bolder;
    margin-bottom: 20px;
  }
  /deep/ .el-form-item__content {
    width: 100px;
  }

</style>

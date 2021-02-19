<template>
  <div class="field-wrap">
    <div class="field-title">
      数据字段管理
    </div>
    <div style="display: flex;justify-content: center;align-items: center;">
      <el-radio-group v-model="field" size="medium" @change="handleChangeField">
        <el-radio-button label="0">字段</el-radio-button>
        <el-radio-button label="1">品类</el-radio-button>
        <el-radio-button label="2">状态</el-radio-button>
      </el-radio-group>
    </div>
    <div class="field-area">
      <FieldTable :fieldsData="fieldsData" @handleAddNewField="handleAddNewField" />
    </div>
  </div>
</template>

<script>
  import FieldTable from '../../components/FieldTable'
  export default {
    name: "FieldPage",
    data(){
      return {
        activeIndex: '1',
        field: '0',
        fieldsData: [],
        fields: [
          {
            name: '字段',
            status: 1,
          },
          {
            name: '品类',
            status: 1,
          },
          {
            name: '状态',
            status: 1,
          },
        ],
        categoriesData: [
          {
            name: '主板',
            status: 1
          },
          {
            name: '内存条',
            status: 1
          },
          {
            name: '显示器',
            status: 1
          },
          {
            name: '机械硬盘',
            status: 1
          },
          {
            name: '固态硬盘',
            status: 1
          },
          {
            name: '键盘',
            status: 1
          },
          {
            name: '鼠标',
            status: 1
          },
          {
            name: '显示器',
            status: 1
          },
          {
            name: '笔记本电脑',
            status: 1
          },
          {
            name: 'iMAC',
            status: 1
          },
        ],
        statusData: [
          {
            name: '使用',
            status: 1,
          },
          {
            name: '闲置',
            status: 1,
          },
          {
            name: '损坏',
            status: 1,
          },
          {
            name: '报废',
            status: 1,
          }
        ],
      }
    },
    components: {
      FieldTable
    },
    methods: {
      handleChangeField(value){
        switch (parseInt(value)) {
          case 0:
            this.fieldsData = this.fields
            break;
          case 1:
            this.fieldsData = this.categoriesData
            break;
          case 2:
            this.fieldsData = this.statusData
            break;
          default:
            this.fieldsData = this.fields
        }
      },
      handleAddNewField(value){
        switch (parseInt(this.field)) {
          case 0:
            this.fields.push({name: value, status: 1})
            break;
          case 1:
            this.categoriesData.push({name: value, status: 1})
            break;
          case 2:
            this.statusData.push({name: value, status: 1})
            break;
          default:
            this.$message({
              type: 'error',
              message: '添加数据出现异常，请稍后重试~'
            })
        }
      },
    },
    created() {
      this.fieldsData = this.fields
    }
  }
</script>

<style lang="less" scoped>
  .field-title {
    margin-bottom: 20px;
    font-size: 18px;
    font-weight: bolder;
    text-align: center;
  }
  .field-area {
    margin-top: 20px;
  }
</style>
s

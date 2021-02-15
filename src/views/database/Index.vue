<template>
  <div class="database-setting-wrap">
    <div class="database-title">
      数据库设置
    </div>
    <div style="display: flex;justify-content: center;align-items: center;margin-top: 50px;">
      <el-form :model="databaseForm" :rules="rules" ref="ruleForm" label-width="100px" class="databaseForm">
        <el-form-item label="服务器地址" prop="host">
          <el-input v-model="databaseForm.host"></el-input>
        </el-form-item>
        <el-form-item label="端口" prop="port">
          <el-input v-model="databaseForm.port"></el-input>
        </el-form-item>
        <el-form-item label="用户名" prop="username">
          <el-input v-model="databaseForm.username"></el-input>
        </el-form-item>
        <el-form-item label="密码" prop="password">
          <el-input v-model="databaseForm.password" type="password" autocomplete="off"></el-input>
        </el-form-item>
        <el-form-item label="确认密码" prop="checkPass">
          <el-input type="password" v-model="databaseForm.checkPass" autocomplete="off"></el-input>
        </el-form-item>
        <el-form-item label="数据库" prop="database">
          <el-input v-model="databaseForm.database"></el-input>
        </el-form-item>
        <el-form-item>
          <el-button type="primary" @click="saveDatabaseConf('ruleForm')">保存</el-button>
          <el-button type="danger" @click="testFDatabaseConn('ruleForm')">测试</el-button>
        </el-form-item>
      </el-form>
    </div>
  </div>
</template>

<script>
  import DeployModel from "@/database/DeployModel"

  export default {
    name: "DatabasePage",
    data(){
      const validatePass = (rule, value, callback) => {
        if (value === '') {
          callback(new Error('请输入密码'));
        } else {
          if (this.databaseForm.checkPass !== '') {
            this.$refs.ruleForm.validateField('checkPass');
          }
          callback();
        }
      };
      const validatePass2 = (rule, value, callback) => {
        if (value === '') {
          callback(new Error('请再次输入密码'));
        } else if (value !== this.databaseForm.password) {
          callback(new Error('两次输入密码不一致!'));
        } else {
          callback();
        }
      };
      return {
        databaseForm: {
          host: '',
          port: '3306',
          username: '',
          password: '',
          checkPass: '',
          database: '',
        },
        rules: {
          host: [
            { required: true, message: '请输入服务器地址', trigger: 'blur' },
          ],
          port: [
            { required: true, message: '请输入端口号', trigger: 'blur' },
          ],
          username: [
            { required: true, message: '请输入用户名', trigger: 'blur' },
          ],
          password: [
            { validator: validatePass, trigger: 'blur' },
          ],
          checkPass: [
            { validator: validatePass2, trigger: 'blur' },
          ],
          database: [
            { required: true, message: '请输入数据库名', trigger: 'blur' },
          ],
        },
      }
    },
    methods: {
      saveDatabaseConf(){},
      testFDatabaseConn(){

      },
    }
  }
</script>

<style lang="less" scoped>
  .database-title {
    margin-bottom: 20px;
    font-size: 18px;
    font-weight: bolder;
    text-align: center;
  }
  .databaseForm {
    width: 500px;
    text-align: center;
  }
</style>

import SecretModel from "@/database/secretModel"

class DeployModel extends SecretModel {
  localDB = () => this.db.read().get('database')
  constructor() {
    super();
  }

  getAll(){
    return this.localDB().value()
  }
  getOne(name){
    return this.localDB().find({name}).value()
  }
  add(data){
    let hasData = this.localDB().find({name: data.name}).size().value()
    if(hasData){
      return { msg: '已存在该项数据', code: 1 }
    }
    let saveData = {
      ...data,
      id: +new Date(),
      created_at: +new Date(),
      updated_at: +new Date()
    }
    this.localDB().push(saveData).write()
    return { msg: '写入成功', code: 0 }
  }
  delete(name){
    if(!name){
      return { msg: '参数错误',code: 1 }
    }
    return this.localDB().remove({name}).write()
  }
  find(name){
    if(name){
      return this.localDB().filter((item) => !!item.name.match(name)).value()
    } else{
      return this.getAll()
    }
  }
  update(data){
    let saveData = {
      ...data,
      updated_at: !new Date()
    }
    this.localDB().find({id: data.id}).assign(saveData).write()
    return { msg: '已更新', code: 0 }
  }
}

export default new DeployModel()

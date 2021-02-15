import fse from 'fs-extra'
import path from 'path'
import Lowdb from 'lowdb'
import FileSync from 'lowdb/adapters/FileSync'
import {decrypt, encrypt} from "@/utils/encrypt_decrypt"
const electron = require('electron')

// const APP = process.type === 'renderer' ? remote.app : app

const SALT = '1221610wllsj'

export default class SecretModel {
  userDataPath = electron.remote.app.getPath('userData')
  constructor() {
    this.db = this.initStore()
  }
  initStore(){
    const STORE_PATH = this.userDataPath
    if(process.type !== 'renderer'){
      if(!fse.pathExistsSync(STORE_PATH)){
        fse.mkdirpSync(STORE_PATH)
      }
    }
    const adapter = new FileSync(path.join(STORE_PATH, 'fam.secret.config.json'), {
      serialize: (data) => {
        return JSON.stringify(data, (key, val) => {
          if(key === 'password' && val){
            return encrypt(val, SALT) || ''
          }
          return val
        })
      },
      deserialize: (data) => {
        return JSON.parse(data,(key, val) => {
          if(key === 'password' && val){
            return decrypt(val, SALT) || ''
          }
          return val
        })
      }
    })
    const db = Lowdb(adapter)
    return db
  }

}

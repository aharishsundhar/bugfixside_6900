import * as mongoose from 'mongoose';
import addModel from '../models/add';
import { CustomLogger } from '../config/Logger'


export class addDao {
    private add = addModel;
    constructor() { }
public GpCreate(addData, callback){
new CustomLogger().showLogger('info', 'Enter into addDao.ts: GpCreate')
let temp = new addModel(addData);
;
temp.save().then((result)	=>	{
new CustomLogger().showLogger('info', 'Exit from addDao.ts: GpCreate');
callback(result);
}).catch((error)=>{
callback(error);
});}


}
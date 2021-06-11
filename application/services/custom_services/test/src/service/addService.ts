import { Request, Response } from 'express';
import {addDao} from '../dao/addDao';
import { CustomLogger } from '../config/Logger'
let add = new addDao();

export class addService {
    
    constructor() { }
    
    public GpCreate(req: Request, callback){
    new CustomLogger().showLogger('info', 'Enter into addService.ts: GpCreate')
     const  addData = req.body;
     add.GpCreate(addData,(response)=>{
             new CustomLogger().showLogger('info', 'Exit from addService.ts: GpCreate')
         callback(response);
         });
    }


}
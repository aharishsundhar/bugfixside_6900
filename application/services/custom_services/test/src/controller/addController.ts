import { Request, Response } from 'express';
import { addService } from '../service/addService';
import { CustomLogger } from '../config/Logger'
let add = new addService();

export class addController {
    
    constructor() { }
    
    public GpCreate(req: Request, res: Response) {
add.GpCreate(req, (response) => {
                new CustomLogger().showLogger('info', 'Enter into addController.ts: GpCreate');
     res.status(200);
     res.json(response);
                new CustomLogger().showLogger('info', 'Exit from addController.ts: GpCreate');
    })}


}
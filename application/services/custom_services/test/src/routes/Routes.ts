import { Request, Response, NextFunction } from "express";
import { addController } from '../controller/addController';


export class Routes {
    private add: addController = new addController();
    
    public routes(app): void {
          app.route('/health/entity-service').get((req: Request, res: Response) => {
            res.status(200).send({
                status: 'up'
            })
        })
        app.route('/add').post(this.add.GpCreate);
     }

}
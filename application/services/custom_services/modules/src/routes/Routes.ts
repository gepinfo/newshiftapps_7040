import { Request, Response, NextFunction } from "express";
import { modulesController } from '../controller/modulesController';


export class Routes {
    private modules: modulesController = new modulesController();
    
    public routes(app): void {
          app.route('/health/entity-service').get((req: Request, res: Response) => {
            res.status(200).send({
                status: 'up'
            })
        })
        app.route('/modules/:id').delete(this.modules.GpDelete);
app.route('/modules/get/search').get(this.modules.GpSearch);
app.route('/modules/get/update').put(this.modules.GpSearchForUpdate);
app.route('/modules').put(this.modules.GpUpdate);
app.route('/modules/:id').get(this.modules.GpGetEntityById);
app.route('/modules').get(this.modules.GpGetAllValues);
app.route('/modules').post(this.modules.GpCreate);
app.route('/modules/userid/created_by').get(this.modules.GpGetNounCreatedBy);
     }

}
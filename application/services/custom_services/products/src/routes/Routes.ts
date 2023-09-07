import { Request, Response, NextFunction } from "express";
import { productsController } from '../controller/productsController';


export class Routes {
    private products: productsController = new productsController();
    
    public routes(app): void {
          app.route('/health/entity-service').get((req: Request, res: Response) => {
            res.status(200).send({
                status: 'up'
            })
        })
        app.route('/products/:id').delete(this.products.GpDelete);
app.route('/products/get/search').get(this.products.GpSearch);
app.route('/products/get/update').put(this.products.GpSearchForUpdate);
app.route('/products').put(this.products.GpUpdate);
app.route('/products/:id').get(this.products.GpGetEntityById);
app.route('/products').get(this.products.GpGetAllValues);
app.route('/products').post(this.products.GpCreate);
app.route('/products/userid/created_by').get(this.products.GpGetNounCreatedBy);
     }

}
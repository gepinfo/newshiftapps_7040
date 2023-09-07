import { Request, Response } from 'express';
import { productsService } from '../service/productsService';
import { CustomLogger } from '../config/Logger'
let products = new productsService();

export class productsController {
    
    constructor() { }
    
    public GpDelete(req: Request, res: Response) {
    new CustomLogger().guidLog(req);
    
    products.GpDelete(req, (response) => {
                new CustomLogger().showLogger('info', 'Enter into productsController.ts: GpDelete');
     res.status(200);
     res.json(response);
                new CustomLogger().showLogger('info', 'Exit from productsController.ts: GpDelete');
    })}
public GpSearch(req: Request, res: Response) {
    new CustomLogger().guidLog(req);
    
    products.GpSearch(req, (response) => {
                new CustomLogger().showLogger('info', 'Enter into productsController.ts: GpSearch');
     res.status(200);
     res.json(response);
                new CustomLogger().showLogger('info', 'Exit from productsController.ts: GpSearch');
    })}
public GpSearchForUpdate(req: Request, res: Response) {
    new CustomLogger().guidLog(req);
    
    products.GpSearchForUpdate(req, (response) => {
                new CustomLogger().showLogger('info', 'Enter into productsController.ts: GpSearchForUpdate');
     res.status(200);
     res.json(response);
                new CustomLogger().showLogger('info', 'Exit from productsController.ts: GpSearchForUpdate');
    })}
public GpUpdate(req: Request, res: Response) {
    new CustomLogger().guidLog(req);
    
    products.GpUpdate(req, (response) => {
                new CustomLogger().showLogger('info', 'Enter into productsController.ts: GpUpdate');
     res.status(200);
     res.json(response);
                new CustomLogger().showLogger('info', 'Exit from productsController.ts: GpUpdate');
    })}
public GpGetEntityById(req: Request, res: Response) {
    new CustomLogger().guidLog(req);
    
    products.GpGetEntityById(req, (response) => {
                new CustomLogger().showLogger('info', 'Enter into productsController.ts: GpGetEntityById');
     res.status(200);
     res.json(response);
                new CustomLogger().showLogger('info', 'Exit from productsController.ts: GpGetEntityById');
    })}
public GpGetAllValues(req: Request, res: Response) {
    new CustomLogger().guidLog(req);
    
    products.GpGetAllValues(req, (response) => {
                new CustomLogger().showLogger('info', 'Enter into productsController.ts: GpGetAllValues');
     res.status(200);
     res.json(response);
                new CustomLogger().showLogger('info', 'Exit from productsController.ts: GpGetAllValues');
    })}
public GpCreate(req: Request, res: Response) {
    new CustomLogger().guidLog(req);
    
    products.GpCreate(req, (response) => {
                new CustomLogger().showLogger('info', 'Enter into productsController.ts: GpCreate');
     res.status(200);
     res.json(response);
                new CustomLogger().showLogger('info', 'Exit from productsController.ts: GpCreate');
    })}
public GpGetNounCreatedBy(req: Request, res: Response) {
    new CustomLogger().guidLog(req);
    
    products.GpGetNounCreatedBy(req, (response) => {
                new CustomLogger().showLogger('info', 'Enter into productsController.ts: GpGetNounCreatedBy');
     res.status(200);
     res.json(response);
                new CustomLogger().showLogger('info', 'Exit from productsController.ts: GpGetNounCreatedBy');
    })}


}
import { Request, Response } from 'express';
import { modulesService } from '../service/modulesService';
import { CustomLogger } from '../config/Logger'
let modules = new modulesService();

export class modulesController {
    
    constructor() { }
    
    public GpDelete(req: Request, res: Response) {
    new CustomLogger().guidLog(req);
    
    modules.GpDelete(req, (response) => {
                new CustomLogger().showLogger('info', 'Enter into modulesController.ts: GpDelete');
     res.status(200);
     res.json(response);
                new CustomLogger().showLogger('info', 'Exit from modulesController.ts: GpDelete');
    })}
public GpSearch(req: Request, res: Response) {
    new CustomLogger().guidLog(req);
    
    modules.GpSearch(req, (response) => {
                new CustomLogger().showLogger('info', 'Enter into modulesController.ts: GpSearch');
     res.status(200);
     res.json(response);
                new CustomLogger().showLogger('info', 'Exit from modulesController.ts: GpSearch');
    })}
public GpSearchForUpdate(req: Request, res: Response) {
    new CustomLogger().guidLog(req);
    
    modules.GpSearchForUpdate(req, (response) => {
                new CustomLogger().showLogger('info', 'Enter into modulesController.ts: GpSearchForUpdate');
     res.status(200);
     res.json(response);
                new CustomLogger().showLogger('info', 'Exit from modulesController.ts: GpSearchForUpdate');
    })}
public GpUpdate(req: Request, res: Response) {
    new CustomLogger().guidLog(req);
    
    modules.GpUpdate(req, (response) => {
                new CustomLogger().showLogger('info', 'Enter into modulesController.ts: GpUpdate');
     res.status(200);
     res.json(response);
                new CustomLogger().showLogger('info', 'Exit from modulesController.ts: GpUpdate');
    })}
public GpGetEntityById(req: Request, res: Response) {
    new CustomLogger().guidLog(req);
    
    modules.GpGetEntityById(req, (response) => {
                new CustomLogger().showLogger('info', 'Enter into modulesController.ts: GpGetEntityById');
     res.status(200);
     res.json(response);
                new CustomLogger().showLogger('info', 'Exit from modulesController.ts: GpGetEntityById');
    })}
public GpGetAllValues(req: Request, res: Response) {
    new CustomLogger().guidLog(req);
    
    modules.GpGetAllValues(req, (response) => {
                new CustomLogger().showLogger('info', 'Enter into modulesController.ts: GpGetAllValues');
     res.status(200);
     res.json(response);
                new CustomLogger().showLogger('info', 'Exit from modulesController.ts: GpGetAllValues');
    })}
public GpCreate(req: Request, res: Response) {
    new CustomLogger().guidLog(req);
    
    modules.GpCreate(req, (response) => {
                new CustomLogger().showLogger('info', 'Enter into modulesController.ts: GpCreate');
     res.status(200);
     res.json(response);
                new CustomLogger().showLogger('info', 'Exit from modulesController.ts: GpCreate');
    })}
public GpGetNounCreatedBy(req: Request, res: Response) {
    new CustomLogger().guidLog(req);
    
    modules.GpGetNounCreatedBy(req, (response) => {
                new CustomLogger().showLogger('info', 'Enter into modulesController.ts: GpGetNounCreatedBy');
     res.status(200);
     res.json(response);
                new CustomLogger().showLogger('info', 'Exit from modulesController.ts: GpGetNounCreatedBy');
    })}


}
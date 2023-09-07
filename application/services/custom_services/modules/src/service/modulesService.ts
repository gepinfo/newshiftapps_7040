import { Request, Response } from 'express';
import {modulesDao} from '../dao/modulesDao';
import { CustomLogger } from '../config/Logger';
import * as jwt from 'jsonwebtoken';
let modules = new modulesDao();

export class modulesService {
    
    constructor() { }
    
    public  GpDelete(req: Request, callback){
    new CustomLogger().showLogger('info', 'Enter into modulesService.ts: GpDelete')
     let  modulesId = req.params.id;
     modules.GpDelete(modulesId,(response)=>{
             new CustomLogger().showLogger('info', 'Exit from modulesService.ts: GpDelete')
         callback(response);
         });
    }
    
public  GpSearch(req: Request, callback){
    new CustomLogger().showLogger('info', 'Enter into modulesService.ts: GpSearch')
     let  modulesData = req.query;
     modules.GpSearch(modulesData,(response)=>{
             new CustomLogger().showLogger('info', 'Exit from modulesService.ts: GpSearch')
         callback(response);
         });
    }
    
public  GpSearchForUpdate(req: Request, callback){
    new CustomLogger().showLogger('info', 'Enter into modulesService.ts: GpSearchForUpdate')
     let  modulesData = req.body;
     modules.GpSearchForUpdate(modulesData,(response)=>{
             new CustomLogger().showLogger('info', 'Exit from modulesService.ts: GpSearchForUpdate')
         callback(response);
         });
    }
    
public  GpUpdate(req: Request, callback){
    new CustomLogger().showLogger('info', 'Enter into modulesService.ts: GpUpdate')
     let  modulesData = req.body;
     modules.GpUpdate(modulesData,(response)=>{
             new CustomLogger().showLogger('info', 'Exit from modulesService.ts: GpUpdate')
         callback(response);
         });
    }
    
public  GpGetEntityById(req: Request, callback){
    new CustomLogger().showLogger('info', 'Enter into modulesService.ts: GpGetEntityById')
     let  modulesId = req.params.id;
     modules.GpGetEntityById(modulesId,(response)=>{
             new CustomLogger().showLogger('info', 'Exit from modulesService.ts: GpGetEntityById')
         callback(response);
         });
    }
    
public  GpGetAllValues(req: Request, callback){
    new CustomLogger().showLogger('info', 'Enter into modulesService.ts: GpGetAllValues')
     
     modules.GpGetAllValues((response)=>{
             new CustomLogger().showLogger('info', 'Exit from modulesService.ts: GpGetAllValues')
         callback(response);
         });
    }
    
public  GpCreate(req: Request, callback){
    new CustomLogger().showLogger('info', 'Enter into modulesService.ts: GpCreate')
     let  modulesData = req.body;
     modules.GpCreate(modulesData,(response)=>{
             new CustomLogger().showLogger('info', 'Exit from modulesService.ts: GpCreate')
         callback(response);
         });
    }
    
public  GpGetNounCreatedBy(req: Request, callback){
    new CustomLogger().showLogger('info', 'Enter into modulesService.ts: GpGetNounCreatedBy')
     let  modulesData = { created_by: req.query.createdby };
     modules.GpGetNounCreatedBy(modulesData,(response)=>{
             new CustomLogger().showLogger('info', 'Exit from modulesService.ts: GpGetNounCreatedBy')
         callback(response);
         });
    }
    
    
    
    
}
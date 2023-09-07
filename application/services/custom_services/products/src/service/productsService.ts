import { Request, Response } from 'express';
import {productsDao} from '../dao/productsDao';
import { CustomLogger } from '../config/Logger';
import * as jwt from 'jsonwebtoken';
let products = new productsDao();

export class productsService {
    
    constructor() { }
    
    public  GpDelete(req: Request, callback){
    new CustomLogger().showLogger('info', 'Enter into productsService.ts: GpDelete')
     let  productsId = req.params.id;
     products.GpDelete(productsId,(response)=>{
             new CustomLogger().showLogger('info', 'Exit from productsService.ts: GpDelete')
         callback(response);
         });
    }
    
public  GpSearch(req: Request, callback){
    new CustomLogger().showLogger('info', 'Enter into productsService.ts: GpSearch')
     let  productsData = req.query;
     products.GpSearch(productsData,(response)=>{
             new CustomLogger().showLogger('info', 'Exit from productsService.ts: GpSearch')
         callback(response);
         });
    }
    
public  GpSearchForUpdate(req: Request, callback){
    new CustomLogger().showLogger('info', 'Enter into productsService.ts: GpSearchForUpdate')
     let  productsData = req.body;
     products.GpSearchForUpdate(productsData,(response)=>{
             new CustomLogger().showLogger('info', 'Exit from productsService.ts: GpSearchForUpdate')
         callback(response);
         });
    }
    
public  GpUpdate(req: Request, callback){
    new CustomLogger().showLogger('info', 'Enter into productsService.ts: GpUpdate')
     let  productsData = req.body;
     products.GpUpdate(productsData,(response)=>{
             new CustomLogger().showLogger('info', 'Exit from productsService.ts: GpUpdate')
         callback(response);
         });
    }
    
public  GpGetEntityById(req: Request, callback){
    new CustomLogger().showLogger('info', 'Enter into productsService.ts: GpGetEntityById')
     let  productsId = req.params.id;
     products.GpGetEntityById(productsId,(response)=>{
             new CustomLogger().showLogger('info', 'Exit from productsService.ts: GpGetEntityById')
         callback(response);
         });
    }
    
public  GpGetAllValues(req: Request, callback){
    new CustomLogger().showLogger('info', 'Enter into productsService.ts: GpGetAllValues')
     
     products.GpGetAllValues((response)=>{
             new CustomLogger().showLogger('info', 'Exit from productsService.ts: GpGetAllValues')
         callback(response);
         });
    }
    
public  GpCreate(req: Request, callback){
    new CustomLogger().showLogger('info', 'Enter into productsService.ts: GpCreate')
     let  productsData = req.body;
     products.GpCreate(productsData,(response)=>{
             new CustomLogger().showLogger('info', 'Exit from productsService.ts: GpCreate')
         callback(response);
         });
    }
    
public  GpGetNounCreatedBy(req: Request, callback){
    new CustomLogger().showLogger('info', 'Enter into productsService.ts: GpGetNounCreatedBy')
     let  productsData = { created_by: req.query.createdby };
     products.GpGetNounCreatedBy(productsData,(response)=>{
             new CustomLogger().showLogger('info', 'Exit from productsService.ts: GpGetNounCreatedBy')
         callback(response);
         });
    }
    
    
    
    
}
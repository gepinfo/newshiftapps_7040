import * as mongoose from 'mongoose';
import modulesModel from '../models/daomodels/modules';
import * as generate from 'nanoid/generate';
import * as dictionary from 'nanoid-dictionary';
import { CustomLogger } from '../config/Logger'


export class modulesDao {
    private modules = modulesModel;
    constructor() { }
    
    public async GpDelete(modulesId, callback){
    
    new CustomLogger().showLogger('info', 'Enter into modulesDao.ts: GpDelete');

    

    
    
    
    this.modules.findByIdAndRemove(modulesId).then((result)	=>
     
             	{

        new CustomLogger().showLogger('info', 'Exit from modulesDao.ts: GpDelete');

        

        
                callback(result);
}).catch((error)=>{
callback(error);
});}
public async GpSearch(modulesData, callback){
    
    new CustomLogger().showLogger('info', 'Enter into modulesDao.ts: GpSearch');

    let andkey ;let and_obj = {} ;let orkey ;let or_obj = {} ;;

    
    
    Object.entries(modulesData).forEach(
                            ([key,value]) => {
                                if(value !== ''){
                                    andkey = key;
                                    and_obj[andkey] = value;
                                }
                                else{
                                    orkey = key;
                                    or_obj[orkey] = { $ne: '' }
                                }
                            }
                        );;
    this.modules.find({$and: [
                            {
                                $or: [
                                   or_obj
                                ]
                            },
                            and_obj
                        ]}).then((result)	=>
     
             	{

        new CustomLogger().showLogger('info', 'Exit from modulesDao.ts: GpSearch');

        

        
                callback(result);
}).catch((error)=>{
callback(error);
});}
public async GpSearchForUpdate(modulesData, callback){
    
    new CustomLogger().showLogger('info', 'Enter into modulesDao.ts: GpSearchForUpdate');

    

    
    
    
    this.modules.findOneAndUpdate({ _id: modulesData._id }, modulesData, { new: true }).then((result)	=>
     
             	{

        new CustomLogger().showLogger('info', 'Exit from modulesDao.ts: GpSearchForUpdate');

        

        
                callback(result);
}).catch((error)=>{
callback(error);
});}
public async GpUpdate(modulesData, callback){
    
    new CustomLogger().showLogger('info', 'Enter into modulesDao.ts: GpUpdate');

    

    
    
    
    this.modules.findOneAndUpdate({ _id: modulesData._id }, modulesData, { new: true }).then((result)	=>
     
             	{

        new CustomLogger().showLogger('info', 'Exit from modulesDao.ts: GpUpdate');

        

        
                callback(result);
}).catch((error)=>{
callback(error);
});}
public async GpGetEntityById(modulesId, callback){
    
    new CustomLogger().showLogger('info', 'Enter into modulesDao.ts: GpGetEntityById');

    

    
    
    
    this.modules.findById(modulesId).then((result)	=>
     
             	{

        new CustomLogger().showLogger('info', 'Exit from modulesDao.ts: GpGetEntityById');

        

        
                callback(result);
}).catch((error)=>{
callback(error);
});}
public async GpGetAllValues(callback){
    
    new CustomLogger().showLogger('info', 'Enter into modulesDao.ts: GpGetAllValues');

    

    
    
    
    this.modules.find().then((result)	=>
     
             	{

        new CustomLogger().showLogger('info', 'Exit from modulesDao.ts: GpGetAllValues');

        

        
                callback(result);
}).catch((error)=>{
callback(error);
});}
public async GpCreate(modulesData, callback){
    
    new CustomLogger().showLogger('info', 'Enter into modulesDao.ts: GpCreate');

    let temp = new modulesModel(modulesData);

    
    
    
    temp.save().then((result)	=>
     
             	{

        new CustomLogger().showLogger('info', 'Exit from modulesDao.ts: GpCreate');

        

        
                callback(result);
}).catch((error)=>{
callback(error);
});}
public async GpGetNounCreatedBy(modulesData, callback){
    
    new CustomLogger().showLogger('info', 'Enter into modulesDao.ts: GpGetNounCreatedBy');

    

    
    
    
    this.modules.aggregate(([
                        { $match: { $and: [{ created_by: modulesData.created_by }] } }
                    ])).then((result)	=>
     
             	{

        new CustomLogger().showLogger('info', 'Exit from modulesDao.ts: GpGetNounCreatedBy');

        

        
                callback(result);
}).catch((error)=>{
callback(error);
});}


}
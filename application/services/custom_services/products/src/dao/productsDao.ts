import * as mongoose from 'mongoose';
import productsModel from '../models/daomodels/products';
import * as generate from 'nanoid/generate';
import * as dictionary from 'nanoid-dictionary';
import { CustomLogger } from '../config/Logger'


export class productsDao {
    private products = productsModel;
    constructor() { }
    
    public async GpDelete(productsId, callback){
    
    new CustomLogger().showLogger('info', 'Enter into productsDao.ts: GpDelete');

    

    
    
    
    this.products.findByIdAndRemove(productsId).then((result)	=>
     
             	{

        new CustomLogger().showLogger('info', 'Exit from productsDao.ts: GpDelete');

        

        
                callback(result);
}).catch((error)=>{
callback(error);
});}
public async GpSearch(productsData, callback){
    
    new CustomLogger().showLogger('info', 'Enter into productsDao.ts: GpSearch');

    let andkey ;let and_obj = {} ;let orkey ;let or_obj = {} ;;

    
    
    Object.entries(productsData).forEach(
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
    this.products.find({$and: [
                            {
                                $or: [
                                   or_obj
                                ]
                            },
                            and_obj
                        ]}).then((result)	=>
     
             	{

        new CustomLogger().showLogger('info', 'Exit from productsDao.ts: GpSearch');

        

        
                callback(result);
}).catch((error)=>{
callback(error);
});}
public async GpSearchForUpdate(productsData, callback){
    
    new CustomLogger().showLogger('info', 'Enter into productsDao.ts: GpSearchForUpdate');

    

    
    
    
    this.products.findOneAndUpdate({ _id: productsData._id }, productsData, { new: true }).then((result)	=>
     
             	{

        new CustomLogger().showLogger('info', 'Exit from productsDao.ts: GpSearchForUpdate');

        

        
                callback(result);
}).catch((error)=>{
callback(error);
});}
public async GpUpdate(productsData, callback){
    
    new CustomLogger().showLogger('info', 'Enter into productsDao.ts: GpUpdate');

    

    
    
    
    this.products.findOneAndUpdate({ _id: productsData._id }, productsData, { new: true }).then((result)	=>
     
             	{

        new CustomLogger().showLogger('info', 'Exit from productsDao.ts: GpUpdate');

        

        
                callback(result);
}).catch((error)=>{
callback(error);
});}
public async GpGetEntityById(productsId, callback){
    
    new CustomLogger().showLogger('info', 'Enter into productsDao.ts: GpGetEntityById');

    

    
    
    
    this.products.findById(productsId).then((result)	=>
     
             	{

        new CustomLogger().showLogger('info', 'Exit from productsDao.ts: GpGetEntityById');

        

        
                callback(result);
}).catch((error)=>{
callback(error);
});}
public async GpGetAllValues(callback){
    
    new CustomLogger().showLogger('info', 'Enter into productsDao.ts: GpGetAllValues');

    

    
    
    
    this.products.find().then((result)	=>
     
             	{

        new CustomLogger().showLogger('info', 'Exit from productsDao.ts: GpGetAllValues');

        

        
                callback(result);
}).catch((error)=>{
callback(error);
});}
public async GpCreate(productsData, callback){
    
    new CustomLogger().showLogger('info', 'Enter into productsDao.ts: GpCreate');

    let temp = new productsModel(productsData);

    
    
    
    temp.save().then((result)	=>
     
             	{

        new CustomLogger().showLogger('info', 'Exit from productsDao.ts: GpCreate');

        

        
                callback(result);
}).catch((error)=>{
callback(error);
});}
public async GpGetNounCreatedBy(productsData, callback){
    
    new CustomLogger().showLogger('info', 'Enter into productsDao.ts: GpGetNounCreatedBy');

    

    
    
    
    this.products.aggregate(([
                        { $match: { $and: [{ created_by: productsData.created_by }] } }
                    ])).then((result)	=>
     
             	{

        new CustomLogger().showLogger('info', 'Exit from productsDao.ts: GpGetNounCreatedBy');

        

        
                callback(result);
}).catch((error)=>{
callback(error);
});}


}
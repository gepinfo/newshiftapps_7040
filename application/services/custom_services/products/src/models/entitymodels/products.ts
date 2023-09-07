
export interface products 
{
   created_date: { type: Date },
   created_by: { type: String },
   last_modified_by: { type: String },
   last_modified_date: { type: Date },
   name: { type: String },
   modules: { type: String, ref: 'modules' },
   dataPriority: { type: DataPriority }
}


export enum DataPriority {
   HIGH = 'high',
   LOW = 'low',
   MEDIUM = 'medium'
}




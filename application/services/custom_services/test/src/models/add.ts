
import * as mongoose from 'mongoose';

const Schema = mongoose.Schema;

export const addSchema = new Schema({
   created_date: { type: Date, default: Date.now },
   created_by: { type: String },
   last_modified_by: { type: String },
   last_modified_date: { type: Date, default: Date.now },
   Enter_Name: String
})

const addModel = mongoose.model('add', addSchema, 'add');
export default addModel;

import mongoose from 'mongoose'

const Schema = mongoose.Schema
const ObjectId = Schema.ObjectId

const contaSchema = new Schema({
  user_id: ObjectId,
  agencia: { type: Number, require: true },
  conta: { type: Number, require: true },
  name: { type: String, require: true },
  balance: {
    type: Number,
    require: true,
    min: [0, 'The value must be positive!'],
  },
})

export default contaSchema

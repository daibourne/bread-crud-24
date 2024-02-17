const mongoose = require('mongoose');
const { Schema } = mongoose; 

const breadSchema = new Schema({ 
  name: { type: String, required: true },
  hasGluten: { type: Boolean },
  image: { type: String },
  baker: { type: String, enum: ['Rachel', 'Monica', 'Joey', 'Chandler', 'Pheobe', 'Ross']}
});

// helper meethods
 breadSchema.methods.getBakedBy = function () {
  return `${this.name} was baked with love by ${this.baker}`;
 };

 breadSchema.statics.findByBaker = function (baker) {
  return this.find({ baker: baker });
};


const Bread = mongoose.model('Bread', breadSchema);

module.exports = Bread;
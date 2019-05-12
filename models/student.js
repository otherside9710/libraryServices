const mongoose = require('mongoose');
const {Schema} = mongoose;

const StudentSchema = new Schema({
   nocarnet : {type : String, required: true},
   name : {type : String, required: true},
   lastName : {type : String, required: true},
   direction : {type : String, required: true},
   phone : {type : String, required: true},
   email : {type : String, required: true},
   gender : {type : String, required: true},
   hooby : {type : String, required: true},
   department : {type : String, required: true},
   municipality : {type : String, required: true}
});

module.exports = mongoose.model('Student', StudentSchema);

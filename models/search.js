const mongoose = require('mongoose')
mongoose.Promise = global.Promise;
const { Schema } = mongoose;
// const globalconnetion = require('../serverconnetion/connections');
const { nanoid } = require('nanoid')


/****************************************************************** */
//VALIDATORS SHOULD BE ABOVE THE SCHEMA


/******************************************************************************************* */

const informationSchema = new Schema({

  name: { type: String, required: true, },
  email: { type: String, required: true, },
  status: { type: String, default: 'active' },
  // id: { type: String, default: () => nanoid() },
  id: { type: Number, required: true,  unique: true,},
  number: { type: Number, required: true, },

});


/****************************************************************************** */

// moduleuserSchema.pre('save', (next) => ****does not work with es6 syntax**** use functions old style
//VALIDATORS SHOULD BE ABOVE THE SCHEMA


module.exports = mongoose.model('Information', informationSchema);






/*
{
    "_id" : ObjectId("60a141edbd7c8b87d52d0484"),
    "email" : "mark.meguizo@gmail.com",
    "name" : "tester",
    "number" : NumberLong(9082709999),
    "status" : "active",
    "id" : 1
}


*/
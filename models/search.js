const mongoose = require('mongoose')
const searchSchema = new mongoose.Schema({
    name :              {type : String, required : true},
    email :             {type : String, required : true},
    number :            {type : String, required : true},

})

const Search = module.exports = mongoose.model('search', searchSchema)

module.exports.addScammerInfo = (async(info, callback) => {
   await info.save(callback)
})


module.exports.findScammer = ((searchData, callback) => {
    //match using regex
    // const match = {$match : { $or : [{name :{$regex :  searchData, $options: 'i'}},{email : {$regex : searchData, $options: 'i'}}, {number : {$regex : searchData, $options: 'i'}}]}}
    // const match = {$match : { $or : [{name : searchData},{email :  searchData}, {number :  searchData}]}}
         Search.find({
            $or: [
                { name: searchData },
                { email:  searchData},
                { number:  searchData}
              ]
        },(err, document) => {
        if(err) return callback({success : false, message : err.message})
        if(document.length){return callback({success : true, data : document})}
        else{return callback({success : false, data : document})}
        })
})












// const mongoose = require('mongoose')
// mongoose.Promise = global.Promise;
// const { Schema } = mongoose;
// // const globalconnetion = require('../serverconnetion/connections');
// const { nanoid } = require('nanoid')


// /****************************************************************** */
// //VALIDATORS SHOULD BE ABOVE THE SCHEMA


// /******************************************************************************************* */

// const informationSchema = new Schema({

//   name: { type: String, required: true, },
//   email: { type: String, required: true, },
//   status: { type: String, default: 'active' },
//   // id: { type: String, default: () => nanoid() },
//   id: { type: Number, required: true,  unique: true,},
//   number: { type: Number, required: true, },

// });


// /****************************************************************************** */

// // moduleuserSchema.pre('save', (next) => ****does not work with es6 syntax**** use functions old style
// //VALIDATORS SHOULD BE ABOVE THE SCHEMA


// module.exports = mongoose.model('Information', informationSchema);






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
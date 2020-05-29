const mongoose=require('mongoose')

const Schema=mongoose.Schema
const bookSchema=new Schema({
    title:{
        type:String,
        required:true
    },
    originalUrl:{
       type:String,
       required:true,
    //    validate: {
    //     validator: function(value) {
    //       return validator.isURL(value);
    //     },
    //     message: function() {
    //       return `this is not a valid Url`;
    //     }
    //   }
    },
    tags:{
        type:[String]
    },
    hashedUrl:{
        type:String
    },
    createdAt:{
        type:Date,
        default:Date.now
    }
})

// bookSchema.pre("save", function(next) {
//     this.hashedUrl = sh.unique(this.original_url);
//     next();
//   });

const Bookmark=mongoose.model("Book",bookSchema)

module.exports=Bookmark
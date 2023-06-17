const mongoose = require('mongoose');
const mongoURI = 'mongodb+srv://riyag4334:riya%401234@cluster0.bjraww8.mongodb.net/GoFoodMern?retryWrites=true&w=majority'
const mongoDB = () =>{
    mongoose.connect(mongoURI,{ useNewUrlParser: true},async(err,result)=>{
          if(err) console.log("---",err)
         else{
        console.log("connected");
        const fetched_data = await mongoose.connection.db.collection("food_items");
        fetched_data.find({}).toArray(async function(err, data){
            const foodCategory = await mongoose.connection.db.collection("foodCategory");
            foodCategory.find({}).toArray(function(err,catData){
                if(err) console.log(err);
                else{
                  global.food_items = data;
                  global.foodCategory = catData;
                }
        })
        

            //if(err)console.log(err);
            //else {
              //  global.food_items = data;
                
            //}
        })

      }
    
});

}
module.exports = mongoDB

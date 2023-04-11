const mongoose = require('mongoose')
const mongoURI = process.env.MONGO_URL
const mongoDB = async() =>{
    await mongoose.connect(mongoURI, { useNewUrlParser: true }, async (err, result) => {
        if (err)console.log("error");
        else {
            console.log("connected");
            const fetched_data = await mongoose.connection.db.collection("food_items");
    
            fetched_data.find({}).toArray(async  (err, data) =>{
                const foodCat = await mongoose.connection.db.collection("food_cat");
                foodCat.find({}).toArray( function(err,catData){
                    if(err) console.log(err);
                    else{
                        global.food_items = data;
                        global.food_cat = catData;
                    }

                })
                // else console.log(data); 
            });

        }
    })
}

module.exports = mongoDB

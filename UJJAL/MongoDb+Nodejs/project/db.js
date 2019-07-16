// connection between client side and server database
const Mongoclient = require("mongodb").MongoClient;
const ObjectID = require("mongodb").ObjectID;
const dbname = "crud_mongodb"; //database name 
const url = "mongdb://localhost:27000"; //deafault mngodb url
const mongoOptions = {useNewUrlParser: true}; 

//connection between node.js and server mongodb
const state = {
    db: null
};

// db connection function
const connect = (cb) =>{
    if(state.db)
        cb();
    else{
        Mongoclient.connect(url, mongoOptions , (err,client) =>{
            if(err)
                cb(err);
            else{
                state.db = client.db(dbname);
                cb();
            }
        });
    }
}

//get id to retrive data from db
const getPrimaryKey = (_id) => {
    return ObjectID(_id);
}

//data base retrive function
const getDB = () =>{
    return state.db;
}

//exports the functions
module.exports = {getDB, connect , getPrimaryKey};
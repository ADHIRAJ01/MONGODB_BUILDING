const MongoClient = require('mongodb').MongoClient;
const assert = require('assert');

const url = 'mongodb://localhost:27017/';              //     -> PROVIDING URL TO CONNECT WITH THE MONGODB SERVER
const dbname = 'confusion';                             // -> WE CREATED DATABASE IN OUR confusionServer , we will use that database

MongoClient.connect(url , (err , client )=> {           // connect to MONGODB url , second callack function once if error occured , second if client is there(connected)
    
    assert.equal(err , null);                           //check if err is not null if terue then gets connected to server 
    
    console.log('CONNECTED TO SERVER');

    const db = client.db(dbname);                       // to connect to database
    const collection = db.collections('dishes');        // to access dishes collection in the database -> 

    collection.insert({"name":"adhiraj","age":20,"message":"LEARNING FIRST TIME"},(err , result) => {
        assert.equal(err , null);

        console.log("after insert:\n ");
        console.log(result.ops);                        //result.ops gives number of operations performed 

        
        collection.find({}).toArray((err , docs )=> {
            assert.equal(err , null);

            console.log("found:\n");
            console.log(docs);

            db.dropCollection('dishes', (err , result) => {         // TO DELETE THE COLLECTION IN OUR DATABASE
                assert.equal(err , null);                           //checking if error is not null
    
                client.close();                                     // closing the client 
            });
        });
    });
});
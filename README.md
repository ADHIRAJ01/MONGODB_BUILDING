# MONGODB_BUILDING
trying making mongodb applications


BASIC KNOWLEDGEMENTS 
MONGODB = NOSQL DATABASE
mongo -> command line shell connect to specific instance of mongod - used to supply comands
mongod -> actual database connection , basically host process - used to take action on commands
MONGODB ATLAS -> IS CLOUD BASED IMPLEMENTATION SOFTWARE

INSTALL MONGODB COMMUNITY SERVER (MONGODB COMPASS)
GOTO DOWNLOADS .bin folder of mongo db where it is installed and add that path to computer system path


MONGODB COMPASS (OVERVIEW)-> THROUGH URL WE CAN CNNECT TO AWS , MS AZURE , GOOGLE CLOUD 
CREATE LOCAL DATA BASE -> NEW DATA BASE -> name and collection name (what u will collect)
* CAPPED COLLECTION -> you set 15k or any then after 15k data are filled it will delete old data
* WE CAN EDIT MODIFY DATABASE ACC. TO NEED WITHOUT ANY SCHEMA 

MONGOSH -> WE CAN RUN COMMAND SHERE 

ALSO IN OUR POWERSHELL

THESE COMMANDS WORK ONLY AFTER ENTERING THE mongo IN POWERSHELL
----------------------------------------------------------------MONGODB COMMANDS----------------------------------------------------------------
show dbs -> SHOW ALL DATABASES 

use dbName -> MAKE NEW DATABASE WITH NAME of DATABASE OR SWITCH DATABASE

db -> TO CHECK IN WHICH DATABASE YOU ARE WORKING

db.dropDatabase()   -> TO DELETE THE DATABASE

show collections -> TO SHOW ALL THE COLLECTIONS THAT ARE AVAILABLE 

db.createCollection('comments') -> TO CREATE A NEW COLLECTION  4

db.<collection name>.drop() or db.comments.drop() -> TO DROP A COLLECTION

db.comments.insert({               -> TO INSERT A ROW
    "name": "adhiraj",
    "age": 20
})


db.comments.insertMany([{           -> TO INSERT MANY ROWS 
     "name":"adhiraj", 
     "age": 20 
     },
     { "name": "asnjs",
      "age": 12 }
    ])

db.commets.find()               -> TO SHOW ALL ROWS
db.commets.find().pretty()      -> TO SHOW DATA IN DESIGNED WAY 

db.comments.insert({
    "name":"adhiraj",
    "age": 20,
    "lang":"english",
    "date": new Date()               -> TO  ADD DATE AND TIME 
})

SEARCH IN A DATABASE 
db.comments.find({"name":"adhiraj", "lang":"english"})              -> SEARCH IN DATABASE GIVING PARAMETERS IN find
db.comments.find({"name":"adhiraj"})
db.comments.findOne({"name":"adhiraj"})                             -> FINDS ONY ONE DATA AND THEN NOT SEARCHING WHOLE DATA

db.commets.find().pretty().limit(2)         -> GIVES N OUTPUT HERE N=2
db.commets.find().pretty().count()          -> GIVES NUMBER OF DATA IN THE COLLECTION FILE
db.commets.find().sort({age:1}).pretty().   -> PRINT AGE IN ASCENDING ORDER
db.commets.find().sort({age:-1}).           -> PRINT AGE IN DESCENDING ORDER

    db.commets.update({"name": "adhiraj"},      -> USED TO UPDATE IN DATABASE FIRSTTAKING OLD VALUE , THEN PASSING NEW VALUE
    {
        'name': 'adhiraj',
        "lang":"hindi",
        "age":21
    })
     db.commets.update({"name": "adhiraj"},      -> IN CASE OF UPSERT IF VALUE IS NOT  FOUND THEN IT GETS ADDED ELSE IF FOUND THEN IT CAN BE MODIFIED 
    {
        'name': 'adhiraj',
        "lang":"hindi",
        "age":21
    },{upsert : true})

db.help()               -> TO GET HELP

MANY OTHER FUNCTIONS LIKE LOGICAL AND OTHER WHICH WE CAN DO INSIDE IT - USED TO MAKE CHANGES 
(https://docs.mongodb.com/manual/reference/operator/query/)

eg:- 1. RENAME IN DATABASE
db.comments.update({name: 'adhiraj'},
{
    $rename:{
        age: "my_age"
    }
})
---------------------------------------------------------------------------------------------------------------------------------------------
PREREQUISITES=> downloaded MONGODB ON COMPUTER

1. CREATED A FOLDER data WHICH SAVES THE DATABASSE THEN TO CONNECT THROUGH THAT DATABASSE TYPE -dbpath=<path to store data> here path is subfolder so direct data
 *   mongod --dbpath=data bind_ip 127.0.0.1
THEN MONGODB IS STARTED 
THEN TYPE MONGO TO START THE MONGO ON OTHER CMD TO GET STARTED
 *   mongo

THEN TYPE MONGODB COMMANDS TO WORK WITH

------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------
WORKING WITH FOLDER 

1. ON ONE TERMINAL START mongo server and on other server work on mongo file  
    * mongod --dbpath=data --bind_ip 127.0.0.1
2. ON OTHER TERMINAL INSTALL MONGODB AND NODE_MODULES 
    * npm init   
    * npm install mongodb --save   
    * npm install assert --save         ->USED TO CHECK TRUTH OR FALSE VALUES WITHIN OUR APPLICATION 

3. CREATING APPLICATION THAT INTERACTS WITH MONGODB SERVER DATABASSE
    * index.js

ON ONE TERMINAL mongo SERVER IS RUNNING AND ON SECOND TERMINAL AFTER DOING ALL TYPE 
    * npm start

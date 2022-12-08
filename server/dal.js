const { MongoClient } = require('mongodb');

let newUrl = 'mongodb+srv://user:user123@cluster0.pbtxg0u.mongodb.net/demoUser'

const url = 'mongodb://localhost:8080';
const client = new MongoClient(newUrl);

const dbName = 'demoUser';
const db = client.db(dbName);
const collection = db.collection('users');

async function main() {

    console.log('en main');
    await client.connect();
    console.log('Connected successfully to server!!');
    return 'done.';
}

main()
.then(console.log)
.catch(console.error)

;

async function create(name, email, password, balance){
    console.log('en create');
    let insertResult;
    let doc = {name, email, password, balance};
    try {
        insertResult = await collection.insertOne(doc);
        console.log('Inserted documents =>', insertResult);
      } catch (error) {

        if (true) {
          console.log(`Error worth logging: ${error}`); 
        }
        throw error; 
    }
    console.log('insertResult: ',insertResult);
    return doc;
};

async function all(){
    const findResult = await collection.find({}).toArray();
    console.log('Found documents =>', findResult);

    return findResult;
};

async function deposit(email, balance){
    const updateResult = await collection.updateOne({ email: email }, { $set: { balance: balance } });
    console.log('Updated documents =>', updateResult);

    return updateResult;
};

async function withdraw(email, balance){
    const updateResult = await collection.updateOne({ email: email }, { $set: { balance: balance } });
    console.log('Updated documents =>', updateResult);

    return updateResult;
};

async function balance(email){
    let filteredDocs = await collection.find({ email: email }).toArray();
    console.log('Actual Balance', filteredDocs);
    console.log('Actual Balance', filteredDocs[0].balance);

    return filteredDocs[0].balance;
};

module.exports = {create, all, deposit, balance, withdraw};
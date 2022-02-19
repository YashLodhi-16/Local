// including mongoose module
const mongoose = require('mongoose');

// connecting mongodb, test database
mongoose.connect('mongodb://localhost/test', {useNewUrlParser: true});

// structure properties
const schema = {
    name: String
};

// represents the structure of a particular document
// creating a new schema
const newSchema = mongoose.Schema(schema);

// add confirm function to newSchema. cannot defines a function after compile it to a model.
newSchema.methods.confirm = function() {
    // grabing this object name
    const name = this.name;
    // logging name
    console.log(name);
}

// a wrapper of schema, provides an interface to the database for creating, querying, updating, deleting records, etc.
const newModel = mongoose.model("sample", newSchema);

// data of the document, structured according to schema
const data = {
    name: "sama"
};

// creating a document using model
const compiledData = new newModel(data);
console.log(compiledData);

// saving document to the database
// mongodb will automatic create a new collection with plural name using first argument of the mongoose.model
// it will return a promise, if promise resolve then confirm function fires
// else print error
compiledData.save() 
.then( () => {
    compiledData.confirm();
})
.catch( (e) => {
    // logging e
    console.log(e);
});
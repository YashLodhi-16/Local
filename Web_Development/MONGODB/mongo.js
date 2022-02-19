// **************************************************************************************************************************************************************************************


// Show All DataBase
// show dbs


// **************************************************************************************************************************************************************************************


// Show Current DataBase Name
// db


// **************************************************************************************************************************************************************************************

// Show Collections Name
// show collections


// **************************************************************************************************************************************************************************************


// Delete DataBase
// db.dropDatabase()


// **************************************************************************************************************************************************************************************


// Delete Collection
// db.collection_name.drop()


// **************************************************************************************************************************************************************************************


// Create Collection
// you cannot create a collection without a item.
// data only can in object or array of objects

// Using insert()
// db.collection_name.insert({name: "yash"}) | Single Document
// db.collection_name.insert([{name: "yash"},{name: "kallu"}]) | Multiple Document 

// Using insertOne()
// db.collection_name.insertOne({name: "yash"}) 

// Using insertMany()
// you have to give only a array
// db.collection_name.insertMany([{name: "yash"}]) | Single Document
// db.collection_name.insertMany([{name: "yash"}, {name: "kallu"}]) | Multiple Document


// **************************************************************************************************************************************************************************************


// Find One Item
// db.collection_name.findOne() prints first document of the collection
// db.collection_name.findOne({name: "yash"}) prints first document according to the filter

// Find All Items
// db.collection_name.find()

// Find Single or More Items According to the Filter
// you have pass an object to find function
// db.collection_name.find({name: "yash"})

// Find Items using Relational Operators
// db.collection_name.find({rating: {$gt: 3.5}}) | Greater Than
// db.collection_name.find({rating: {$lt: 3.5}}) | Less Than
// db.collection_name.find({rating: {$gte: 3.5}}) | Greater Than or Equals to
// db.collection_name.find({rating: {$lte: 3.5}}) | Less Than or Equals to  
// db.collection_name.find({rating: {$eq: 3.5}}) | Equals to
// db.collection_name.find({rating: {$ne: 3.5}}) | Not Equals to

// Find Items using Logical Operators and not nor or
// db.collection_name.find({rating: {$gt: 3.5}, price: {lt: 20}}) | And 
// db.collection_name.find($or:[{rating: {$gte: 3.5}, price: {lte: 20}}]) | Or 
// db.collection_name.find({$nor:[{rating: 359, name: 'motu'}]}) | Nor 
// db.collection_name.find({price:{$not:{$gt:1.99}}}) | Not 


// **************************************************************************************************************************************************************************************


// Delete Items
// you have to pass aleast a argument to delete single or more document. if you pass {} this than all documents will be deleted

// Using deleteOne
// db.collection_name.deleteOne({name: "yash"})

// Using deleteMany
// db.collection_name.deleteMany({name: "yash"}) 

// Delete Items using operators

// Relational Operator
// db.collection_name.deleteMany({age: {$gt: 18}}) | Greater Than
// db.collection_name.deleteMany({age: {$lt: 18}}) | Less Than
// db.collection_name.deleteMany({age: {$gte: 18}}) | Greater Than or Equals to
// db.collection_name.deleteMany({age: {$lte: 18}}) | Less Than or Equals to 
// db.collection_name.deleteMany({age: {$eq: 18}}) | Equals to
// db.collection_name.deleteMany({age: {$ne: 18}}) | Not Equals to

// Logical Operator
// db.collection_name.deleteMany({$and:[{name: "Moto 30s"}, {rating: 3.5}]}) | And
// db.collection_name.deleteMany({$or:[{name: "Samsung 30s"},{rating: 4.5}]}) | Or
// db.collection_name.deleteMany({$nor: [{name: 'kallusama'},{great: 'false'}]}) | Nor
// db.collection_name.deleteMany({name: {$not: /^R*/}}) | Not


// **************************************************************************************************************************************************************************************


// Update Items
// you have to pass aleast two argument to update documents

// Using update
// without {multi: true} argument it will only update one document
// db.collection_name.update({name: "Moto 30s"}, {$set: {price: 2}}) 
// db.collection_name.update({name: "Realme 80s"}, {$set: {price: 20000}},{multi: true}) 

// Using updateOne
// db.collection_name.updateOne({name: "Moto 30s"}, {$set:{price: 2}}) 

// Using updateMany
// db.collection_name.updateMany({name: "Moto 30s"}, {$set: {price: 200}}) 

// Update Items using operators

// Relational Operator
// db.collection_name.updateMany({price: {$gt: 29000}}, {$set: {price: '150 rupeeya'}}) | Greater Than
// db.collection_name.updateMany({price: {$lt: 29000}}, {$set: {price: '150 rupeeya'}}) | Less Than
// db.collection_name.updateMany({price: {$gte: 29000}}, {$set: {price: '150 rupeeya'}}) | Greater Than or Equals to
// db.collection_name.updateMany({price: {$lte: 29000}}, {$set: {price: '150 rupeeya'}}) | Less Than or Equals to
// db.collection_name.updateMany({price: {$ne: 29000}}, {$set: {price: '150 rupeeya'}}) | Not Equals to
// db.collection_name.updateMany({price: {$eq: 29000}}, {$set: {price: '150 rupeeya'}}) | Equals to 

// Logical Operator
// db.collection_name.updateMany({$and: [{name: 'Moto 30s'}, {price: 29000}]}, {$set: {rating: 4}}) | And
// db.items.updateMany({$or:[{name: "Samsung 30s"},{rating: 4.5}]},{$set: {price: 30}}) | Or
// db.items.updateMany({$nor: [{name: 'kallusama'},{great: 'false'}]}, {$set: {price: 000000}}) | Nor
// db.items.updateMany({name: {$not: /^R/}}, {$set: {price: 1111111111111111}}) | Not


// **************************************************************************************************************************************************************************************
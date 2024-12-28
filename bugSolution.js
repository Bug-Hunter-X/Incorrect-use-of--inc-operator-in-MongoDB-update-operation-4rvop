```javascript
// Correct use of $inc operator
db.collection.updateOne({ _id: 1 }, { $inc: { field: 1 } });

//Alternative solution if you want to append to a string
db.collection.updateOne({ _id: 1 }, { $set: { field: field + 'abc' } });
```
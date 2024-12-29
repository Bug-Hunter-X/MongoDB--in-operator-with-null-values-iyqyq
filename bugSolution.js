```javascript
// Correct approach: handle null separately
db.collection('myCollection').find({ $or: [{ field: { $in: [1, 2] } }, { field: null }] });

//Alternative using $exists operator for checking the existence of the field
db.collection('myCollection').find({ $or: [{ field: { $in: [1,2] } }, {field: {$exists: false}}]});
```
var mongo = require('mongodb').MongoClient
var url = 'mongodb://localhost:27017/learnyoumongo'

mongo.connect(url, function(err, db) {
    if (err) throw err
    var col = db.collection(process.argv[3])
    col.remove({
        _id: process.argv[4]
    }, function(err, docs) {
        if (err) throw err
        db.close()
    })
})
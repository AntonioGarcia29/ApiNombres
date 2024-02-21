const mongoose = require('mongoose')

mongoose.connect('mongodb://mongo.db-antonio.svc.cluster.local:27017/mydatabase?directConnection=true', { useNewUrlParser: true, useUnifiedTopology: true })
    .then(db => console.log('Mondongo is connected to ', db.connection.host))
    .catch(error => console.error('Error connecting to Mondongo:', error));
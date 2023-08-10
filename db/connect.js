const mongoose = require('mongoose');

const connectionString = 'mongodb+srv://om:jaymataji@cluster0.hwff1yi.mongodb.net/task-manager?retryWrites=true&w=majorityk';

const connectDB = (url) => {
    return mongoose.connect(url, {
        useNewUrlParser: true,
        useCreateIndex: true,
        useFindAndModify: false,
        useUnifiedTopology: true,
    })
}
/*mongoose
.connect(connectionString)
.then(()=> console.log('Connected to DB....'))
.catch((err)=>console.log(err))
*/
module.exports = connectDB;


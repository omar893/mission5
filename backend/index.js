import app from './server.js'
import mongodb from 'mongodb'
import MyDataDAO from './dao/myDataDAO.js'
import dotenv from 'dotenv'
dotenv.config()
const MongoClient = mongodb.MongoClient;

const port = process.env.PORT || 8000;

MongoClient.connect(process.env.MYDATA_DB_URI)
    .catch(err => {
        console.error(err);
        process.exit(1);
    })
    .then(async client => {
        await MyDataDAO.injectDB(client);
        app.listen(port, () => {
            console.log(`listening on port ${port}`);
        })
    });



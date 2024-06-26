import mongoose from 'mongoose';

const Connection = async (username, password) => {
    const URL = `mongodb://user:codeforinterview@ac-wlexvdx-shard-00-00.hjbhcgg.mongodb.net:27017,ac-wlexvdx-shard-00-01.hjbhcgg.mongodb.net:27017,ac-wlexvdx-shard-00-02.hjbhcgg.mongodb.net:27017/?replicaSet=atlas-10szrh-shard-0&ssl=true&authSource=admin&retryWrites=true&w=majority&appName=whatsapp-clone`;
    try {
        await mongoose.connect(URL, { useUnifiedTopology: true, useNewUrlParser: true, useFindAndModify: false });
        console.log('Database Connected Succesfully');
    } catch(error) {
        console.log('Error: ', error.message);
    }

};

export default Connection;
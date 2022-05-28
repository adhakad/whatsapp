import mongoose from 'mongoose';

const Connection = async () => {
    
    try {
        await mongoose.connect('mongodb+srv://adminUser:7pH4LDTnmlLMsCSA@cluster0.ngu0t.mongodb.net/whatsapp?retryWrites=true&w=majority', { useUnifiedTopology: true, useNewUrlParser: true });
        console.log('Database Connected Succesfully');
    } catch(error) {
        console.log('Error: ', error.message);
    }

};

export default Connection;
import mogoose from 'mongoose';

export const connectDB = async() => {
    try {
        await mogoose.connect('mongodb://127.0.0.1:27017/parking');
        console.log('MongoDB connected...');

    } catch (error) {
        console.error('Error connectig to mongoDB', error);
    }
}

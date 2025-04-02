import mongoose from "mongoose";

const carSchema = new mongoose.Schema({ //placa, color, hora entrada,horasalida,precio
    carPlate: {
        type: String,
        required: true,
        unique: true
    },
    color:{
        type: String,
        required: true
    },
},{
    timestamps: true
})

export default mongoose.model('Car',carSchema)
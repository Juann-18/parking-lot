import { date } from 'zod';
import Car from '../models/car.model.js';

export const register = async (req, res) => {
    const {carPlate, color} = req.body
    console.log(carPlate, color)
    try {
        const carFound = await Car.findOne({ carPlate });
        if (carFound) {
            return res.status(409).json({
                message: `The car is already registered:`,
                fecha: carFound.createdAt

            });
        }
        
        const newCar = new Car({
            carPlate,
            color,
        });

        const carSaved = await newCar.save();
        
        res.json({
            message: 'Car registered successfully',
            car: {
                carPlate: carSaved.carPlate,
                color: carSaved.color,
                createdAt: carSaved.createdAt,
            },
        });

    //console.log(newCar);
    } catch (error) {
        res.status(500).json({message:error.message});        
    }
}
export const exit = async(req, res) =>{
    const {carPlate} = req.body 

    try {
        const carFound = await Car.findOne({carPlate});

        if(carFound) {

            const carDeleted = await Car.findOneAndDelete({carPlate: carPlate})

            //console.log(carDeleted)

            const receipt  = {
                carPlate: carDeleted.carPlate,
                color: carDeleted.color,
                createdAt: carDeleted.createdAt,
                updatedAt: carDeleted.updatedAt,
            };
            return res.status(200).json({
                message: "Car removed successfully",
                receipt: receipt ,
            })
        } else {
            return res.status(404).json({ message: "Car not found." });
        }


    } catch (error) {
        return res.status(500).json({ message: "An error occurred.", error: error.message }); 
    }
}
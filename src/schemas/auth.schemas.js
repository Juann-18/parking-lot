import {z} from 'zod';

export const registerSchema = z.object({
    carPlate: z.string({
        required_error: 'Plate iss required'
    }).min(5,{
        message: 'plate must be at least 6 characters'
    }),
    color: z.string({
        required_error: 'Color required'
    }),
})
export const exitSchema = z.object({
    carPlate: z.string({
        required_error: 'Plate id required'
    }).min(5,{
        message: 'plate must be at least 6 characters'
    })
})
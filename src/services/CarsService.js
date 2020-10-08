import axios from "axios";


export default class CarsService {

    
   async getCars() {
    
            // const response = await axios.get('http://localhost:3000/api/cars')
         
         const {data} =  await axios.get('http://localhost:3000/api/cars');
         return data
           
           
            
    }
    addACar(newCar){
        const newwCar = {
            brand: newCar.brand,
            model: newCar.model,
            year: newCar.year,
            maxSpeed: newCar.maxSpeed,
            isAutomatic: false,
            engine: newCar.engine,
            numberOfDoors: newCar.numberOfDoors
        }
        console.log(newwCar);
        axios.post('http://localhost:3000/api/cars', newwCar)
            .then(function(response){
                console.log(response)
            })
            .catch(function(error){
                console.log(error)
            })

    }


}

// http://localhost:3000/api/explorer/cars




export const carsService = new CarsService();
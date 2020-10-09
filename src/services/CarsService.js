import axios from "axios";

export default class CarsService {

    async getCars() {
        const {data} =  await axios.get('http://localhost:3000/api/cars');
        return data
    }
    async getACar(id){
        const {data} = await axios.get('http://localhost:3000/api/cars/' + id)
        return data
    }
    addACar(newCar){
        axios.post('http://localhost:3000/api/cars', newCar)
    }

    editACar(car){
        return axios.put(`http://localhost:3000/api/cars/${car.id}`, car)
    }
}

export const carsService = new CarsService();
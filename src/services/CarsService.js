

export default class CarsService {
    realResponse = [];
    list() {
        return this.cars;
    }
   async getCars() {
    
            // const response = await axios.get('http://localhost:3000/api/cars')
         
        //    axios.get('http://localhost:3000/api/cars').then(response => this.cars = response.data);
           
           
            
    }

}

// http://localhost:3000/api/explorer/cars




export const carsService = new CarsService();
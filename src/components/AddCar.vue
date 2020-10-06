<template>
  <div class="addCar">
    <h1>Add a Car</h1>
    <div class="container mt-4">
        <form @submit.prevent="addCar">
            <div class="form-group row">
                <label for="brand" class="col-4 col-form-label">Brand</label>
                <div class="col-8">
                    <div class="input-group">
                        <input id="brand" v-model="brand" type="text" required="required" class="form-control here">
                    </div>
                </div>
            </div>

            <div class="form-group row">
                <label for="model" class="col-4 col-form-label">Model</label>
                <div class="col-8">
                    <div class="input-group">
                        <input id="model" v-model="model" type="text" required="required" class="form-control here">
                    </div>
                </div>
            </div>

            <div class="form-group row">
                <label for="year" class="col-4 col-form-label">Year</label>
                <div class="col-8">
                    <div class="input-group">
                        <input id="year" v-model="year" type="text" required="required" class="form-control here">
                    </div>
                </div>
            </div>

            <div class="form-group row">
                <label for="maxSpeed" class="col-4 col-form-label">Max Speed</label>
                <div class="col-8">
                    <div class="input-group">
                        <input id="maxSpeed" v-model="maxSpeed" type="text" required="required" class="form-control here">
                    </div>
                </div>
            </div>

            <div class="form-group row">
                <label for="isAutomatic" class="col-4 col-form-label">Automatic</label>
                <div class="col-8">
                    <div class="input-group">
                        <input id="isAutomatic" v-model="isAutomatic" type="text" required="required" class="form-control here">
                    </div>
                </div>
            </div>

            <div class="form-group row">
                <label for="engine" class="col-4 col-form-label">Engine</label>
                <div class="col-8">
                    <div class="input-group">
                        <input id="engine" v-model="engine" type="text" required="required" class="form-control here">
                    </div>
                </div>
            </div>

            <div class="form-group row">
                <label for="numberOfDoors" class="col-4 col-form-label">Number of Doors</label>
                <div class="col-8">
                    <div class="input-group">
                        <input id="numberOfDoors" v-model="numberOfDoors" type="text" required="required" class="form-control here">
                    </div>
                </div>
            </div>

            <div class="form-group row">
            <div class="offset-4 col-8">
            <button name="submit" type="submit" class="btn btn-primary">Submit</button>
            </div>
            </div>
        </form>
    </div>
</div>
</template>

<script>
import {carsService} from '../services/CarsService'


export default {
  name: 'AddCar',
  data(){
return {    
    cars: [],    
    brand: '',
    model: '',
    year: 0,
    maxSpeed: 0,
    isAutomatic: false,
    engine: '',
    numberOfDoors: 0
        }
  },
methods: {
    addCar(){
        const newCar = {
            brand: this.brand,
            model: this.model,
            year: this.year,
            maxSpeed: this.maxSpeed,
            isAutomatic: this.isAutomatic,
            engine: this.engine,
            numberOfDoors: this.numberOfDoors
            
        }
        carsService.addACar(newCar);
       
    }
}
  }

  


</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
h3 {
  margin: 40px 0 0;
}
ul {
  list-style-type: none;
  padding: 0;
}
li {
  display: inline-block;
  margin: 0 10px;
}
a {
  color: #42b983;
}
table {
  font-family: arial, sans-serif;
  border-collapse: collapse;
  width: 100%;
}

td, th {
  border: 1px solid #dddddd;
  text-align: left;
  padding: 8px;
}

tr:nth-child(even) {
  background-color: #dddddd;
}
</style>

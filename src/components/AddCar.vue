<template>
<div>
  
  <h1 v-if="$route.params.id">Edit Car</h1>
  <h1 v-else>Add Car</h1>

  <form @submit.prevent="onSubmit">
    <!-- BRAND -->
    <div class="form-group row">
      <label for="brand" class="col-4 col-form-label">Brand</label>
      <div class="col-8">
        <div class="input-group">
          <input id="brand" v-model="car.brand" type="text" required="required" class="form-control here" minlength="2" />
        </div>
      </div>
    </div>
    <!-- MODEL -->
    <div class="form-group row">
      <label for="model" class="col-4 col-form-label">Model</label>
      <div class="col-8">
        <div class="input-group">
          <input id="model" v-model="car.model" type="text" required="required" class="form-control here" minlength="2" >
        </div>
      </div>
    </div>
    <!-- YEAR -->
    <div class="form-group row">
      <label for="year" class="col-4 col-form-label">Year</label>
      <div class="col-8">
        <div class="input-group">
          <select class="form-control" v-model="car.year">
            <option v-for="year in yearsArray" :key="year">{{year}}</option>
          </select>
        </div>
        </div>
    </div>
  <!-- MAX SPEED -->
    <div class="form-group row">
      <label for="maxSpeed" class="col-4 col-form-label">Max Speed</label>
      <div class="col-8">
        <input id="maxSpeed" v-model="car.maxSpeed" type="number" class="form-control here">
      </div>
    </div>
    <div class="form-group row">
      <label for="isAutomatic" class="col-4 col-form-label">Is Automatic</label>
      <div class="col-8">
        <div class="input-group form-check">
          <input class="form-check-input" type="checkbox" id="checkbox" v-model="car.isAutomatic">
        </div>
      </div>
    </div>
  <!-- ENGINE -->
    <div class="form-group row">
      <label for="checkbox" class="col-4 col-form-label">Engine</label>
      <div class="col-8">

        <div class="input-group">
          <div class="form-check">   
            <input class="form-check-input" name="engine" type="radio" id="petrol" value="petrol" v-model="car.engine" required="required" >
            <label class="form-check-label" for="petrol">petrol</label>
          </div>

          <div class="form-check">
            <input class="form-check-input" name="engine" type="radio" id="diesel" value="diesel" v-model="car.engine">
            <label class="form-check-label" for="diesel">diesel</label>
          </div>

          <div class="form-check">
            <input class="form-check-input" name="engine" type="radio" id="electric" value="electric" v-model="car.engine">
            <label class="form-check-label" for="electric">electric</label>
          </div>

          <div class="form-check">
            <input class="form-check-input" name="engine" type="radio" id="hybrid" value="hybrid" v-model="car.engine">
            <label class="form-check-label" for="hybrid">hybrid</label>
          </div>
        </div>
      </div>
    </div>
  <!-- NUMBER OF DOORS -->
    <div class="form-group row">
      <label for="numberOfDoors" class="col-4 col-form-label">Number of Doors</label>
      <div class="col-8">
        <div class="input-group">
          <input id="numberOfDoors" v-model="car.numberOfDoors" type="number" required="required" class="form-control here">
        </div>
      </div>
    </div>

    <div class="form-group row">
      <div class="offset-4 col-8">
        <button v-if="$route.params.id" name="submit" type="submit" class="btn btn-primary">Edit Car</button>
        <button v-else name="submit" type="submit" class="btn btn-primary">Add Car</button>
      </div>
    </div>
  </form>
  <!-- RESET FORM -->
  <div class="form-group row">
      <div class="offset-4 col-8">
          <button @click="resetForm" name="submit" type="submit" class="btn btn-primary">Reset form</button>
      </div>
  </div>
  <!-- PREVIEW FORM -->
  <div class="form-group row">
      <div class="offset-4 col-8">
          <button @click="previewForm" name="submit" type="submit" class="btn btn-primary">Preview form</button>
      </div>
  </div>
{{car}}
</div>
</template>

<script>
import {carsService} from '../services/CarsService'


export default {
  name: 'AddCar',

  data(){
return {  
    yearsArray: [], 

    //car data
    
    cars: [],    
    car: {
      
        brand: '',
        model: '',
        year: '',
        maxSpeed: '',
        isAutomatic: '',
        engine: '',
        numberOfDoors: ''
    }
}
  },
async created(){
  
       if(this.$route.params.id){
       this.car = await carsService.getACar(this.$route.params.id)
     }

      let range =(start, stop, step=1) => Array(stop - start).fill(start).map((x, y) => x + y * step)
      this.yearsArray = range(1990, 2019);

  },
methods: {

  onSubmit(){
    if(this.$route.params.id){
      this.editCar()
    }
    else {
      this.addCar()
    }
  },

    addCar(){
        carsService.addACar(this.car);
       this.$router.push('cars')
    },

    editCar(){
      console.log(this.car);
      carsService.editACar(this.car).then(async () =>{
        this.car = await carsService.getPosts()
      });
       this.$router.push({name:'cars'})
    },



    // FORM METHODS
    resetForm(){
      return this.car =  {}
    },
    previewForm(){
        let string = '';
        Object.keys(this.car).forEach(key => {
          string += `${this.car[key]} `;
        });
        alert(string);
  

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

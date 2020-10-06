<template>
  <div class="hello">
    <h1>Cars</h1>
    <table>
      <tr>
        <th>brand</th>
        <th>model</th>
        <th>year</th>
        <th>maxSpeed</th>
        <th>isAutomatic</th>
        <th>engine</th>
        <th>numberOfDoors</th>
        <th></th>
      </tr>
      <tr v-for="car in cars" :key="car.id">
        <td>{{car.brand}}</td>
        <td>{{car.model}}</td>
        <td>{{car.year}}</td>
        <td>{{car.maxSpeed}}</td>
        <td>{{car.isAutomatic}}</td>
        <td>{{car.engine}}</td>
        <td>{{car.numberOfDoors}}</td>
      </tr>


    </table>
  </div>
</template>

<script>
// import { carsService } from '../services/CarsService' 
import axios from 'axios'


export default {
  name: 'Cars',
  data() {
    return {
       cars: []
    }
  },

  created() {
     axios.get('http://localhost:3000/api/cars').then(response => this.cars = response.data)
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

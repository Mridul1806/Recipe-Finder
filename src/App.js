import React from 'react';
import axios from 'axios';
import './App.css';
import Display from './Components/display'
import Form from './Components/form'

class App extends React.Component{
  state ={
    ingredients:[]
  }
  generateApi=(name)=>{
   axios.get("https://www.themealdb.com/api/json/v1/1/search.php?s=pasta")
   .then(res=>{
     console.log(res)
    this.setState(
      {ingredients:res.data.meals}
    )
   }
   )
  }
  render(){
    return (
    <div className="App">
     <Form generateApi={this.generateApi}/>
     <Display  ingredients={this.state.ingredients } />
    </div>
  
   );
 }
}

export default App;

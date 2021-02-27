import { Component } from 'react';
import './app.scss';


class App extends Component {

  state = {
    name:'Vazgen',
    cats: ['Marvin','Darvin','Harry']
  }

  handleChange = (e) => {
    const value = e.target.value
    this.setState({name:value})
  }
  render(){

    return (
      <div className="app">
        <h1 className="app__header">Catty shop</h1>
  
        <div className="app__search">
          <input 
            className="app__search-input" 
            type="text" name="search" 
            placeholder='Search cats' 
            onChange = {this.handleChange}
          />
        </div>
        <main className="app_main">
          <ul>
          {
            this.state.cats.map((cat,ind) =>{
              console.log(cat);
              return (<li key={ind}>{cat}</li>)
            })
          }
          </ul>
          
        </main>
      </div>
    );
    }
  }

export default App;

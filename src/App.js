import { Component } from 'react';
import './app.scss';


class App extends Component {

  state = {
    search:'',
    cats: [
      {
        id:1,
        name:'Marvin',
        email:'marvin@gmail.com'
      },
      {
        id:2,
        name:'Darvin',
        email:'darvin@gmail.com',
        url:'https://robohash.org/5?set=set4&size=150x150'

      },
      {
        id:3,
        name:'Harry',
        email:'harry@gmail.com',
        url:'https://robohash.org/3?set=set4&size=150x150'
      },
      {
        id:4,
        name:'Kityy',
        email:'harry@gmail.com',
        url:'https://robohash.org/3?set=set4&size=150x150'
      },
      {
        id:5,
        name:'Petya',
        email:'harry@gmail.com',
        url:'https://robohash.org/3?set=set4&size=150x150'
      }
    ]
  }

  handleChange = (e) => {
    //? INPUT VALUE
    const value = e.target.value
    
    //? SET INPUT VALUE TO STATE
    this.setState({search:value})
  }
  render(){
    const mySearchInputValue = this.state.search.toLowerCase()
    const filteredCatsData = this.state.cats.filter((cat)=>{
      let n = cat.name.toLowerCase()
      return n.includes(mySearchInputValue)
    })
    console.log(filteredCatsData);
    return (
      <div className="app">
        <h1 className="app__header">Catty shop</h1>
  
        <div className="app__search">
          <input 
            className="app__search-input" 
            value={this.state.search}
            type="text" name="search" 
            placeholder='Search cats' 
            onChange = {this.handleChange}
          />
        </div>
        <main className="app_main">

          <ul className="app__main-list">
          {
            filteredCatsData.map((cat,ind) =>{
              // console.log(cat);
              return (
                <li className="item" key={ind}>
                  <div>
                    <img 
                      src={`https://robohash.org/${cat.id}?set=set4`}
                      className="item__image"
                      alt=""
                    />
                  </div>
                  <div className='item__header'>{cat.name}</div>
                  <div>{cat.email}</div>
                </li>
              )
            })
          }
          </ul>
          
        </main>
      </div>
    );
    }
  }

export default App;

import { Component, useState } from 'react'
import api from './api';


class App extends Component{

  state= {
    filmes: [],
  }

  async componentDidMount(){
    const response = await api.get('');

    //console.log(response.data)

    this.setState({ filmes: response.data});
  }

  render(){

    const { filmes } = this.state;

    return(
      <div>
        <header>
           <h1>Lista de filmes Para download </h1>
        </header>
        {console.log(filmes)}
        {filmes.map(filme => (
          <li key={filme.show.id}>
              <h2>
                <p>-</p>
                <p  id='p1'>

                {filme.show.name}
                {filme.show.url}

                </p>

              </h2>
          </li>
        ))}
      </div>
    )
  }
}

export default App

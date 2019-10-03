import React from 'react'
import movies from '../moviedata.js'
import axios from 'axios';


class App extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            movies: movies,
            value: "",
        }
        this.getMovies = this.getMovies.bind(this);
        this.handleInput = this.handleInput.bind(this);
        this.handleSubmit = this.handleSubmit.bind(this);
    }

    
   getMovies() {
    axios.get('/all')
    .then((response)=>{
        this.setState({movies: response.data})
      //console.log(response.data);
    })
    .catch((error)=> {
      console.log(error);
    })
   }

   componentDidMount(){
       this.getMovies()
   }

   handleInput(event) {
       this.setState({value: event.target.value})
       console.log(this.state.value)
   }

   handleSubmit(event) {
        event.preventDefault();
        axios.post('/addMovie', {
            movieName: this.state.value,
            watched: 'f'
        })
        .then((response) => {
            // console.log('there was no error, u good ');
            console.log(response.data);
          })
          .catch((error) => {
            console.log('there was an error: ', error);
          });
   }

    render() {


      return (
        <div>
            <form>
                <label>
                     Add movie:
                    <input type="text" value={this.state.value} onChange={this.handleInput}/>
                </label>
                <input type="submit" value="Submit" onClick={this.handleSubmit}/>
            </form>
            <div>my movies:</div>
            <ol>
            {this.state.movies.map((movie) => {
                return <li>{movie.name}</li>
            })}
            </ol>
        </div>)
    }
  }


  export default App

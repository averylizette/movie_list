import React from 'react'
import movies from '../moviedata.js'


class App extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            movieList: movies,
            matched: [],
            submit: false,
            movie: "",
            movies: [],
            added: false,
        };
        this.handleChange = this.handleChange.bind(this);
        this.handleSubmit = this.handleSubmit.bind(this);
        this.addMovie = this.addMovie.bind(this);
        this.submitMovie = this.submitMovie.bind(this);
    }

        

    handleChange(event) {
        var match = movies.filter((movie) => {
            var lcMovie = movie.toLocaleLowerCase();
            var lcResult = event.target.value.toLocaleLowerCase()
            if (lcMovie.includes(lcResult)) {
                return movie;
            }
        });
        this.setState({
            matched: match,
            submit: false,
        })  
    }
 
        handleSubmit(event) {
            event.preventDefault();
            this.setState({submit:true})     
        }

        addMovie(event) {
            var input = event.target.value;
            this.setState({
                movie: input,
            })
        }

        submitMovie(event) {
            event.preventDefault();
            this.setState({ added: false})
            var moviesCopy =  this.state.movies.slice();
            var movieCopy = this.state.movie
            moviesCopy.push(movieCopy);
            this.setState({
                added: true,
                movies: moviesCopy,
            })
        }
      


    render() {

        const submitted = this.state.submit;
        let results;

        if (submitted) {
        results = (
         <div>Your matched results:
                <ul>
                {this.state.matched.map((result) => {
                    return <li>{result}</li>
                })}
                </ul>
            </div>)
       
        } else {
            results = <div/>
        }

        let added = this.state.added;
        let movieL;

        if (added) {
            movieL = this.state.movies.map((movie) => {
                return <li>{movie}</li>
            })
        }
        

      return (
        <div>
             <input type="text" onChange={this.handleChange} placeholder="Search if we have your movie..." />
             <input type="submit" value="Submit" onClick={this.handleSubmit}/>
            <div>
                {results}
            </div>
            <div> This is my React Movie List!!</div>

            <form onSubmit={this.submitMovie}>
                <label>
                Add Movie Name:
                <input type="text" value={this.state.value} onChange={this.addMovie} />
                </label>
                <input type="submit" value="Submit" />
            </form>
            <ol>
                {movieL}
           </ol> 
        </div>)
    }
  }


  export default App

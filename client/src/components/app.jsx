import React from 'react'
import movies from '../moviedata.js'


class App extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            movieList: movies,
            matched: [],
            submit: false
        };
        this.handleChange = this.handleChange.bind(this);
        this.handleSubmit = this.handleSubmit.bind(this);
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
        } else if (this.state.matched.length === 0) {
         results = <div>Sorry, we didn't find any matches</div>;

        } else {
            results = <div/>
        }
        

      return (
        <div>
             <input type="text" className="input" onChange={this.handleChange} placeholder="Search if we have your movie..." />
             <input type="submit" value="Submit" onClick={this.handleSubmit}/>
            <div>
                {results}
            </div>
            <div> This is my React Movie List!!</div>
            <ol>
                <li>Mean Girls</li>
                <li>Hackers</li>
                <li>Totoro</li>
                <li>Winnie the Pooh</li>
                <li>Spring Breakers</li>
                <li>Django</li>
           </ol> 
        </div>)
    }
  }


  export default App



//   <form onSubmit={this.handleSubmit}>
//   <label>
//     Enter Movie List Title:
//   <input type="text" value={this.state.value} onChange={this.handleChange} />
//   </label>
//   <input type="submit" value="Submit" />
// </form>
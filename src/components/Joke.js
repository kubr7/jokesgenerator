import React from "react";
import Button from "./Button";

const Joke = () => {
     const [joke, setJoke] = React.useState("");
     const [isLoading, setIsLoading] = React.useState(false);
     const [error, setError] = React.useState(null);

     const fetchApi = () => {
          setIsLoading(true);
          fetch("https://sv443.net/jokeapi/v2/joke/Programming?type=single")
               .then((res) => res.json())
               .then((data) => {
                    setJoke(data.joke);
                    setIsLoading(false);
               })
               .catch((error) => {
                    setError("Error fetching joke.");
                    setIsLoading(false);
               });
     };

     return (
          <div className="joke-page">
               <div className="text">
                    <div className="heading-text">
                         <h1>Joke Generator</h1>
                    </div>
                    
               </div>
               <div className="joke-wrapper">
                    <div className="joke-box">
                         <div className="button-box">
                              <Button callApi={fetchApi} />
                         </div>
                         <div className="joke shadow">
                              {isLoading ? <p>Loading...</p> : (error ? <p>{error}</p> : <p>{joke}</p>)}
                         </div>
                    </div>
               </div>
          </div>
     );
}


export default Joke;
import React from 'react';
import './App.css';
import Button from "./components/Button";



function App() {
        return (
      <>
      <h1>Handbags & Purses</h1>
          <nav>
              <Button
                 buttonText= "to the collection"/>
              <Button
                  buttonText= "shop all bags"/>
              <Button
                  buttonText= "pre-orders"
                  toBeDisabled={true}/>


          </nav>

          <main>
              <article>
                  <span></span>
                  <img/>
                  <p></p>
                  <h4></h4>


              </article>
              <article><span></span></article>
              <article><span></span></article>
              <article><span></span></article>
          </main>
      </>
  );
}

export default App;




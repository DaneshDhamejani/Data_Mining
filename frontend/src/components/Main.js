import React, {Component} from 'react';
import {Route} from 'react-router-dom';
import Question from "./Question/Question";



function Main() {
     
        
        
        return (
            <div> {/*Render Different Component based on Route*/}
                <Route path="/"
                    component={Question}/>

            </div>
        );
    
}
// Export The Main Component
export default Main;
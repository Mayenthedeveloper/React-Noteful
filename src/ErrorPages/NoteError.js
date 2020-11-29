import React, { Component } from 'react';

class NoteError extends Component {
   
    static getDerivedStateFromError(error){
        return{hasError: true}
    }
    render() { 
        return ( 
            <h2>Could not display this note</h2>
         );
    }
    
}
 
export default NoteError;
import React from 'react';
import {Link } from "react-router-dom";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

export default function Header(){
    return <header className="App__header">
        <h1>
            <Link to='/'> Noteful</Link>
            <FontAwesomeIcon icon="check-double" />
        </h1>
        </header>

}
import React from 'react';
import './main.css'

const Main = (props) => (
<div className="container">
<div className="card" onClick={() => props.game(props.name)} >
   <img className="card-img-top" src={props.image} alt={props.name}/>
</div>
</div>
)

export default Main
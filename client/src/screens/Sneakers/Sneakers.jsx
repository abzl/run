import React from 'react'
import { Link } from 'react-router-dom';
import "./Sneakers.css";

export default function Sneakers(props) {
  const { sneakers } = props;

  return (
    <div className="sneakers-card">
      {sneakers.map((sneaker) => (
        <div key={sneaker.id}>
          <Link to={`/sneakers/${sneaker.id}`}>
          <img className="sneakers-img" src={sneaker.img_url} alt={sneaker.name}/>
          </Link>
          <p className="sneaker-name">{sneaker.name}</p>
          <p className="sneaker-price">${sneaker.price}</p>
          <p>{sneaker.features}</p>
          
        </div>
    
      ))
      }
    </div>
  )
}

import React from 'react';
import './categorycard.css'
const CategoryCard = (props) => {
    return ( <>
    <div className="categoryCard">
    <img src={props.image} alt="" />
  <div className="card-body">
    <h3>{props.title}</h3>
  </div>
</div>
    </> );
}
 
export default CategoryCard;
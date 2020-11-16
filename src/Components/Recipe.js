
import React from 'react';
const Recipe = (props)=>{
    console.log(props.recipe)
    return (
        <div className="card">
               <img src={props.recipe.recipe.image} alt=""/><br/>
            <h1>{props.recipe.recipe.label}</h1>
            <p>calories--{props.recipe.recipe.calories}</p>
            <ol>{props.recipe.recipe.ingredients.slice(0,5).map(ingredients=>(
               <li>{ingredients.text}</li> 
            ))}
            </ol>
            <h4>source:{props.recipe.recipe.source}</h4>
            <a href={props.recipe.recipe.url}>Link to recipe</a>
            
        </div>
    );
}
export default Recipe;
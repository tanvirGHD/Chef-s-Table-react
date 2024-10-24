import { useEffect, useState } from "react";

const Recipes = ({addRecipeToQueue}) => {

    const [recipes, setRecipes] = useState([]);

    // card data load
    useEffect(() => {
        fetch('./recipes.json')
        .then(res => res.json())
        .then(data => setRecipes(data))
    },[])





    return (
        <div className="md:w-8/12">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-5">
        {
            recipes.map(recipe =>
            <div key={recipe} className="card bg-base-100 border">
                <figure className="p-7">
                    <img
                    className="md:h-60 w-full rounded-xl"
                    src={recipe.recipe_image}
                    alt="Recipe img" />
                </figure>
                <div className="card-body">
                <h2 className="card-title text-2xl font-bold">{recipe.recipe_name}</h2>
                <p className="text-gray-600">{recipe.short_description}</p>
                <h3 className="text-lg font-bold">Ingredients: {recipe.ingredients.length}</h3>
                <ul className="ml-8">
                    {recipe.ingredients.map((item,index) =>
                    (<li className="list-disc text-gray-600" key={index}>{item}</li>))}
                </ul>
                <div className="text-lg flex font-bold gap-8 ">
                    <div className="flex items-center gap-1">
                    <i className="fa-regular fa-clock text-2xl"> </i>
                    <p>{recipe.preparing_time}</p>
                    </div>
                    <div className="flex items-center gap-1 text-lg">
                    <i className="fa-solid fa-fire-flame-curved text-2xl"></i>
                    <p>{recipe.calories}</p>
                    </div>
                    
                </div>
                <div className="card-actions">
                <button onClick={ ()=> addRecipeToQueue(recipe)} className="btn rounded-full text-lg font-bold bg-green-500">Want to cook</button>
                </div>
                </div>
                </div>)
        }
        </div>
        </div>
    );
};

export default Recipes;
import { useEffect, useState } from "react";

const Recipes = () => {

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
            <div key={recipe} className="card bg-base-100 shadow-xl">
                <figure className="p-7">
                    <img
                    className="md:h-60 w-full rounded-xl"
                    src={recipe.recipe_image}
                    alt="Shoes" />
                </figure>
                <div className="card-body">
                <h2 className="card-title">Shoes!</h2>
                <p>If a dog chews shoes whose shoes does he choose?</p>
                <div className="card-actions justify-end">
                <button className="btn btn-primary">Buy Now</button>
                </div>
                </div>
                </div>)
        }
        </div>
        </div>
    );
};

export default Recipes;
import { useState } from "react"
import Banner from "./Components/Banner"
import Header from "./Components/Header" 
import OurRecipes from "./Components/OurRecipes"
import Recipes from "./Components/Recipes"
import Sidebar from "./Components/Sidebar"
function App() {

  const [recipeQueue, setRecipeQueue] = useState([])

  const addRecipeToQueue = recipe => {
    const isExist = recipeQueue.find(
      previousRecipe => previousRecipe.recipe_id === recipe.recipe_id
    )
    if(!isExist){
      setRecipeQueue([...recipeQueue, recipe]);
    }
    else{
      alert('Recipe already exists in the queue.')
    }
  }


  return (
    <div>
      {/* header */}
      <Header></Header>
      {/* Banner */}
      <Banner></Banner>
      {/* Our Recipes Section */}
      <OurRecipes></OurRecipes>
      {/* Recipe card section */}
      <section className="flex flex-col md:flex-row gap-6 w-11/12 mx-auto">
        {/* cards section */}
        <Recipes addRecipeToQueue={addRecipeToQueue} />
        {/* Sidebar */}
        <Sidebar recipeQueue={recipeQueue}></Sidebar>
      </section>
    </div>
  )
}

export default App

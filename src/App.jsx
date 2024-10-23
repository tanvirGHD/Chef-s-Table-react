import Banner from "./Components/Banner"
import Header from "./Components/Header" 
import OurRecipes from "./Components/OurRecipes"
import Recipes from "./Components/Recipes"
import Sidebar from "./Components/Sidebar"
function App() {

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
        <Recipes></Recipes>
        {/* Sidebar */}
        <Sidebar></Sidebar>
      </section>
    </div>
  )
}

export default App

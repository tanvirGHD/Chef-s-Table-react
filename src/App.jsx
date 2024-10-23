import Banner from "./Components/Banner"
import Header from "./Components/Header" 
import Recipes from "./Components/Recipes"
function App() {

  return (
    <div>
      {/* header */}
      <Header></Header>
      {/* Banner */}
      <Banner></Banner>
      {/* Our Recipes Section */}
      <Recipes></Recipes>
    </div>
  )
}

export default App

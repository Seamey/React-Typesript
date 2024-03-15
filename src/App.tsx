import './App.css'
import ComponentsHome from './Home/HomeComponent'
import ComponentNavbar from './components/navbar/ComponentNavbar'
import ComponentFooter from './components/footer/FooterComponent'
import Create from './Home/ButtonCreate'
function App() {

  return (

    <>
      <ComponentNavbar/>
      <Create/>
      <ComponentsHome/>
      <ComponentFooter/>
    </>
  )
}

export default App

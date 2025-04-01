import MovieApp from "./components/MovieApp"
import { AppContextProvider } from "./context/AppContext"


function App() {


  return (
    <AppContextProvider>
      <MovieApp />
    </AppContextProvider>
  )
}

export default App

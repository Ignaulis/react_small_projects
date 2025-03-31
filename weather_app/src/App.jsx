import WeatherApp from "./components/WeatherApp"
import { AppContextProvider } from "./context/AppContext"

function App() {

  return (
    <AppContextProvider>
      <WeatherApp />
    </AppContextProvider>
  )
}

export default App

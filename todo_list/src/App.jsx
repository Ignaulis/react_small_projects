import Todo from "./components/Todo"
import { AppContextProvider } from "./context/ContextProvider"

function App() {

  return (
    <AppContextProvider>
      <Todo />
    </AppContextProvider>
  )
}

export default App

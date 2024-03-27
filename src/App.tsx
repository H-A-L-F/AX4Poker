import { ApplicationRouter } from './core/ApplicationRouter.js'
import { AuthContextProvider } from './core/AuthContext.js'

function App() {
  return (
    <AuthContextProvider>
      <ApplicationRouter />
    </AuthContextProvider>
  )
}

export default App

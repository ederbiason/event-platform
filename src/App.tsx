import { ApolloProvider } from "@apollo/client"
import { BrowserRouter } from "react-router-dom"
import { AuthGithubProvider } from "./contexts/authGithub"
import { client } from "./lib/apollo"
import { Router } from "./routes/Router"

function App() {
  return (
    <ApolloProvider client={client}>
      <BrowserRouter>
        <AuthGithubProvider>
          <Router />
        </AuthGithubProvider>
      </BrowserRouter>
    </ApolloProvider>
  )
}

export default App
// IMPORT
import './App.css'

// Styled Components
import { createGlobalStyle } from 'styled-components'

// Sections
import Header from './assets/components/Header'
import Main from './assets/components/Main'

// GlobalStyle
const GlobalStyle = createGlobalStyle`

  @import url('https://fonts.googleapis.com/css2?family=Montserrat:wght@400;500&display=swap');


body{
  margin: 0;
  padding: 0;
  box-sizing: border-box;
  font-family: 'Montserrat', sans-serif;
  color: #FC4308;
}
`

function App() {

  return (
    <>
      <GlobalStyle />
      <Header />
      <Main/>
    </>
  )
}

export default App

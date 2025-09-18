import './App.css'
import Mensagem from './components/Mensagem'
import Contador from './components/Contador'

function App() {
  return (
    <div>
      <h1>Meu Primeiro Projeto React</h1>

      {/* Exemplos de uso do componente Mensagem com props */}
      <Mensagem nome="Ana" curso="ADS" />
      <Mensagem nome="João" curso="Engenharia de Software" />
      <Mensagem nome="Maria" curso="Sistemas para Internet" />

      {/* Exemplo do contador com useState */}
      <Contador />
    </div>
  )
}

export default App
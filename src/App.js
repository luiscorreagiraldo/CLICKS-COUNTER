import './App.css';
import Boton from './components/Boton';
import './hojas -de-estilo/Boton.css';
import Contador from'./components/Contador';
import { useState } from 'react'

function App() {

  const [numClicks,setNumClicks] = useState(0);


  const manejarClick = () => {
    setNumClicks(numClicks + 1)
  }

  const reiniciarContador = () => {
    setNumClicks(0)
  }

  return (
    <div className='App'>
      <div className='contenedor-principal'>
        <Contador 
        numClicks= {numClicks}
        />
        <Boton
          text='Click'
          esBotonDeClick={true}
          manejarClick={manejarClick}
        />

        <Boton
          text='Reiniciar'
          esBotonDeClick={false}
          manejarClick={reiniciarContador}
        />
      </div>
    </div>
  );
}

export default App;

import { useEffect, useState } from 'react'
import './App.css'
import Formulario from '../pages/Formulario'
import Gastos from '../pages/Gastos'
import GastosForm from '../pages/GastosForm'
import Presupuestos from '../pages/Presupuestos'

function App() {

  const [ presupuesto, setPresupuesto ] = useState(0)
  const [ restante, setRestante ] = useState(0)
  const [ mostrarForm, setMostrarForm ] = useState(true)
  const [ gastos, setGastos ] = useState([])
  const [ gasto, guardarGasto ] = useState({})
  const [ crearGasto, serCrearGasto ] = useState(false)

 
  
  useEffect(() => {

    if(crearGasto){

      setGastos([
        ...gastos,
        gasto
      ])

      setRestante(restante - gasto.cantidad)

      serCrearGasto(false)
    } 
    
  }, [gasto, crearGasto, gastos, restante])

  return (
    <main className='main'>

      { mostrarForm ? 
      (
        <Formulario  
        setMostrarForm={setMostrarForm} 
        presupuesto={presupuesto} 
        setPresupuesto={setPresupuesto} 
        setRestante={setRestante}
        />
      ) : 
      (
      <>
        <GastosForm guardarGasto={guardarGasto} serCrearGasto={serCrearGasto}/> 
        <Gastos gastos={gastos}/>
        <Presupuestos presupuesto={presupuesto} restante={restante}/> 
      </>
      )
    }
    </main>
  )
}

export default App

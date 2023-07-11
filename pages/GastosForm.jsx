import { useState, useEffect } from "react"
import shortid from 'shortid'

function GastosForm({guardarGasto, serCrearGasto}) {
    
    const [ cantidad, setCantidad ] = useState(0)
    const [ gasto, setGasto ] = useState('')
    const [ error, setError ] = useState(false)


    function handleGasto(e){
        setGasto(e.target.value)
    }
    function handleCantidad(e){
        setCantidad(parseInt(e.target.value))
    }


    function onSubmit(e){
        e.preventDefault()

        if(cantidad < 1 || isNaN(cantidad) || gasto === ''){
            console.log('Error')
            setError(true)
            return;
        }

        const gastoNuevo = {
            gasto,
            cantidad,
            id: shortid.generate()
        }

        guardarGasto(gastoNuevo)
        serCrearGasto(true)
    }

    return(
            <section className="grid place-content-center text-slate-300 p-5">
                 <div className="mb-5">
                    <h1 className='text-center p-5 pt-10 text-indigo-400'>PRESUPUESTO</h1>
                    <div className="text-center text-indigo-400 mb-5">
                        <p className="font-bold">Ingrese su gasto la cantidad</p>
                    </div>
                </div>
                <form onSubmit={onSubmit} className="flex flex-col items-center justify-center space-y-6">
                    <input type="text" id="gasto" name="gasto" placeholder="Ej. Comida" className="w-80 appearance-none rounded border-2 border-indigo-600 bg-slate-800 p-2 px-4 focus:bg-slate-700 focus:ring-2" value={gasto} onChange={handleGasto}/>
                    <input type="number" id="cantidad" name="cantidad" className="w-80 appearance-none rounded border-2 border-indigo-600 bg-slate-800 p-2 px-4 focus:bg-slate-700" value={cantidad} onChange={handleCantidad}/>
                    { error ? <p id="validation" className="text-center text-red-500 italic text-sm">Ingrese el nombre del gasto y el precio</p> : ''}
                    <button id="showPw" className="rounded bg-indigo-500 p-2 px-4 text-white hover:bg-violet-700">CALCULAR</button>
                </form>
            </section>  
    )

}


export default GastosForm
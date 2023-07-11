import { useState, useEffect } from "react"


function Formulario({presupuesto, setPresupuesto, setRestante, setMostrarForm}) {
    
    const [ cantidad, setCantidad ] = useState(0)
    const [ error, setError ] = useState(false)


    function handlePresupuesto(e){
        setCantidad(parseInt(e.target.value))
    }

    function onSubmit(e){
        e.preventDefault()

        if(cantidad < 1 || isNaN(cantidad)){
            console.log('Error')
            setError(true)
            return;
        }
        setMostrarForm(false)
        setError(false)
        setPresupuesto(cantidad)
        setRestante(cantidad)
    }

    return(
            <section className="grid place-content-center text-slate-300 p-5">
                <div className="mb-5">
                    <h1 className='text-center p-5 pt-10 text-indigo-400'>PRESUPUESTO</h1>
                    <div className="text-center text-indigo-400">
                        <p className="font-bold">Ingrese su presupuesto inicial</p>
                    </div>
                </div>
                <form onSubmit={onSubmit} className="flex flex-col items-center justify-center space-y-6">
                    <input type="number" id="presupuesto" name="presupuesto" placeholder="Presupuesto" className="w-80 appearance-none rounded border-2 border-indigo-600 bg-slate-800 p-2 px-4 focus:bg-slate-700" value={cantidad} onChange={handlePresupuesto}/>
                    { error ? <p id="validation" className="text-center text-red-500 italic text-sm">Ingrese un presupuesto inicial válido</p> : ''}
                    <button id="showPw" className="rounded bg-indigo-500 p-2 px-4 text-white hover:bg-violet-700">CALCULAR</button>
                </form>
            </section>  
    )

}


export default Formulario
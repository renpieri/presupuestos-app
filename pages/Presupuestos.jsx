
function Presupuestos({presupuesto, restante}){

    let clase;

    if((presupuesto / 4) >= restante) {
        clase = 'bg-red-500'
    } else if ((presupuesto / 2) > restante){
        clase = 'bg-orange-500'
    } else {
        clase = 'bg-indigo-800'
    }
    
    return(
        <div className="lg:w-1/5 w-3/5 m-auto">
            <p className="bg-indigo-800 p-1 mb-1">Presupuesto inicial: {presupuesto}</p>
            <p className={`${clase} p-1`}>Presupuesto restante: {restante}</p>
        </div>
    )
}

export default Presupuestos
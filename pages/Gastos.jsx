import { useState, useEffect } from "react"


function Gastos({gastos}) {



    const gasto = gastos.map((e, i) =>{
        return(
            <div key={i} className="m-auto flex justify-between items-center w-3/5 lg:w-2/5 my-5 p-2 gap-5 rounded">
                <p className="px-3">{e.gasto}</p>
                <p className="bg-violet-700 p-2 px-3">{e.cantidad}</p>
            </div>

        )
    })
    return(

        <div>
            <h1 className="text-center">PRESPUESTO</h1>
            {gasto}
        </div>

    )

}


export default Gastos
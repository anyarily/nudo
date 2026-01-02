import { useState } from "react"

export default function Prueba({sumador,objet}){




  return <div >
{sumador.map( (e)=>{ return <div key={e.id}>
<h2>{e.numero}</h2>   
</div> } )}
<h3>yamil aybar</h3>

  </div>  
}
import React, { useEffect, useState } from "react";


const Table=()=>{

    const [donneesPlantes,setDonneesPlantes]=useState(null)
    
   useEffect(()=>{
    fetch("./../data_plantes.json")
    .then((response)=>response.json())
    .then((data)=>{
        setDonneesPlantes(data.plantes)
    })
    .catch((e)=>{
        console.error("erreur recuprétation plantes",e)
    })
   },[] )

    return(
        <div className="">
            {donneesPlantes && 
            donneesPlantes.map((item,index)=>(
                <span>

                    <p
                    key={index}>
                    
                    {`${item.nom}`}  </p>

                </span>

              


            ))}
            <span>
                <p>dfdgg</p>
            </span>
        </div>
    )
}

export default Table
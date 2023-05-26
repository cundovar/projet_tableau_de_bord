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

   return (
    <div className="">
      {donneesPlantes && (
        <table>
          <thead>
            <tr>
              <th>plante</th>
              <th>prix</th>
              <th>paiement</th>
              <th>livraison</th>
            </tr>
          </thead>
          <tbody>
            {donneesPlantes.map((item, index) => (
              <tr key={index}>
                <td>{item.nom}</td>
                <td>{item.prix}</td>
                <td>{item.paiement}</td>
                <td>{item.statut_livraison}</td>
              </tr>
            ))}
          </tbody>
        </table>
      )}
    </div>
  );
  
            }
export default Table
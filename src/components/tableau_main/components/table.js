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
        <div>
            <h3>tableau des ventes</h3>
        </div>
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
                <td> <p>{item.nom}</p></td>
                <td><p>{item.prix}€</p></td>
                <td><p>{item.paiement}</p></td>
                <td > <p className="colorStatut text-center"
                style={
                    item.statut_livraison === "délivré"
                      ? { backgroundColor: "rgb(164, 164, 234)" }
                      : item.statut_livraison === "en cours"
                      ? { backgroundColor: "rgb(186, 237, 186)" }
                      : item.statut_livraison === "retour"
                      ? { backgroundColor: "rgb(241, 148, 148)" }
                      : null
                  }
                 >{item.statut_livraison}</p></td>
              </tr>
            ))}
          </tbody>
        </table>
      )}
    </div>
  );
  
            }
export default Table
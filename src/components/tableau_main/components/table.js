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
    <div className="table_container">
        <div>
            <h3>tableau des ventes</h3>
        </div>
 
      {donneesPlantes && (
        <table>
          <thead>
            <tr>
              <th className="event-plante">plante</th>
              <th className="event-prix">prix</th>
              <th className="event-paiement">paiement</th>
              <th className="event-livraison">livraison</th>
            </tr>
          </thead>
          <tbody>

            {donneesPlantes.map((item, index) => (
              <tr key={index}>
                <td data-label="nom"> <p>{item.nom}</p></td>
                <td data-label="prix"><p>{item.prix}€</p></td>
                <td data-label="paiement"><p>{item.paiement}</p></td>
                <td data-label="livraison" > <p className="colorStatut "
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
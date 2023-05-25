import React, { useEffect, useState } from "react";

const Users = () => {
  const [donneesUsers, setDonneesUsers] = useState(null);

  useEffect(() => {
    fetch("./../data_users.json")
      .then((response) => response.json())
      .then((data) => {
        setDonneesUsers(data.users);
      })
      .catch((e) => {
        console.error("erreur données recup json");
      });
  }, []);

  return (
    <div className="">
      {donneesUsers &&
        donneesUsers.map((item, index) => (
          <div key={index} className=" row userDiv">

             <div className="photo">{`${item.photo}`}</div>
               <div>
               <div className="" >{`${item.name}`}</div>
               <div className="" >{`${item.country}`}</div>

               </div>

             <div>

            </div>
          </div>
        ))}
    </div>
  );
};

export default Users;

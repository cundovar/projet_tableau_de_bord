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
    <div className="scroller">
      <div>
        <h3>Abonnés</h3>
      </div>
      <div className="margin_fix">
      {donneesUsers &&
        donneesUsers.map((item, index) => (
          <div key={index} className=" row userDiv">
            <div className="d_flex align-item-center ">
              <div className="photo">
                <img
                  className="photoUsers"
                  src={`${item.photo}`}
                  alt={item.nom}
                />{" "}
              </div>
            </div>
            <div className="">
              <div className="text-uppercase fw-bold">{`${item.name}`}</div>
              <div className="">{`${item.country}`}</div>
            </div>
          </div>
        ))}
    </div>
    </div>
  );
};

export default Users;

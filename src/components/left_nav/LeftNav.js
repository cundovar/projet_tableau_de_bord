import React from "react";

const LeftNav = () => {

  const nav_items = [
    { id: 0, name: "Home", icon: "fa fa fa-home", active: true },
    { id: 1, name: "Reports", icon: "fa fa-chart-pie" },
    { id: 2, name: "Statistics", icon: "fa fa-chart-bar" },
    { id: 3, name: "Trade", icon: "fas fa-coins" },
    { id: 4, name: "Wallet", icon: "fa fa-wallet" },
    { id: 5, name: "Settings", icon: "fa fa-cog" },
  ];
  const nav = nav_items.map((icon) => {
    return (
      <div className="text-center">
        <div key={icon.id}>
          <i className={`text-center icon ${icon.icon}`}></i>
        </div>
      </div>
    );
  });

  return (
    
      

      <div className>{nav}</div>
    
  );
};

export default LeftNav;

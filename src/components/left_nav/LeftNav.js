import React from "react";

const LeftNav=()=>{

    const nav_items = [
        {name: 'Home', icon: 'fa fa fa-home', active: true},
        {name: 'Reports', icon: 'fa fa-chart-pie'},
        {name: 'Statistics', icon: 'fa fa-chart-bar'},
        {name: 'Trade', icon: 'fas fa-coins'},
        {name: 'Wallet', icon: 'fa fa-wallet'},
        {name: 'Settings', icon: 'fa fa-cog'},
      ];
      const nav = nav_items.map((item, key) => {
        return (
          <div key={key} >
            <i> {item.name}</i>
          </div>
        )
      })

    return(

        <div> {nav}</div>
    )
}

export default LeftNav
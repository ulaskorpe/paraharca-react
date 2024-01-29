import React from "react";
import { moneyFormat } from "../helpers";
function Header({money,total }){
    
    return(<div className="header"><div>HEADER   Total : ${ total}</div>
    
    <div>
{total > 0 && (<div>money to burn :  ${ moneyFormat(money - total)}</div>) || (<div>{ moneyFormat(money)}</div>) }

    </div>
    
    </div>
    
    
    );
}

export default Header;
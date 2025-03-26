import {useContext} from "react";
import {SwContext} from "./context.js";

const NavItem = ({itemTitle}) => {
    const {changePage} = useContext(SwContext);
    return (
        <li onClick={() => changePage.itemTitle} className="nav-item btn btn-danger mx-1">{itemTitle}</li>
    );
};

export default NavItem;
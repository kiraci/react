import { useState } from "react";

const Navbar = () => {

    const [heading, setHeading] = useState("Nice Header!");

    const handleHeader = () => {
        setHeading("New Heading!");
    }

    const handleClick = () => {
        window.alert("hahah");
    }

    const handleClickAgain = ( name ) => {
        window.alert(name);
    }

    return (

        <nav className="navbar">   

            <h1>{heading}</h1>
            <button onClick={handleHeader}>Change Header!</button>
            <button onClick={handleClick}>Alert!</button>
            <button onClick={() => handleClickAgain("osman")}>Name!</button> 
        </nav>
        
     );
}
 
export default Navbar;
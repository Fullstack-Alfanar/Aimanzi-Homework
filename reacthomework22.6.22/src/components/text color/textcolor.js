import { useState } from "react";
import "../text color/textcolor.css";
import ChangeColor from "../change color/changecolor.js"


function TextColor() {
    const [Tcolor, txtColor] = useState("");
    return (
        <div>

            <div>
                <label className="lcolor" >Color Name : </label>
                <input placeholder="Enter you Color" type="text" onChange={a => txtColor(a.target.value)}
                />
            </div>
            <div>
                <label style={{ color: Tcolor }}> Hello Im Changing My Color By React Hook</label>
            </div>
            <div className="HookProps">
                <ChangeColor COLOR={Tcolor}/>
            </div>
        </div>
    )
}
export default TextColor
import "../change color/changecolor.css"
function ChangeColor(colortype) {
    return (
        <div>
            <label style={{color:colortype.COLOR}}>Hello Im Changing My Color By React Props Hook</label>
        </div >
    )
}
export default ChangeColor
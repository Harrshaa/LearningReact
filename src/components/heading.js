function Heading(){
    let Styles={
        headingStyle:{
            color:"blue",
            backgroundColor:"yellow"
        },
        paraStyle:{
            fontSize:"2rem",
            color:"red"
        }

    }

    return (
        <>
        <h2>Harsha</h2>
        <div>
        <h1  style={Styles.headingStyle}>HELLO REACT JS</h1>
        <p style={Styles.paraStyle}>React is very intresting</p>
        </div>
        </>
    )
}

export default Heading;
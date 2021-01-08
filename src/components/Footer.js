import React from 'react'

const Footer = () => {
    let date = new Date()
    return (
        <div style={{ backgroundColor: "black", color: "white", height: "2.5rem", textAlign: "center", width:"100%", padding:"20px 0px", position:"absolute"}}>
            <p style={{ marginTop: "10px", fontSize: "14px" }}>All rights reserve {date.getFullYear()}.{date.getMonth() + 1}.{ date.getDay()}</p>
        </div>
    )
}

export default Footer

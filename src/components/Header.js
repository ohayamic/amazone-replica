import React from 'react'

const Header = () => {
    return (
        <header >

            <img className="header-img" src="https://img.favpng.com/9/22/14/logo-amazon-com-transparency-vector-graphics-image-png-favpng-VhvZeHiLBUkXF2Z914ZbBFMuQ.jpg" alt="amazone-clone" />
            <section className="header-search">
                <input type="text" placeholder="Search" />
                <button>Search</button>
            </section>
            <section className="header-children" style={{display:"flex"}}>
                <div>One</div>
                <div>Two</div>
                <div>Three</div>
            </section>
        </header>
    )
}

export default Header

import React from 'react'
import Img1 from '../clipper.jpg'
import Img2 from '../clipper1.jpg'
import Img3 from '../clipper2.jpg'
import Img4 from '../clipper3.jpg'
import Img5 from '../clipper4.jpg'
import Product from './Product'
import './Home.css'



const Home = () => {
    return (

        <section>
            <div className="product-row">
                <Product id={1} title='DHL- Profi Haarschneidemaschine Haarschneider Bart Trimmer Rasierer Hair Clipper' price={29.99} rating={2} image={Img1}/>
                <Product id={2} title='Limural Hair Clippers for Men + Cordless Close Cutting T-Blade Trimmer Kit, Professional Hair Cutting Kit Beard Trimmer Barbers Men' price={35.09} rating={3} image={Img2}/>
            </div>
            <div className="product-row">
                <Product id={1234} title= 'Cordless Hair Clippers for Men - Surwit Professional Hair Clippers Trimmer for Hair Cut, IPX7 Waterproof Barber Clippers USB Electric' price= {22.9} image = {Img1}/>
                <Product  id={3412} title= 'DHL- Profi Haarschneidemaschine Haarschneider Bart Trimmer Rasierer Hair Clipper' price= {22.9} image = {Img3}/>
                <Product id={2341} title= 'DHL- Profi Haarschneidemaschine Haarschneider Bart Trimmer Rasierer Hair Clipper' price= {22.9} image = {Img4}/>
            </div>
            <div className="product-row">
                <Product id={4123} title= 'SURKER Hair Clippers for Men Trimmer for Men Hair Trimmer Beard Trimmer Barber Hair Cut Grooming Kit Machine Professional Rechargeable' price= {22.9} image = {Img5}/>
            </div>
        </section>
    )
}

export default Home

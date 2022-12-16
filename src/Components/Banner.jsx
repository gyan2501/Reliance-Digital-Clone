
import React from 'react'
import { Slide } from 'react-slideshow-image'
import 'react-slideshow-image/dist/styles.css'


const Banner = ({list}) => {
  return (
    <div>
        <Slide autoplay={true} arrows={true} duration={1000} pauseOnHover={true} wid>
                {list.map(e=>
                    <div className="each-slide-effect">
                        <div><img height={"100%"} width={"100%"} src={e}/></div>
            </div>)}      
            </Slide>
    </div>
  )
}

export default Banner
import React from 'react'
import './Gmap.css'

function Gmap() {
  return (
    <div className='map_block'>
        <iframe className="gmap_iframe" frameBorder="0" scrolling="no" marginHeight="0" marginWidth="0" src="https://maps.google.com/maps?width=600&amp;height=400&amp;hl=en&amp;q=University of Oxford&amp;t=k&amp;z=14&amp;ie=UTF8&amp;iwloc=B&amp;output=embed"/>
    </div>
  )
}

export default Gmap
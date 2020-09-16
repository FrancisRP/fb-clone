import React from 'react'
import './Widgets.css'

function Widgets() {
    return (
        <div className="widgets">
            <iframe
                src="https://www.facebook.com/Kikos15/"
                width="340"
                height="100%"
                style={{ border: "none", overflow: "hidden"}}
                scrolling="no"
                frameBorder="0"
                allowTransparency="true"
                allow="encrpyted-media"
            >
            </iframe>
            
        </div>
    )
}

export default Widgets

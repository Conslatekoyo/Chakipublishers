import React from "react";
import './style.css'


const CausesElement = ({ triangleColor, imageUrl, h1, text, fontSize })=>{
    return(
        <div className="cause-container">
      <div className="divh1">
        {h1 && <div className="">{h1}</div>}
      </div>
            <div className='icon'>
      {imageUrl && <img src={imageUrl} alt="CauseElement" className="imageStyle1" />}

      </div>
      <div className="divText">
        {text && <div className="">{text}</div>}
      </div>


        </div>
    )
}

export default CausesElement
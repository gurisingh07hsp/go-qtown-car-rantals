import React from 'react'

const Loading = () => {
  return (
    <div className="loading-area">
        <div className="loading-box flex justify-center items-center"></div>
        <div className="loading-pic flex justify-center">
            <img className="loader-gif" src="images/loader-car.gif" alt="loader Image"/>
        </div>
    </div>
  )
}

export default Loading

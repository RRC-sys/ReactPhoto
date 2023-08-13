import React, { useEffect } from 'react'

const Parallaxe = ({photoPath}) => {

    useEffect(() => {
        const parallaxElems = document.querySelectorAll('.parallax');
        window.M.Parallax.init(parallaxElems);
      }, []);

  return (
    <div className="parallax-container">
        <div className="parallax">
            <img src={photoPath} alt="" className="responsive-img"/>
        </div>
    </div>
  )
}

export default Parallaxe
import React, { useEffect } from 'react'

const GridPhotos = () => {

    useEffect(() => {
        const materialBox = document.querySelectorAll('.materialboxed');
        window.M.Materialbox.init(materialBox);
      }, []);


  return (
    <section className="container section" id="photos">
        <div className="row">
            <div className="col s12 l4">
                <img src="./images/portrait.jpg" alt="" className="responsive-img materialboxed"/>
            </div>
            <div className="col s12 l6 offset-l1">
                <h2 className="indigo-text text-darken-4">Portraits</h2>
                <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Accusamus aut iste est sed veniam quibusdam incidunt consequuntur? Assumenda temporibus ipsa dolore. Quis quo illo quasi qui provident mollitia dolorum eaque.</p>
            </div>
        </div>
        <div className="row">
            <div className="col s12 l4 push-l7 offset-l1">
                <img src="./images/city.jpg" alt="" className="responsive-img materialboxed"/>
            </div>
            <div className="col s12 l6 pull-l5 right-align offset-l1">
                <h2 className="indigo-text text-darken-4">Cityscapes</h2>
                <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Accusamus aut iste est sed veniam quibusdam incidunt consequuntur? Assumenda temporibus ipsa dolore. Quis quo illo quasi qui provident mollitia dolorum eaque.</p>
            </div>
        </div>
        <div className="row">
            <div className="col s12 l4">
                <img src="./images/nature.jpg" alt="" className="responsive-img materialboxed"/>
            </div>
            <div className="col s12 l6 offset-l1">
                <h2 className="indigo-text text-darken-4">Nature</h2>
                <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Accusamus aut iste est sed veniam quibusdam incidunt consequuntur? Assumenda temporibus ipsa dolore. Quis quo illo quasi qui provident mollitia dolorum eaque.</p>
            </div>
        </div>
    </section>
  )
}

export default GridPhotos
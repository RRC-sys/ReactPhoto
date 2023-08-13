import React,{ useEffect } from 'react'
import { NavLink } from 'react-router-dom'

const Services = () => {

    useEffect(() => {
        // Inicialize as abas
        const tabElems = document.querySelectorAll('.tabs');
        window.M.Tabs.init(tabElems);
      }, []);

  return (
    <section className="container section" id="services">
        <div className="row">
            <div className="col s12 l4">
                <h2 className="indigo-text text-darken-4">
                    What I do...
                </h2>
                <p>Lorem ipsum dolor, sit amet consectetur adipisicing elit. Iusto aliquid fuga sint quidem nemo dolorum optio odio sed distinctio? Similique debitis quo sunt eos nostrum ullam officia dolor, quidem magnam.</p>
                <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Nisi dignissimos reprehenderit repudiandae facere tempora ut doloremque aspernatur? Alias illum error, sit necessitatibus, vel aliquid corrupti beatae voluptate, veritatis doloremque dolor?</p>
            </div>
            <div className="col s12 l6 offset-l2">
                <ul className="tabs">
                    <li className="tab col s6">
                        <NavLink to="#photography" className="indigo-text text-darken-4">Photography</NavLink>
                    </li>
                    <li className="tab col s6">
                        <NavLink to="#editing" className="indigo-text text-darken-4">Editing</NavLink>
                    </li>
                </ul>
                <div className="col s12" id="photography">
                    <p className="flow-text indigo-text text-darken-4">
                        PHOTOGRAPHY
                    </p>
                    <p>
                        Lorem, ipsum dolor sit amet consectetur adipisicing elit. Corrupti adipisci atque cum praesentium quibusdam natus cupiditate ullam maxime quasi reprehenderit, assumenda quos odit error facere laborum quia fuga fugit? Earum.
                    </p>
                </div>
                <div className="col s12" id="editing">
                    <p className="flow-text indigo-text text-darken-4">
                        EDITING
                    </p>
                    <p>
                        Lorem, ipsum dolor sit amet consectetur adipisicing elit. Corrupti adipisci atque cum praesentium quibusdam natus cupiditate ullam maxime quasi reprehenderit, assumenda quos odit error facere laborum quia fuga fugit? Earum.
                    </p>
                </div>
            </div>
        </div>
    </section>
  )
}

export default Services
import React, { useEffect } from 'react'

const Contact = () => {

    useEffect(() => {
        const datepickerElems = document.querySelectorAll('.datepicker');
        window.M.Datepicker.init(datepickerElems, {
          format: 'dd/mm/yyyy',
          autoClose: true, 
          showClearBtn: true,
          defaultDate: new Date(),
          disableWeekends: true
        });
      }, []);

    const handleSubmit = (e) => {
        e.preventeDefault();
    }

  return (
    <section className="section container" id="contacts">
        <div className="row">
            <div className="col s12 l5">
                <h2 className="indigo-text text-darken-4">
                    Get In Touch
                </h2>
                <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Quidem soluta, enim voluptatem numquam quo ipsum consequatur tempora repellendus doloremque harum nobis, unde nemo autem voluptatum magni esse! Asperiores, eum aspernatur.</p>
                <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Soluta, quidem voluptas! Possimus, eligendi ut. Ad perspiciatis voluptates, eum fuga, dolorem odit atque deserunt quisquam beatae error aperiam similique adipisci dolore.</p>
                <p>Lorem ipsum dolor sit amet consectetur, adipisicing elit. Laudantium id itaque rerum quaerat quasi possimus iure exercitationem! Sequi, aliquid recusandae eum hic odit facere neque iste. Libero omnis enim qui?</p>
            </div>
            <div className="col s12 l5 offset-l2">
                <form onSubmit={handleSubmit}>
                    <div className="input-field">
                        <i className="material-icons prefix">email</i>
                        <input type="email" id="email"/>
                        <label htmlFor="email">Your Email</label>
                    </div>
                    <div className="input-field">
                        <i className="material-icons prefix">message</i>
                        <textarea id="message" className="materialize-textarea" cols="30" rows="10"></textarea>
                        <label htmlFor="message">Your Message</label>
                    </div>
                    <div className="input-field">
                        <input type="text" id="date" className="datepicker"/>
                        <label htmlFor="date">Choose a date you need me for...</label>
                    </div>
                    <div className="input-field">
                        <p>Services required...</p>
                        <p>
                            <label>
                                <input type="checkbox" />
                                <span>Photography</span>
                            </label>
                        </p>
                        <p>
                            <label>
                                <input type="checkbox" />
                                <span>Editing</span>
                            </label>
                        </p>
                    </div>
                    <div className="input-field center">
                        <button className="btn waves-effect waves-dark">Submit</button>
                    </div>
                </form>
            </div>
        </div>
    </section>
  )
}

export default Contact
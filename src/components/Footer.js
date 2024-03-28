import logo from '../imgs/logo.png'
import React, { Component } from 'react'
import '../styles/footer.scss'

export default class Footer extends Component {
  render() {
    return (
      <>
       <div id='footer' className='row'>
            <div id='footer1' className='col-md-4'>
                <div id='logo'>
                  <img src={logo} />
                </div>
                <div className='text'>
                <p className='ms-4'>თავდაცვის <br /> სამინისტრო</p>
                </div>
            </div>

            <div id='footer2' className='col-md-4'>
                <h4>ღონისძიებები: </h4>
                <p>25 მარ. სერჟანტთა აკადემიის დღე</p>
                <p>1 აპრ. თავდაცვის ძალების აღმოსავლეთის სარდლობის დღე</p>
                <p>22 აპრ. წვრთნებისა და სამხედრო განათლების მხარდამჭერი ცენტრი „კრწანისის“ დღე</p>
                <p>25 აპრ. ლოგისტიკის დღე</p>
            </div>

            <div id='footer3' className='col-md-4'>
                <h4>პარტნიორები:</h4>
                <p>პარტნიორი1</p>
                <p>პარტნიორი2</p>
            </div>
       </div>
      
      </>
    )
  }
}

import React from 'react'
import { BackToMain } from './backToMain'
import { ContactForm } from './contactForm'

export const Section2 = () => {
  return (
    <div>

      <div className="section contact" id="contact" >

        <div>
          <BackToMain />
        </div>
        <ContactForm />
        <div className='contactIlustration'>
          <div className='triangleDown'></div>
          <div className='triangleUp'></div>

          <div className='triangleRight'></div>
          <div className='triangleLeft'></div>
        </div>
      </div>

    </div>
  )
}


import React from 'react'
import { ToggleSwitch } from './toggleSwitch'

export const AboutMe = () => {

  return (
    <div className='aboutMe'>
      <ToggleSwitch />
      <h4>Junior, but...</h4>
  
      <p><span>A</span>lso <mark>18 years of international experience</mark> in Greece, England, Scotland and Spain.</p>

      <p>I founded <mark>my own company</mark> in 2010, during those years I did a masters in Didactics for foreign languages, I worked training teachers in Scotland and Spain and all these experiences have helped me achieve an excellent understanding of the learning process both for teams and myself. </p>

      <p>I am now <mark>changing my career</mark> to Web development. I have just finished my Bootcamp with The Bridge Digital Talent Accelerator with <mark>the maximum grade in my personal project</mark> - full stack (MERN).</p>

      <p>I am <mark>passionate about learning</mark>. I am eager to start working as a web developer and use all my skills to build a new career in this field where continual learning is a must.</p>
    </div>
  )
}

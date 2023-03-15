import React from 'react'

export const Stack = () => {
  return (
    <div className='stack'>
      <div className='stackWrapper'>
        <p className='highlight firstItem'>JavaScript</p>
        <div>
          <div className='stackContainer'>
            <p className='highlight'>React</p>
            <p>HTML</p>
            <p>CSS</p>
            <p>SCSS</p>
            <p className='highlight'>Node.js</p>
          </div>
          <div className='stackContainer'>
            <p>Express</p>
            <p>Socket.io</p>
            <p className='highlight'>MySQL</p>
            <p>MariaDB</p>
            <p>Sequelize</p>
            <p className='highlight'>MongoDB</p>
            <p>Mongoose</p>
          </div>
        </div>
      </div>
    </div>

  )
}

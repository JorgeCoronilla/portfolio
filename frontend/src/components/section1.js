import React, { useState } from 'react'
import { Stack } from './stack'
import { Title2 } from './title2'
import { Menu } from './menu'
import { AboutMe } from './aboutMe'
export const Section1 = () => {

    const [display, setDisplay] = useState('stack')
    return (
        <div>
            <div className="section cover" id="cover" >
                <div className="title">
                    <h1> Jorge Coronilla</h1>
                </div>

                <Title2 />

                {display === 'stack' &&
                    <Stack />
                }

                {display === 'aboutMe' &&
                    <AboutMe />
                }

                <Menu setDisplay={setDisplay}/>

            </div>
        </div>
    )
}

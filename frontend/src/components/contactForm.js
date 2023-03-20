import React from 'react'

export const ContactForm = () => {

    const sendMessage = (e) => {
        e.preventDefault();
        const name = e.target.name.value;
        const email = e.target.email.value;
        const message = e.target.message.value;


        console.log(name, email, message)
    }
    return (
        <div className='contactForm'>
            <form onSubmit={sendMessage}>
                <div>
                    <label>
                        Name:
                        <input type="text" name="name" />
                    </label>
                </div>
                <div>

                    <label>
                        Email:
                        <input type="text" name="email" />
                    </label>
                </div>
                <div>
                    <label>
                        Message:
                        <textarea name="message" defaultValue="Hello! your message here" />
                    </label>
                </div>
                <div>
                    <button type="submit" value="Submit">Send!</button>

                </div>
            </form>
        </div>
    )
}

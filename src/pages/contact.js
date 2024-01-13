import React from 'react'
import pizzaleft from "../assets/cake3.jpg"
import "../styles/contact.css"

function contact() {
    return (
        <div className='contact'>
            <div className='leftSide' style={{ backgroundImage: `url(${pizzaleft})` }}></div>
            <div className='rightSide'>
                <h1>Contact Us</h1>
                <form id="contact-form" method="post">
                    <label htmlFor='name'>Full Name</label>
                    <input name="name" placeholder='Enter Full name.....' type="text" />
                    <label htmlFor='email'>Email</label>
                    <input name="email" placeholder='Enter email.....' type="email" />
                    <label htmlFor='message'>Message</label>
                    <textarea row="6" placeholder='Enter message....' name="messsage" required ></textarea>
                    <button type="submit">Send Messsage</button>

                </form>
            </div>


        </div >
    )
}

export default contact

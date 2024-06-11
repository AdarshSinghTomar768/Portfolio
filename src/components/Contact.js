import github from '../assets/github.svg'
import email from '../assets/envelope-solid.svg'
import location from '../assets/location-dot-solid.svg'
import phone from '../assets/phone-volume-solid.svg'
import share from '../assets/share-nodes-solid.svg'
import LinkedIn from '../assets/linkedin.svg'
import './Contact.css'
import Navbar from './Navbar'
function Contact(){
    return(
        <div>
            <Navbar />
            <br/>
            <br/>
            <div className="Contacts">
                <div className="Contact">
                    <div className='locate'>
                        <img src={location} id='location' alt='location'/>
                        <h3 id='h4'>My Address</h3>
                    </div>
                    <div className='li'>
                        <li>Electronic City-Phase1</li>
                        <li>Karnataka</li> 
                        <li>India</li>
                    </div>
                </div>
                <div className="Contact">
                    <div className='Social'>
                        <img src={share} id='social' alt='social' />
                        <h3 id='h4'>Social Profiles</h3>
                    </div>
                    <div id='logo'>
                        <a href='https://github.com/AdarshSinghTomar768'>
                            <img src={github} id='git' alt='github' />
                        </a>
                        <a href='https://linkedin.com/in/adarsh-singh-tomar-27a8a1280'>
                            <img src={LinkedIn} id='Linked' alt='linkedin' />
                        </a>
                    </div>
                </div>
            </div>
            <div className='Contacts1'>
                <div className='Contact'>
                    <div className='email'>
                        <img src={email} id='email' alt='email' />
                        <h3 id='h4'>Email</h3>
                    </div>
                    <div className='lii'>
                        <li id='liii'>adarshsinghtomar7909043383@gmail.com</li>
                    </div>
                </div>
                <div className='Contact'>
                    <div className='contact'>
                        <img src={phone} id='phone' alt='phone' />
                        <h3 id='h4'>Contact</h3>
                    </div>
                    <li id='contact'>+91 95085 57310</li>
                </div>
            </div>
        </div>
    )
}
export default Contact
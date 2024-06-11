import Image from '../assets/me.jpeg';
import './About.css';
import Navbar from './Navbar';

function About() {
    let interestsList = [
        "Data Structures",
        "Machine Learning",
        "Web Development",
        "Artificial Intelligence",
        "Data Science",
        "Software Development",
    ]
    return (
        <div>
            <Navbar />
            <div className='section1'>
                <div className='indefine'>
                    <p className='p'>
                    Passionate about harnessing the power of technology, I specialize in creating intuitive, efficient, and scalable solutions. With a strong foundation in web development, machine learning, and data science, I continuously strive to expand my knowledge and expertise. Whether it's building robust web applications, exploring the intricacies of artificial intelligence, or optimizing software performance, I am dedicated to delivering high-quality results. Let's work together to turn innovative ideas into reality.
                    </p>
                    <div id='a-cont'>
                        <div id='a-left'>
                            <div>
                                Birthday: 19th Sept 2004
                            </div>
                            <div>
                                City: Jamshedpur, Jharkhand
                            </div>

                        </div>
                        <div id='a-right'>
                            <div>
                                Phone No.: 95085 57310
                            </div>
                            <div>
                                Email: adarshsinghtomar7909043383@gmail.com
                            </div>
                        </div>  
                    </div>
                </div>
                <img className='img' src={Image} alt='Adarsh' />
            </div>
            <h2 id='h22'>INTERESTS</h2>
            <div className="container">
                <div className="interests">
                    <div className="interest-grid">
                        {/* <div className="interest-item">
                            <span>Software Development</span>
                        </div> */}
                        {
                            interestsList.map((interest) => {
                                return (
                                    <div className="interest-item" key={interest}>
                                        <span>{interest}</span>
                                    </div>
                                )
                            })
                        }
                    </div>
                </div>
            </div>
        </div>
    )
}
export default About
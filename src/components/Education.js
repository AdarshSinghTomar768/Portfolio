import Scaler from '../assets/Scaler-UG_Logo-Color.png'
import BITS from '../assets/bits-logo.jpg'
import './Education.css'
import Navbar from './Navbar'
function Education(){
    return(
        <div>
            <Navbar />
    <div className="education-container">
        <div className="Section">
            <div className="image-container">
                <img src={Scaler} alt='Scaler Logo'></img>
            </div>
            <div className="details">
                <i>BS+MS in Computer Science</i>
                <h3>July 23 - Present</h3>
                <p>Relevant Coursework</p>
                <ul>
                    <li>Distributed Database Systems</li>
                    <li>Cloud Computing</li>
                    <li>Foundation Of Algorithms</li>
                </ul>
            </div>
        </div>
        
            <div className="Section">
                <div className="image-container">
                    <img src={BITS} alt="BITS" />
                </div>
                <div className="details">
                    <i>B. Sc. Computer Science</i>
                    <h3>July 23 - Present</h3>
                    <p>Relevant Coursework</p>
                    <ul>
                        <li>Database Management Systems</li>
                        <li>Algorithms & Optimization for Big Data</li>
                        <li>Machine Learning</li>
                    </ul>
                </div>
            </div>
         </div>

        {/* <div className="certifications">
            <h2>Online Certification</h2>
            <ul>
                <li>Deep Learning Specialization - Coursera</li>
                <li>Machine Learning - Coursera</li>
                <li>TensorFlow in Practice - Coursera</li>
                <li>Applied Data Science with Python - Coursera</li>
                <li>Data Science Methodology - Coursera</li>
            </ul>
        </div> */}
        </div>
    )
}
export default Education
import Python from '../assets/python.svg';
import Java from '../assets/java.svg';
import Html from '../assets/html.svg';
import Css from '../assets/css.svg';
import MySql from '../assets/mysql.svg';
import PostgreSql from '../assets/postgresql.svg';
import django from '../assets/django.svg';
import nodejs from '../assets/nodejs.svg';
import Flask from '../assets/flask.svg';
import git from '../assets/git.svg';
import heroku from '../assets/heroku.svg';
import AmazonWebServices from '../assets/amazon-web-services.svg';
import Jupyter from '../assets/jupyter.svg';
import './Skills.css';
import Navbar from './Navbar';
import { Swiper, SwiperSlide } from "swiper/react";
import { Autoplay } from "swiper/modules";
import "swiper/css";
import "swiper/css/autoplay";

function Skills() {
    return (
        <div>
            <Navbar />
            <div className="project-slider">
                <Swiper
                    spaceBetween={50}
                    slidesPerView={3}
                    grabCursor={true}
                    className="slider"
                    autoplay={{
                        delay: 0,
                        disableOnInteraction: false,
                    }}
                    loop={true}
                    speed={2000}
                    modules={[Autoplay]}
                >
                    <SwiperSlide>
                        <img src={Python} alt="Python" />
                    </SwiperSlide>
                    <SwiperSlide>
                        <img src={Java} alt="Java" />
                    </SwiperSlide>
                    <SwiperSlide>
                        <img src={Html} alt="HTML" />
                    </SwiperSlide>
                    <SwiperSlide>
                        <img src={Css} alt="CSS" />
                    </SwiperSlide>
                    <SwiperSlide>
                        <img src={MySql} alt="MySQL" />
                    </SwiperSlide>
                    <SwiperSlide>
                        <img src={PostgreSql} alt="PostgreSQL" />
                    </SwiperSlide>
                    <SwiperSlide>
                        <img src={django} alt="Django" />
                    </SwiperSlide>
                    <SwiperSlide>
                        <img src={nodejs} alt="Node.js" />
                    </SwiperSlide>
                    <SwiperSlide>
                        <img src={Flask} alt="Flask" />
                    </SwiperSlide>
                    <SwiperSlide>
                        <img src={git} alt="Git" />
                    </SwiperSlide>
                    <SwiperSlide>
                        <img src={heroku} alt="Heroku" />
                    </SwiperSlide>
                    <SwiperSlide>
                        <img src={AmazonWebServices} alt="Amazon Web Services" />
                    </SwiperSlide>
                    <SwiperSlide>
                        <img src={Jupyter} alt="Jupyter" />
                    </SwiperSlide>
                </Swiper>
            </div>
        </div>
    );
}

export default Skills;

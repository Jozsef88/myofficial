import React from 'react';
import Anchor from 'react-anchor-link-smooth-scroll';
import 'bootstrap/dist/css/bootstrap.min.css';
import './assets/css/fontawesome.css';
import './assets/css/templatemo-style.css';
//import './assets/css/owl.css';
//import './assets/css/lightbox.css';
//importing pictures
import FacePic from './assets/images/author-image.jpg';
import PicLeft from './assets/images/left-image.jpg';
import PicRight from './assets/images/right-image.jpg';

//import components
import Button from './components/Button';
import Email from './components/Email';
import MyWork from './components/MyWorkRButton';
import { workData } from './components/WorkDataArray';
import WorkList from './components/MyWorkList';

//import icons
import { FaFacebookSquare } from "react-icons/fa";
import { TiSocialInstagram } from "react-icons/ti";
import { FaTwitter } from "react-icons/fa";
import { FaSkype } from "react-icons/fa";
import { IoLogoYoutube } from "react-icons/io";
import { FaGooglePlus } from "react-icons/fa";

import { TiVendorMicrosoft } from "react-icons/ti";
import { FaAdobe } from "react-icons/fa";
import { MdTranslate } from "react-icons/md";
import { DiCode } from "react-icons/di";

function Home() {
  return (
    <div>
      <div id="page-wraper">
        {/* Sidebar Menu */}
        <div className="responsive-nav">
          <i className="fa fa-bars" id="menu-toggle"></i>
          <div id="menu" className="menu">
            <i className="fa fa-times" id="menu-close"></i>
            <div className="container">
              <div className="image">
                <Anchor href="#page-wraper"><img src={FacePic} alt="" /></Anchor>
              </div>
              <div className="author-content">
                <h2 className="myname">József Sidó</h2>
                <span>Junior Web Developer</span>
              </div>
              <nav className="main-nav" role="navigation">
                <ul className="main-menu">
                   <li><Anchor href='#aboutme'>About Me</Anchor></li>
                   <li><Anchor href='#goodat'>What I'm good at</Anchor></li>
                   <li><Anchor href='#mywork'>My Work</Anchor></li>
                   <li><Anchor href='#contact'>Contact Me</Anchor></li>
                </ul>
              </nav>
              <div className="social-network">
                <ul className="soial-icons">
                  <li>
                    <a href="https://www.facebook.com/ifj.sido.jozsef"><FaFacebookSquare /></a>
                  </li>
                  <li>
                    <a href="/#"><FaTwitter /></a>
                  </li>
                  <li>
                    <a href="/#"><TiSocialInstagram /></a>
                  </li>
                  <li>
                    <a href="/#"><FaSkype /></a>
                  </li>
                  <li>
                    <a href="/#"><IoLogoYoutube /></a>
                  </li>
                  <li>
                    <a href="/#"><FaGooglePlus /></a>
                  </li>
                </ul>
              </div>
              <div className="copyright-text">
                <p>Designed in 2020</p>
              </div>
            </div>
          </div>
        </div>

        <section className="section about-me" data-section="section1">
          <div className="container">
            <div className="section-heading">
              <h2 id="aboutme">About Me</h2>
              <div className="line-dec"></div>
              <span>
                <p>
                I've got high numeric, analytical and problem-solving skills. Also, I have great experience in pursuing excel and photoshop-related projects which required advanced knowledge. Good written English grammar. I learn fast and am eager to acquire new skills. I like working both individually and as a team player and I can imagine myself as an experienced website developer working at a friendly company along with other team members in helping each other's work.
                </p>
                <p>
                  I've started learning and developing in React in the last couple of months and got familiarised with Bootstrap, Mailchimp and Saas in order to build much more nicer, more responsive and more advanced websites.
                </p>
                </span>
            </div>
            <div className="left-image-post">
              <div className="row">
                <div className="col-md-6">
                  <div className="left-image">
                    <img src={PicLeft} alt="" />
                  </div>
                </div>
                <div className="col-md-6">
                  <div className="right-text">
                    <h4>Hobbies and Interests</h4>
                    <p>
                      Irure et minim amet duis eu nulla ea culpa fugiat eu dolore. Ea dolor exercitation ex incididunt non deserunt pariatur consequat nisi consequat irure eu reprehenderit nulla. Sit cupidatat elit occaecat adipisicing laboris nisi elit qui. Incididunt sunt esse aliquip consequat ex officia pariatur laborum est magna excepteur in. Sit quis cillum ad sit do tempor sunt culpa laborum sint tempor irure.
                    </p>
                    <Button hrefLink="/#" btnName="Read More"/>
                  </div>
                </div>
              </div>
            </div>
            <div className="right-image-post">
              <div className="row">
                <div className="col-md-6">
                  <div className="left-text">
                    <h4>Sport and Social Activities</h4>
                    <p>
                      Laboris ex cillum nostrud dolor ipsum. Culpa cillum quis officia sit ea esse irure ea nostrud officia aliquip. Aute magna veniam velit id officia ut aliqua nisi deserunt exercitation. Officia elit voluptate officia occaecat ea occaecat magna. Nostrud minim est consequat ut fugiat id. Laboris ipsum consectetur dolore adipisicing laborum sit est do veniam laborum dolor anim ut.
                    </p>
                    <Button hrefLink="/#" btnName="Read More"/>
                  </div>
                </div>
                <div className="col-md-6">
                  <div className="right-image">
                    <img src={PicRight} alt="" />
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>

        <section className="section my-services" data-section="section2">
          <div className="container">
            <div className="section-heading">
              <h2 id="goodat">What I’m good at?</h2>
              <div className="line-dec"></div>
              <span
                >Curabitur leo felis, rutrum vitae varius eu, malesuada a tortor.
                Vestibulum congue leo et tellus aliquam, eu viverra nulla semper.
                Nullam eu faucibus diam. Donec eget massa ante.</span
              >
            </div>
            <div className="row">
              <div className="col-md-6">
                <div className="service-item">
                  <div className="big-icons"><TiVendorMicrosoft /></div>
                  <h4>Microsoft Office</h4>
                  <p>
                    Phasellus non convallis dolor. Integer tempor hendrerit arcu
                    at bibendum. Sed ac ante non metus vehicula congue quis eget
                    eros.
                  </p>
                </div>
              </div>
              <div className="col-md-6">
                <div className="service-item">
                <div className="big-icons"><FaAdobe /></div>
                  <h4>Adobe Family</h4>
                  <p>
                    Proin lacus massa, eleifend sed fermentum in, dignissim vel
                    metus. Nunc accumsan leo nec felis porttitor, ultricies
                    faucibus purus mollis.
                  </p>
                </div>
              </div>
              <div className="col-md-6">
                <div className="service-item">
                <div className="big-icons"><MdTranslate /></div>
                  <h4>English-Hungarian Transaltion</h4>
                  <p>
                    Integer suscipit condimentum aliquet. Nam quis risus metus.
                    Nullam faucibus quam eget arcu pretium tincidunt. Nam libero
                    dui.
                  </p>
                </div>
              </div>
              <div className="col-md-6">
                <div className="service-item">
                <div className="big-icons"><DiCode /></div>
                  <h4>Web Development</h4>
                  <p>
                    Vivamus et dui a massa venenatis fringilla. Proin lacus massa,
                    eleifend sed fermentum in, dignissim vel metus. Nunc accumsan
                    leo nec felis porttitor.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </section>

        <section className="section my-work" data-section="section3">
          <div className="container">
            <div className="section-heading">
              <h2 id="mywork">My Work</h2>
              <div className="line-dec"></div>
              <span
                >Aenean sollicitudin ex mauris, lobortis lobortis diam euismod sit
                amet. Duis ac elit vulputate, lobortis arcu quis, vehicula
                mauris.</span
              >
            </div>
            <div className="row">
              <div className="isotope-wrapper">
                <MyWork />
                <div className="isotope-box">
                 <WorkList workData={workData}/>
                </div>
              </div>
            </div>
          </div>
        </section>

        <section className="section contact-me" data-section="section4">
          <div className="container">
            <div className="section-heading">
              <h2 id="contact">Contact Me</h2>
              <div className="line-dec"></div>
              <span
                >Fusce eget nibh nec justo interdum condimentum. Morbi justo ex,
                efficitur at ante ac, tincidunt maximus ligula. Lorem ipsum dolor
                sit amet, consectetur adipiscing elit.</span
              >
            </div>
            <Email />
          </div>
        </section>
      </div>
    </div>
  );
}

export default Home;

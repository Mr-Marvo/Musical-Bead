import React, { useRef, useState } from 'react';
import '../../App.css';
/* Images */
import Logo from '../../assets/images/common/logo.png';
import Singer from '../../assets/images/common/singer.png';
import { AppDownloadICon, LEmail, LFacebook, LTwitter } from "../../assets";
/* Icons */
import { FaBars } from 'react-icons/fa';
import {BiMessageAltDots} from 'react-icons/bi';
import {BsBell} from 'react-icons/bs';
import {RiArrowUpSFill} from 'react-icons/ri';
import {RiArrowDownSFill} from 'react-icons/ri';
import {AiTwotoneSetting} from 'react-icons/ai';
import {AiFillDollarCircle} from 'react-icons/ai';
import {BiSupport} from 'react-icons/bi';
import {TbLogout} from 'react-icons/tb';
import {RiAppleLine} from 'react-icons/ri';
import {FaGooglePlay} from 'react-icons/fa';

/* Components */
import Footer from '../../components/landingpage/Footer';

function New_Musician_Dashboard() {

    const navRef = useRef();

    const showNavbar = () => {
        navRef.current.classList.toggle ("responsive_nav");
    }
   
    const [userTag,setUserTag] = useState('Hi! Oliver');

    const find_user_tag = () => {
        setUserTag('Hi! Oliver')
    }

    const [isCollapsed1, setIsCollapsed1] = useState(true);

    const handleToggleCollapse1 = () => {
        setIsCollapsed1(!isCollapsed1);
    };

    const [isCollapsed2, setIsCollapsed2] = useState(true);

    const handleToggleCollapse2 = () => {
        setIsCollapsed2(!isCollapsed2);
    };

    const [isCollapsed3, setIsCollapsed3] = useState(true);

    const handleToggleCollapse3 = () => {
        setIsCollapsed3(!isCollapsed3);
    };

    return ( 
    <>
        {/* Header Navigation Bar */}
        <header>
            <img src={Logo} alt="Musical Bead" className='logo'/>
            <nav ref={navRef}>
                <a href='/#'>Home</a>
                <a href='/#'className='active'>Dashboard</a>
                <a href='/#'>My Profile</a>
                <a href='/#'>Earnings</a>
            </nav>
            {/* Menu Toggle Button */}
            <button className='nav-btn' onClick={showNavbar}>
                <FaBars style={{fontSize:36}}/>
            </button>
            {/* Right Side Button Container */}
            <div className='btn-container'>
                <BiMessageAltDots style={{fontSize:46,padding:10}}/>
                <BsBell style={{fontSize:46,padding:10}}/>
                <img src={Singer} alt="User Image" className='singer_image' />
                <p className='user_tag'> {userTag} </p>
                <div onClick={handleToggleCollapse3}>
                    <span>{isCollapsed3 ? <RiArrowUpSFill fontSize={28}/> : <RiArrowDownSFill fontSize={28}/>} </span>
                    {isCollapsed3 ? null : 
                    <div className='navbar_toggle'>
                        <ul>
                            <li><AiTwotoneSetting/><a href='/#'>Settings</a></li>
                            <li><AiFillDollarCircle/><a href='/#'>Billings</a></li>
                            <li><BiSupport/><a href='/#'>Support</a></li>
                            <li><TbLogout/><a href='/#'>Log out</a></li>
                        </ul>
                    </div>
                }
                </div>
                
            </div>
          
        </header>

        {/* Body Content */}
        <main>
            <h2 className='greeting'>Welcome ! to the Musical Beads</h2>
            <div className='step_container'>
                <div>
                    <div onClick={handleToggleCollapse1}>
                        <div className='step'>
                            <div className='step_cover'>
                                Step 01
                            </div>
                            <span className='step_healine'>Complete Your Musical Profile</span>
                            <span className='step_toggle'>{isCollapsed1 ? <RiArrowUpSFill fontSize={28}/> : <RiArrowDownSFill fontSize={28}/>}</span>
                        </div>
                    </div>
                    {isCollapsed1 ? null : 
                        <div className='step_content'>
                            <div className='img_container1'>
                                
                            </div>
                            <div className='data_container'>
                                <span>Oliver Ferdison</span>
                                <form>
                                    <input type="text" placeholder='Title'></input>
                                    <textarea>Add Bio ...</textarea>
                                </form>
                            </div>
                        </div>
                    }
                </div>
            </div>
            <div className='step_container'>
                <div>
                    <div onClick={handleToggleCollapse2}>
                    <div className='step'>
                            <div className='step_cover'>
                                Step 01
                            </div>
                            <span className='step_healine'>Complete Your Musical Profile</span>
                            <span className='step_toggle'>{isCollapsed2 ? <RiArrowUpSFill fontSize={28}/> : <RiArrowDownSFill fontSize={28}/>}</span>
                        </div>
                    </div>
                    {isCollapsed2 ? null : 
                        <div className='step_content'>
                             <div className='img_container2'>
                                
                                </div>
                                <div className='data_container data_container2'>
                                    <form>
                                        <label>Album Name</label>
                                        <input type="text" placeholder='Title' className='album_name'></input>
                                        <div>
                                            <div>
                                                <label>Category</label>
                                                <input type="text" placeholder='Category'></input>  
                                            </div>
                                          
                                            <div>
                                                <label>Artist</label>
                                                <input type="text" placeholder='Artist'></input>  
                                            </div>
                                        </div>
                                        <label>Description</label>
                                        <textarea>Description ...</textarea>
                                        <p>Add Songs <span>(0)</span></p>
                                        <div style={{overflowX:'auto'}}>
                                            <div className='song_container'> </div>
                                            <div className='song_container'> </div>
                                            <div className='song_container'> </div>
                                            <div className='song_container'> </div>
                                            
                                        </div>
                                    </form>
                                </div>
                             
                        </div>
                    }
                </div>
            </div>
            <button className='review_submit_btn'>Review Submit</button>

            
        </main>


        {/* Footer Content */}
        <footer className='footer'>
            <div className='footer_container'>
                <div className='footer_content1'>
                    <p>For More Info Contacts:</p>

                    <nav>
                        <pre>MusicalBead@gmail.com</pre>
                    </nav>

                    <div className="flex flex-row mt-8 gap-4">
                        <a href="https://twitter.com" target="_blank" rel="noreferrer"><img src={LTwitter} alt='Twitter' className="w-10" /></a>
                        <a href="https://facebook.com" target="_blank" rel="noreferrer"><img src={LFacebook} alt='Facebook' className="w-10" /></a>
                        <a href="#" target="_blank" rel="noreferrer"><img src={LEmail} alt='Email' className="w-10" /></a>
                    </div>
                </div>
                <div className='footer_content2'>
                    <ul>
                        <li><pre>Site Map</pre></li>
                        <li><pre>Company Info</pre></li>
                        <li><pre>How it's work</pre></li>
                        <li><pre>Privacy Policy</pre></li>
                    </ul>
                </div>

                <div className='footer_content3'>
                    <p>Presented By:</p>
                    
                    <pre>Musical Beads is patented by Bruce Quarto </pre>
                    <pre>from Quarto Valley Record and Chi HuynH </pre>
                    <pre>from Galatea / Momento NFC technology</pre>
                   
                </div>

                <div className='footer_content4'>
                    <p>Musical Bead App:</p>
                    
                    <pre>Available in iTunes & Google Play Store. </pre>
                    <div className='store_wrap'>
                        <div className='store_container'><RiAppleLine/><span>App Store</span></div>
                        <div className='store_container'><FaGooglePlay/><span>Play Store</span></div>
                    </div>
                    
                </div>
            </div>
           
            <div className='copyright_container'>
                <img src={Logo} alt="Musical Bead" className='logo footer_logo'/>
                <span> Copyright &copy; Musical Beads International Ltd. 2023</span>
                <span>EN <span>USA</span></span>
            </div>
        </footer>
    </>
     );
}

export default New_Musician_Dashboard;
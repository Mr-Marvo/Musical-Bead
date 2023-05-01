/* 
    ruvi@Aventure
    ruvi.ijse@hmail.com
*/
import React, { useRef, useState } from 'react';
import '../../App.css';

/* Images */
import Logo from '../../assets/images/common/logo.png';
import Singer from '../../assets/images/common/singer.png';
import {LFacebook, LTwitter } from "../../assets";
import instagram from "../../assets/images/common/instagram.png";
import tiktok from "../../assets/images/common/tiktok.png";

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

function Musician_Dashboard() {
    
    const navRef = useRef();

    const showNavbar = () => {
        navRef.current.classList.toggle ("responsive_nav");
    }

    /* const find_user_tag = () => {
        setUserTag('Hi! Oliver')
    } */
   
    const [userTag,setUserTag] = useState('Hi! Oliver');
    const [fullnameTag,setFullnameTag] = useState('Oliver Fernadoz');

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
                <div className='musician_dashboard_container'>
                    <div className='musician_dashboard_sub_container1'>
                        <div className='sub_container1_left'>
                            <pre className='headline'>Publish New Musical Bead Album +</pre>
                            <div>
                                <div className='img_container2'>
                                </div>
                                <div className='data_cotainer'>
                                <form>
                                        <label>Album Name</label>
                                        <input type="text" placeholder='Album Name' className='album_name'></input>
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
                                    <div style={{display:'flex',justifyContent:'center'}}>
                                        <button className='submit_btn'> Submit </button>
                                    </div>
                                </div>
                            </div>
                            <div></div>
                            
                        </div>
                        <div  className='sub_container1_right'>
                            <pre className='headline'>Pending Albums</pre>
                            <div style={{display:'flex',flexDirection:'column'}}>
                                <div style={{display:'grid',gridTemplateColumns: 'auto auto auto',justifyContent:'center',alignItems:'center',gap:5,marginBottom:20}}>
                                    <div className='special_container'> </div>
                                    <div className='special_container'> </div>
                                    <div className='special_container'> </div>           
                                </div>
                                <div style={{display:'grid',gridTemplateColumns: 'auto auto auto',justifyContent:'center',alignItems:'center',gap:5,marginTop:20,marginBottom:20}}>
                                    <div className='special_container'> </div>
                                    <div className='special_container'> </div>
                                    <div className='special_container'> </div>           
                                </div>
                            </div>
                            <div style={{display:'flex',justifyContent:'center'}}>
                                <button className='submit_btn'> Visit Profile </button>
                            </div>
                            
                           
                        </div>
                    </div>

                    <div className='musician_dashboard_sub_container2'>
                        <div>
                            <img src={Singer} alt="User Image" className='singer_image' />
                            <pre className='user_tag'> {fullnameTag} </pre>
                        </div>
                        <div>
                            <pre>Profile Completeness:</pre>
                            <div>
                                <div></div>
                            </div>
                        </div>
                        <div style={{display:'flex',justifyContent:'center'}}>
                            <button className='submit_btn'> Update Your Profile </button>
                        </div>
                    </div>

                    <div className='musician_dashboard_sub_container3'>
                        <div style={{display:'flex',flexDirection:'row',justifyContent:'center'}}>
                            <pre className='headline'>My Orders</pre>
                        </div>
                        <div>
                            <pre className='headline_left'>To Ship</pre>
                            <div style={{display:'flex',flexDirection:'column'}}>
                                <div style={{display:'grid',gridTemplateColumns: 'auto auto auto auto',justifyContent:'center',alignItems:'center',gap:5,marginBottom:20}}>
                                    <div className='special_container2'> </div>
                                    <div className='special_container2'> </div>
                                    <div className='special_container2'> </div>     
                                    <div className='special_container2'> </div>       
                                </div>
                                <div style={{display:'grid',gridTemplateColumns: 'auto auto auto auto',justifyContent:'center',alignItems:'center',gap:5,marginTop:20,marginBottom:20}}>
                                    <div className='special_container2'> </div>
                                    <div className='special_container2'> </div>
                                    <div className='special_container2'> </div>   
                                    <div className='special_container2'> </div>        
                                </div>
                            </div>
                        </div>
                        <div>
                            <pre className='headline_left'>Shipped Orders</pre>
                            <div style={{display:'flex',flexDirection:'column'}}>
                                <div style={{display:'grid',gridTemplateColumns: 'auto auto auto auto',justifyContent:'center',alignItems:'center',gap:5,marginBottom:20}}>
                                    <div className='special_container2'> </div>
                                    <div className='special_container2'> </div>
                                    <div className='special_container2'> </div>     
                                    <div className='special_container2'> </div>       
                                </div>
                                <div style={{display:'grid',gridTemplateColumns: 'auto auto auto auto',justifyContent:'center',alignItems:'center',gap:5,marginTop:20,marginBottom:20}}>
                                    <div className='special_container2'> </div>
                                    <div className='special_container2'> </div>
                                    <div className='special_container2'> </div>   
                                    <div className='special_container2'> </div>        
                                </div>
                            </div>
                        </div>
                        <div>
                            <pre className='headline'>Full Order History</pre>
                        </div>
                    </div>
                </div>
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
                            <a href="https://facebook.com" target="_blank" rel="noreferrer"><img src={LFacebook} alt='Facebook' className="w-10" style={{background:'#2AAEC0',borderRadius:17}}/></a>
                            <a href="https://instagram.com" target="_blank" rel="noreferrer"><img src={instagram} alt='Instergram' className="w-10" style={{background:'#2AAEC0',borderRadius:17}}/></a>
                            <a href="https://twitter.com" target="_blank" rel="noreferrer"><img src={LTwitter} alt='Twitter' className="w-10" style={{background:'#2AAEC0',borderRadius:17}}/></a>
                            <a href="https://tiktok.com" target="_blank" rel="noreferrer"><img src={tiktok} alt='Tiktok' className="w-10" style={{background:'#2AAEC0',borderRadius:17}} /></a>
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

export default Musician_Dashboard;
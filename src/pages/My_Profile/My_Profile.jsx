/* 
    ruvi@Aventure
    ruvi.ijse@hmail.com
*/
import React, { useRef, useState } from 'react';
import '../../App.css';

/* Images */
import Logo from '../../assets/images/common/logo.png';
import Singer from '../../assets/images/common/singer.png';
import Facebook from '../../assets/images/system/facebook.png';
import Instergram from '../../assets/images/system/instagram.png';
import Twitter from '../../assets/images/system/twitter.png';
import Tiktok from '../../assets/images/system/tiktok.png';


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

/* Slider */
import { Slide } from 'react-slideshow-image';
import 'react-slideshow-image/dist/styles.css';
/* Player */
import ReactPlayer from 'react-player/lazy';
import Album from '../Common/Album2';
 
  const slideImages = [
    {
      url: 'https://images.unsplash.com/photo-1509721434272-b79147e0e708?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=1500&q=80',
      caption: 'Slide 1'
    },
    {
      url: 'https://images.unsplash.com/photo-1506710507565-203b9f24669b?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=1536&q=80',
      caption: 'Slide 2'
    },
    {
      url: 'https://images.unsplash.com/photo-1536987333706-fc9adfb10d91?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=1500&q=80',
      caption: 'Slide 3'
    },
  ];
  
  
  

function My_Profile() {

   
    const [title,setTitle] = useState('Singer & Song Writer');
    const [bio,setBio] = useState('Lorem ipsum, dolor sit amet consectetur adipisicing elit. Tempora atque nihil, dignissimos facilis laboriosam cum placeat ipsum eveniet quo iure, cupiditate accusantium, iusto quisquam aliquid aut amet quos magni adipisci!');

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

    const [isDisabled, setIsDisabled] = useState(true);

    const handleClick = () => {
      setIsDisabled(!isDisabled)
    };
  

    return ( 
        <>
            {/* Header Navigation Bar */}
            <header className='font-nunito'>
                <img src={Logo} alt="Musical Bead" className='logo'/>
                <nav ref={navRef}>
                    <a href='/'>Home</a>
                    <a href='/Musician_Dashboard'>Dashboard</a>
                    <a href='/My_Profile' className='active'>My Profile</a>
                    <a href='/Earnings'>Earnings</a>
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
            <main className='font-nunito'>
                <div className='my_profile_container'>
                    <div className='my_profile_sub_container1'>
                       <div className="sub_1">
                            <div className='img_container1'>
                              <img src={Singer} alt="User Image" />
                            </div>
                       </div>
                       <div className="sub_2">
                            <input type="text" disabled={true} value={fullnameTag}  />
                            <input type="text" disabled={isDisabled} value={title} onChange={(e) => setTitle(e.target.value)} />
                            <br/>
                            <textarea type="text" disabled={isDisabled} value={bio} onChange={(e) => setBio(e.target.value)}  />
                            <div className="flex flex-row mt-8 gap-4">
                                <a href="https://facebook.com" target="_blank" rel="noreferrer"><img src={Facebook} alt='Facebook' className="w-10" style={{background:'white',borderRadius:'25px'}}/></a>
                                <a href="https://instagram.com" target="_blank" rel="noreferrer"><img src={Instergram} alt='Instergram' className="w-10" style={{background:'white',borderRadius:'25px'}}/></a>
                                <a href="https://twitter.com" target="_blank" rel="noreferrer"><img src={Twitter} alt='Twitter' className="w-10" style={{background:'white',borderRadius:'25px'}}/></a>
                                <a href="https://tiktok.com" target="_blank" rel="noreferrer"><img src={Tiktok} alt='Tiktok' className="w-10" style={{background:'white',borderRadius:'25px'}} /></a>
                            </div>
                       </div>
                       <div className="sub_3">
                            <ReactPlayer url='https://www.youtube.com/watch?v=sxl7xvWkR1M' width="360px" height="240px" controls={true} volume={1} muted={false} playing={true}/>
                       </div>
                    </div>

                    <div className='my_profile_sub_container2' style={{width:'90%',height:'260px',overflowY:'hidden'}}>
                        <div className="slide-container" style={{width:'90%',height:'260px'}}>
                            <Slide>
                                {slideImages.map((slideImage, index)=> (
                                    <div key={index} >
                                        <div style={{display:'flex',flexDirection:'row',justifyContent:'center',alignItems:'center',height:'260px'}}>
                                            <Album/>   
                                            <Album/>   
                                            <Album/>   
                                            <Album/>   
                                            <Album/>   
                                            <Album/>   
                                            <Album/>   
                                            <Album/>   
                                            <Album/>   
                                            <Album/>   
                                        </div>
                                    </div>
                                ))} 
                            </Slide>
                        </div>
                            
                    </div>

                    <div className='my_profile_sub_container3'>
                        { isDisabled ? 
                            <button type="button" onClick={handleClick} className='edit_profile_btn'>
                                Edit Profile
                            </button>
                        :
                            <button type="button" onClick={handleClick} className='save_profile_btn'>
                               Save Profile
                            </button>

                        }
                    </div>

                    <div className='my_profile_sub_container4' style={{borderBottomLeftRadius:'0px',borderBottomRightRadius:'0px',borderTopLeftRadius:'25px',borderTopRightRadius:'25px'}}>
                        <pre className='headline_left'>Oliver's Albums</pre>
                    </div>
                    <div className='album_wrap_container' style={{borderBottomLeftRadius:'25px',borderBottomRightRadius:'25px'}}>
                            <div className='album_sub_wrap3'>
                                <Album/>
                                <Album/>
                                <Album/>
                                <Album/>
                                <Album/>
                                <Album/>
                                <Album/>
                                <Album/>
                                <Album/>
                                <Album/>
                                <Album/>
                                <Album/>
                                <Album/>
                                <Album/>
                                <Album/>
                                <Album/>
                                <Album/>
                                <Album/>
                            </div>
                        </div>
                </div>
            </main>

            {/* Footer Content */}
            <footer className='footer font-nunito'>
            <div className='footer_container'>
                <div className='footer_content1'>
                    <p>For More Info Contacts:</p>

                    <nav>
                        <pre className='font-nunito'>MusicalBead@gmail.com</pre>
                    </nav>

                    <div className="flex flex-row mt-8 gap-4">
                    <a href="https://facebook.com" target="_blank" rel="noreferrer"><img src={Facebook} alt='Facebook' className="w-10" style={{background:'white',borderRadius:'25px'}}/></a>
                            <a href="https://instagram.com" target="_blank" rel="noreferrer"><img src={Instergram} alt='Instergram' className="w-10" style={{background:'white',borderRadius:'25px'}}/></a>
                            <a href="https://twitter.com" target="_blank" rel="noreferrer"><img src={Twitter} alt='Twitter' className="w-10" style={{background:'white',borderRadius:'25px'}}/></a>
                            <a href="https://tiktok.com" target="_blank" rel="noreferrer"><img src={Tiktok} alt='Tiktok' className="w-10" style={{background:'white',borderRadius:'25px'}} /></a>
                    </div>
                </div>
                <div className='footer_content2'>
                    <ul>
                        <li><pre  className='font-nunito'>Site Map</pre></li>
                        <li><pre  className='font-nunito'>Company Info</pre></li>
                        <li><pre  className='font-nunito'>How it's work</pre></li>
                        <li><pre  className='font-nunito'>Privacy Policy</pre></li>
                    </ul>
                </div>

                <div className='footer_content3'>
                    <p>Presented By:</p>
                    
                    <pre  className='font-nunito'>Musical Beads is patented by Bruce Quarto </pre>
                    <pre  className='font-nunito'>from Quarto Valley Record and Chi HuynH </pre>
                    <pre  className='font-nunito'>from Galatea / Momento NFC technology</pre>
                   
                </div>

                <div className='footer_content4'>
                    <p>Musical Bead App:</p>
                    
                    <pre  className='font-nunito'>Available in iTunes & Google Play Store. </pre>
                    <div className='store_wrap'>
                        <div className='store_container font-nunito'><RiAppleLine/><span>App Store</span></div>
                        <div className='store_container font-nunito'><FaGooglePlay/><span>Play Store</span></div>
                    </div>
                    
                </div>
            </div>
           
            <div className='copyright_container font-nunito'>
                <img src={Logo} alt="Musical Bead" className='logo footer_logo'/>
                <span > Copyright &copy; Musical Beads International Ltd. 2023</span>
                <span>EN <span>USA</span></span>
            </div>
            </footer>
        </>
     );
}

export default My_Profile;
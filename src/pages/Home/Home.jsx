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

import Image_Slide1 from '../../assets/images/system/Rectangle 86.png';
import Image_Slide2 from '../../assets/images/system/Rectangle 87.png';
import Image_Slide3 from '../../assets/images/system/Rectangle 88.png';
import Image_Slide4 from '../../assets/images/system/Rectangle 89.png';
import Image_Slide5 from '../../assets/images/system/Rectangle 90.png';
import Image_Slide6 from '../../assets/images/system/Rectangle 91.png';
import Image_Slide7 from '../../assets/images/system/Rectangle 98.png';
import Image_Slide8 from '../../assets/images/system/Rectangle 99.png';


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

import Album from '../Common/Album';
import Album2 from '../Common/Album2';

/* Slider */
import { Slide } from 'react-slideshow-image';
import 'react-slideshow-image/dist/styles.css';

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

function Home() {
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
            <header className='font-nunito'> 
                <img src={Logo} alt="Musical Bead" className='logo'/>
                <nav ref={navRef}>
                        <a href='/Home' style={{fontSize:'24px'}} className='active font-nunito'>Home</a>
                        <a href='/Musician_Dashboard'className=' font-nunito'  style={{fontSize:'24px'}}>Dashboard</a>
                        <a href='/My_Profile'  style={{fontSize:'24px'}} className='font-nunito'>My Profile</a>
                        <a href='/Earnings'  style={{fontSize:'24px'}} className='font-nunito'>Earnings</a>
                </nav>
                {/* Menu Toggle Button */}
                <button className='nav-btn' onClick={showNavbar}>
                    <FaBars style={{fontSize:36}}/>
                </button>
                {/* Right Side Button Container */}
                <div className='btn-container'>
                    <BiMessageAltDots style={{fontSize:46,padding:10,alignSelf:'center',justifySelf:'center'}}/>
                    <BsBell style={{fontSize:46,padding:10,alignSelf:'center',justifySelf:'center'}}/>
                    <img src={Singer} alt="User Image" className='singer_image' onClick={handleToggleCollapse3}/>
                    <p className='user_tag' onClick={handleToggleCollapse3}> {userTag} </p>
                    <div onClick={handleToggleCollapse3}>
                        <span>{isCollapsed3 ? <RiArrowUpSFill fontSize={48} style={{marginTop:'8px'}}/> : <RiArrowDownSFill fontSize={48}/>} </span>
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

            {/* Main Content */}
            <main>
                <div className='headline_wrap_container' style={{marginTop:'2rem',borderTopLeftRadius:'50px',borderTopRightRadius:'50px'}}>
                    <div style={{display:'flex',justifyContent:'center',alignItems:'center'}}>
                        <aside className='headline'>Trending Albums</aside>
                    </div>
                </div>
                <div className='album_wrap_container'>
                    <div className='album_sub_wrap3'>
                        <Album2/>
                        <Album2/>
                        <Album2/>
                        <Album2/>
                        <Album2/>
                        <Album2/>
                        <Album2/>
                        <Album2/>
                        <Album2/>
                        <Album2/>
                        <Album2/>
                        <Album2/>
                    </div>
                 </div>
                 <div className='headline_wrap_container'>
                    <div style={{display:'flex',justifyContent:'center',alignItems:'center'}}>
                        <aside className='headline'>New Albums</aside>
                    </div>
                </div>
                 <div className='album_wrap_container' style={{marginBottom:'2rem',borderBottomLeftRadius:'50px',borderBottomRightRadius:'50px'}}>
                    <div className='album_sub_wrap3'>
                        <Album2/>
                        <Album2/>
                        <Album2/>
                        <Album2/>
                        <Album2/>
                        <Album2/>
                        <Album2/>
                        <Album2/>
                        <Album2/>
                        <Album2/>
                        <Album2/>
                        <Album2/>
                    </div>
                 </div>

                 <div className='my_profile_sub_container2' style={{width:'100%',height:'200px',overflowY:'hidden'}}>
                        <div className="slide-container" style={{width:'90%',height:'200px'}}>
                            <Slide>
                                {slideImages.map((slideImage, index)=> (
                                    <div key={index} >
                                        <div style={{display:'flex',flexDirection:'row',justifyContent:'center',alignItems:'center',height:'200px'}}>
                                            <img src={Image_Slide1} alt='Facebook' className="w-25" style={{margin:'5px'}}/>  
                                            <img src={Image_Slide2} alt='Facebook' className="w-25" style={{margin:'5px'}}/>  
                                            <img src={Image_Slide3} alt='Facebook' className="w-25" style={{margin:'5px'}}/>  
                                            <img src={Image_Slide4} alt='Facebook' className="w-25" style={{margin:'5px'}}/>  
                                            <img src={Image_Slide5} alt='Facebook' className="w-25" style={{margin:'5px'}}/>  
                                            <img src={Image_Slide6} alt='Facebook' className="w-25" style={{margin:'5px'}}/>  
                                            <img src={Image_Slide7} alt='Facebook' className="w-25" style={{margin:'5px'}}/>  
                                            <img src={Image_Slide8} alt='Facebook' className="w-25" style={{margin:'5px'}}/>  
                                        </div>
                                    </div>
                                ))} 
                            </Slide>
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

export default Home;
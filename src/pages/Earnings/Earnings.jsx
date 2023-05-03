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

function Earnings() {
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

    const monthNames = ["January", "February", "March", "April", "May", "June", "July", "August", "September", "October", "November", "December"];
    let monthIndex = (new Date().getMonth());
    let monthName = monthNames[monthIndex];
    let year = (new Date().getFullYear());
    let day = monthName+", "+year;

    return ( 
        <>
             {/* Header Navigation Bar */}
             <header className='font-nunito'>
                <img src={Logo} alt="Musical Bead" className='logo'/>
                <nav ref={navRef}>
                    <a href='/'>Home</a>
                    <a href='/Musician_Dashboard'>Dashboard</a>
                    <a href='/My_Profile'>My Profile</a>
                    <a href='/Earnings' className='active'>Earnings</a>
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
                <div className="earning_container1">
                    <div className="earning_container1_sub1">
                        <pre>{day}</pre>
                    </div>
                    <div className="earning_container1_sub2">
                        <div className="sub2_sub1">
                                <div>
                                    <h1>$2300.00</h1>
                                    <span>Total Earnings</span>
                                </div>
                                <div>
                                    <h1>$500.00</h1>
                                    <span>Total Fees</span>
                                </div>
                                <div>
                                    <h1>$000.00</h1>
                                    <span>Total Purchases</span>
                                </div>
                                <div>
                                    <h1>110</h1>
                                    <span>Total Sales</span>
                                </div>
                                <div>
                                    <h1>30</h1>
                                    <span>Total Ships</span>
                                </div>
                                <div>
                                    <h1>80</h1>
                                    <span>Shipped</span>
                                </div>
                            
                        </div>
                        <div className="sub2_sub2">
                                <h1>$1800.00</h1>
                                <span>Available Funds</span>
                                <button type="button"  className='withdraw_btn'>
                                    Withdraw
                                </button>
                            
                        </div>
                    </div>
                </div>
                <div className="earning_container2">
                    <div>
                        <pre className='headline_left'>Order History</pre>
                        <pre>Last 3 Months</pre>
                    </div>
                    <div className='tbl_container' style={{overflowX: 'auto'}}>
                        <table>
                            <thead>
                                <tr>
                                    <th></th>
                                    <th>Order Number</th>
                                    <th>Date</th>
                                    <th>Order Status</th>
                                    <th>Tracing Number</th>
                                    <th>Order Details</th>
                                </tr>  
                            </thead>
                            <tbody>
                                <tr>
                                    <td><img src={Singer} alt="User Image" className='singer_image' /></td>
                                    <td>O-000-001</td>
                                    <td>2023-03-22</td>
                                    <td><button type="button"  className='view_btn' style={{backgroundColor:'#059f3b'}}>To Ship</button></td>
                                    <td>-</td>
                                    <td><button type="button"  className='view_btn'>View</button></td>
                                </tr>
                                <tr>
                                    <td><img src={Singer} alt="User Image" className='singer_image' /></td>
                                    <td>O-000-001</td>
                                    <td>2023-03-22</td>
                                    <td><button type="button"  className='view_btn' style={{backgroundColor:'#059f3b'}}>To Ship</button></td>
                                    <td>-</td>
                                    <td><button type="button"  className='view_btn'>View</button></td>
                                </tr>
                                <tr>
                                    <td><img src={Singer} alt="User Image" className='singer_image' /></td>
                                    <td>O-000-001</td>
                                    <td>2023-03-22</td>
                                    <td><button type="button"  className='view_btn' style={{backgroundColor:'#c5d513'}}>Shipped</button></td>
                                    <td>TR00-001-002</td>
                                    <td><button type="button"  className='view_btn'>View</button></td>
                                </tr>
                                <tr>
                                    <td><img src={Singer} alt="User Image" className='singer_image' /></td>
                                    <td>O-000-001</td>
                                    <td>2023-03-22</td>
                                    <td><button type="button"  className='view_btn' style={{backgroundColor:'gray'}}>Completed</button></td>
                                    <td>TR00-001-002</td>
                                    <td><button type="button"  className='view_btn'>View</button></td>
                                </tr>
                                <tr>
                                    <td><img src={Singer} alt="User Image" className='singer_image' /></td>
                                    <td>O-000-001</td>
                                    <td>2023-03-22</td>
                                    <td><button type="button"  className='view_btn' style={{backgroundColor:'#c5d513'}}>Shipped</button></td>
                                    <td>TR00-001-002</td>
                                    <td><button type="button"  className='view_btn'>View</button></td>
                                </tr>
                            </tbody>
                        </table>
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

export default Earnings;
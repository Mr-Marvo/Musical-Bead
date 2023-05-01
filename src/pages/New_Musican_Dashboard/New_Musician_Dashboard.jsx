import React, { useRef, useState } from 'react';
import '../../App.css';
/* Images */
import Logo from '../../assets/images/common/logo.png';
import Singer from '../../assets/images/common/singer.png';
/* Icons */
import { FaBars } from 'react-icons/fa';
import {BiMessageAltDots} from 'react-icons/bi';
import {BsBell} from 'react-icons/bs';
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
                            <span className='step_toggle'>{isCollapsed1 ? '^' : '-'}</span>
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
                            <span className='step_toggle'>{isCollapsed2 ? '^' : '-'}</span>
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
        <Footer/>
    </>
     );
}

export default New_Musician_Dashboard;
import React,{useState} from 'react';
import './AlbumView.css';
import { NewHeader,NewFooter } from '../../../components/system';
import { DefaultAlbum, Equalizer, PlayButton, TagTop } from "../../../assets";

import img1 from '../../../assets/images/system/Rectangle 139.png';
import img2 from '../../../assets/images/system/Rectangle 140.png';
import img3 from '../../../assets/images/system/Rectangle 141.png';
import img4 from '../../../assets/images/system/Rectangle 142.png';
import img5 from '../../../assets/images/system/Rectangle 143.png';
import img6 from '../../../assets/images/system/Rectangle 144.png';
import btn_img from '../../../assets/images/system/Group 72.png';
import SingerImage from '../../../assets/images/system/profile.png';

import {BsArrowDownCircle} from 'react-icons/bs';
import {BsArrowUpCircle} from 'react-icons/bs';


function AlbumView() {
    const [fullnameTag, setFullnameTag] = useState("Olivia Fernandez");

    const [num,setNum] = useState(0);
    const handlePlus = () => {
       
        if (num+1<11){
            setNum(num+1);
        }else {
            setNum(10);
        }
    }
    const handleMinus = () => {
        if (num-1<0){
            setNum(0);
        }else {
            setNum(num-1);
        }
    }


    const [isCollapsed, setIsCollapsed] = useState(false);

    const handleToggleCollapse = () => {
      setIsCollapsed(!isCollapsed);
    };

    const [isCollapsed2, setIsCollapsed2] = useState(false);

    const handleToggleCollapse2 = () => {
      setIsCollapsed2(!isCollapsed2);
    };


    return ( 
        <>
            <NewHeader/>
            <main>
                <div className="album_view_main_container">
                    <div className="album_view_left_container">
                        <button className='hippop_btn font-nunito'>
                            Hip hop
                        </button>
                        <div className="album_view_container">
                            <div className="flex flex-row gap-3 justify-center items-center my-2">
                                    <div className="flex flex-col bg-[#000000 41%] w-fit h-fit rounded-xl p-4 relative">
                                        <div className="flex">
                                        <img src={DefaultAlbum} alt="default album" className="w-[350px]" />
                                        <div className="absolute right-4 bottom-4 z-10">
                                            <div className="flex flex-col">
                                            <img
                                                src={TagTop}
                                                className="3xl:w-[200px] w-[120px]"
                                                alt="Bead"
                                            />
                                            <div className="flex bg-tag-bottom bg-cover bg-center w-[120px] h-[112px] 3xl:w-[200px] 3xl:h-[190px] justify-center items-center">
                                                <img
                                                src={DefaultAlbum}
                                                className="flex 3xl:w-[135px] w-[80px] rounded-full mb-2 mr-[2px] 3xl:mb-4 3xl:mr-1"
                                                alt="Bead"
                                                />
                                            </div>
                                            </div>
                                        </div>
                                        </div>
                                        <div className="flex text-[12px] font-normal text-[#BA55C2] mt-1">
                                        lorem episum
                                        </div>
                                        <div className="flex flex-row gap-4 mt-2">
                                        <div className="flex">
                                            <img src={Equalizer} alt="equalizer" className="w-10" />
                                        </div>
                                        <div className="flex">
                                            <img src={PlayButton} alt="playbutton" className="w-10" />
                                        </div>
                                        </div>
                                    </div>
                            </div>

                            <span className='songs_list font-nunito'>Songs List</span>

                            <div className='songs_container'>
                                <div className='songs_wrap'>
                                    <img src={img1} alt="song_icon" width="60px"/>
                                    <span>Lorem ipsum dagdahahhkjhdkad.com</span>
                                </div>
                                <div className='songs_wrap'>
                                    <img src={img2} alt="song_icon" width="60px"/>
                                    <span>Lorem ipsum dagdahahhkjhdkad.com</span>
                                </div>
                                <div className='songs_wrap'>
                                    <img src={img3} alt="song_icon" width="60px"/>
                                    <span>Lorem ipsum dagdahahhkjhdkad.com</span>
                                </div>
                                <div className='songs_wrap'>
                                    <img src={img4} alt="song_icon" width="60px"/>
                                    <span>Lorem ipsum dagdahahhkjhdkad.com</span>
                                </div>
                                <div className='songs_wrap'>
                                    <img src={img5} alt="song_icon" width="60px"/>
                                    <span>Lorem ipsum dagdahahhkjhdkad.com</span>
                                </div>
                                <div className='songs_wrap'>
                                    <img src={img6} alt="song_icon" width="60px"/>
                                    <span>Lorem ipsum dagdahahhkjhdkad.com</span>
                                </div>
                            </div>
                           
                        </div>
                    </div>
                    <div className="album_view_middle_container">
                        <span className='album_heading font-nunito'>Album</span>
                        <p className='album_sub_heading font-nunito'>Lorem ipsum dolor sit amet .ft dolor sit amet</p>
                        <p >Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.Ut enim ad minim veniam</p>
                        <span className='album_heading font-nunito'>Choose Bead Color</span>
                        <div className='color_container'>
                            <label class="container">
                                <input type="radio" checked="checked" name="radio" />
                                <span class="checkmark" style={{backgroundColor:'red'}}></span>
                            </label>
                            <label class="container">
                                <input type="radio" name="radio" />
                                <span class="checkmark" style={{backgroundColor:'blue'}}></span>
                            </label>
                            <label class="container">
                                <input type="radio" name="radio" />
                                <span class="checkmark" style={{backgroundColor:'green'}}></span>
                            </label>
                            <label class="container">
                                <input type="radio" name="radio" />
                                <span class="checkmark" style={{backgroundColor:'yellow'}}></span>
                            </label>
                            
                        </div>
                        <div class="wrapper">
                            <button class="plusminus" onClick={handleMinus} style={{borderTopLeftRadius:'25px',borderBottomLeftRadius:'25px'}}>-</button>
                            <input type="number" class="num" value={num}/>
                            <button class="plusminus" onClick={handlePlus} style={{borderTopRightRadius:'25px',borderBottomRightRadius:'25px'}}>+</button>
                        </div>
                        
                        <span className='font-nunito' style={{color:'#fff',fontWeight:'400',margin:'0',marginTop:'30px',fontSize:'24px'}}>Shipping:</span>
                        <span className='font-nunito' style={{color:'#fff',fontWeight:'400',margin:'0',marginBottom:'30px',fontSize:'24px'}}>Free Standard Shipping</span>
                        <span className='font-nunito' style={{color:'#fff',fontWeight:'700',margin:'0',marginBottom:'30px',fontSize:'36px'}}>US $41.15</span>

                        <button className='add_cart_btn'>
                            <img src={btn_img} alt="btn-img" width="200px"/>
                        </button>
                        <div style={{display:'flex',flexDirection:'row',alignItems:'center',marginTop:'25px',paddingBottom:'25px',borderBottom:'2px solid #353535'}}>
                            {isCollapsed ? (
                                <BsArrowUpCircle fontSize={20} color="#ffff" onClick={handleToggleCollapse}/>
                            ) : (
                                <BsArrowDownCircle fontSize={20} color="#ffff" onClick={handleToggleCollapse}/>
                            )}
                            <span className='font-nunito' style={{color:'#fff',fontWeight:'700',fontSize:'20px',marginLeft:'10px'}}>Product Description</span>
                        </div>
                       
                        {isCollapsed ? (
                            <>
                                <div >
                                    Lorem ipsum dolor sit amet consectetur adipisicing elit. At velit mollitia harum libero aliquid eligendi architecto iste aliquam, aspernatur totam dolores, quisquam debitis suscipit iusto nostrum quaerat est, error delectus.
                                </div>
                            </>
                        ): null}
                        <div style={{display:'flex',flexDirection:'row',alignItems:'center',marginTop:'25px',paddingBottom:'25px',borderBottom:'2px solid #353535'}}>
                            {isCollapsed2 ? (
                                <BsArrowUpCircle fontSize={20} color="#ffff" onClick={handleToggleCollapse2}/>
                            ) : (
                                <BsArrowDownCircle fontSize={20} color="#ffff" onClick={handleToggleCollapse2}/>
                            )}
                            <span className='font-nunito' style={{color:'#fff',fontWeight:'700',fontSize:'20px',marginLeft:'10px'}}>Product Specification</span>
                        </div>
                        {isCollapsed2 ? (
                            <>
                                 <div >
                                   Lorem ipsum dolor sit amet, consectetur adipisicing elit. Natus voluptas quasi, dolorem totam quam incidunt, maxime reprehenderit vel atque deleniti dicta. Dolor excepturi recusandae exercitationem culpa incidunt obcaecati similique rem.
                                </div> 
                            </>
                        ): null}
                    </div>
                    <div className="album_view_right_container">
                        <div className="meet_musician_container">
                            <span style={{color:'white',fontWeight:'600',fontSize:'24px',textAlign:'center'}}>Meet the Muscian</span>
                            <div className="img_container3">
                                <div>
                                    <img src={SingerImage} alt="Singer" />
                                </div>
                            </div>
                            <div className="text-[24px] font-bold ml-1 text-white mt-5">{fullnameTag}</div>

                            <button className='meet_singer_btn font-nunito'>
                                See All Albums
                            </button>
                            <button className='meet_singer_btn font-nunito'>
                               Visit Profile
                            </button>
                        </div>
                    </div>
                </div>
            </main>
            <NewFooter/>
        </>
     )
}

export default AlbumView;
import React,{useState} from 'react';
import '../AlbumView/AlbumView.css';
import './AlbumEdit.css';
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

import Album3 from '../Album3';

import {BsArrowDownCircle} from 'react-icons/bs';
import {BsArrowUpCircle} from 'react-icons/bs';


function AlbumEdit() {
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

    const [isShow1,setIsShow1] = useState(true);
    const handleShow1 = () => {
        setIsShow1(!isShow1)
    }

    const [isShow2,setIsShow2] = useState(true);
    const handleShow2 = () => {
        setIsShow2(!isShow2)
    }

    const [isShow3,setIsShow3] = useState(true);
    const handleShow3 = () => {
        setIsShow3(!isShow3)
    }

    const [isShow4,setIsShow4] = useState(true);
    const handleShow4 = () => {
        setIsShow4(!isShow4)
    }

    const handleAll = () => {
        setIsShow1(!isShow1)
        setIsShow2(!isShow2)
        setIsShow3(!isShow3)
        setIsShow4(!isShow4)
    }

    return ( 
        <>
            <NewHeader/>
            <main>
                <div className="album_view_top_container">
                    <div className="album_view_first_container">
                        <button className='hippop_btn font-nunito'>
                            Hip hop
                        </button>
                        <div className="album_display_container">
                            <div className="flex flex-row gap-3 justify-center items-center my-2">
                                    <div className="flex flex-col bg-[#000000 41%] w-fit h-fit rounded-xl p-4 relative">
                                        <div className="flex">
                                        <img src={DefaultAlbum} alt="default album" className="w-[320px]" />
                                        <div className="absolute right-4 bottom-4 z-10">
                                            <div className="flex flex-col">
                                            <img
                                                src={TagTop}
                                                className="3xl:w-[180px] w-[100px]"
                                                alt="Bead"
                                            />
                                            <div className="flex bg-tag-bottom bg-cover bg-center w-[100px] h-[92px] 3xl:w-[180px] 3xl:h-[190px] justify-center items-center">
                                                <img
                                                src={DefaultAlbum}
                                                className="flex 3xl:w-[115px] w-[65px] rounded-full mb-2 mr-[2px] 3xl:mb-4 3xl:mr-1"
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
                                            <img src={Equalizer} alt="equalizer" className="w-7" />
                                        </div>
                                        <div className="flex">
                                            <img src={PlayButton} alt="playbutton" className="w-7" />
                                        </div>
                                        </div>
                                    </div>
                            </div>

                            <span className='songs_list font-nunito'>Songs List</span>
                            <span style={{float:'right',color:'white',display:'flex',textAlign:'right',marginLeft:'80%'}} onClick={handleAll}>
                                {isShow1 && isShow2 && isShow3 && isShow4 ? 
                                    <span>- Hide All</span>
                                    :
                                    <span>+ View All</span>
                                }
                            </span>
                            <div className='songs_container'>
                               
                                {isShow1 ?
                                    <div className='songs_wrap'>
                                        <img src={img1} alt="song_icon" width="60px"/>
                                        <span>Lorem ipsum hhkjhdkad.com</span>
                                        <span onClick={handleShow1}>-</span>
                                    </div>
                                    : null
                                }
                                {isShow2 ?
                                    <div className='songs_wrap'>
                                        <img src={img2} alt="song_icon" width="60px"/>
                                        <span>Lorem ipsum hhkjhdkad.com</span>
                                        <span onClick={handleShow2}>-</span>
                                    </div>
                                    : null
                                }
                                {isShow3 ?
                                    <div className='songs_wrap'>
                                        <img src={img3} alt="song_icon" width="60px"/>
                                        <span>Lorem ipsum hhkjhdkad.com</span>
                                        <span onClick={handleShow3}>-</span>
                                    </div>
                                    : null
                                }
                                {isShow4 ?
                                    <div className='songs_wrap'>
                                         <img src={img4} alt="song_icon" width="60px"/>
                                        <span>Lorem ipsum hhkjhdkad.com</span>
                                        <span onClick={handleShow4}>-</span>
                                    </div>
                                    : null
                                }
                            </div>
                           
                        </div>
                    </div>

                    <div className="album_view_second_container">
                        <span className='album_heading font-nunito'>Album</span>
                        <p className='album_sub_heading font-nunito'>Lorem ipsum dolor sit amet .ft dolor sit amet</p>
                        <p >Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.Ut enim ad minim veniam</p>
                
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

                        <div className='add_song_wrapper'>
                            <div style={{width:'160px',height:'160px',backgroundColor:'rgba(31,31,31,1)',borderRadius:'25px',display:'flex',justifyContent:'center',alignItems:'center',fontSize:64,color:'rgba(0,0,0,.8)'}}>+</div>
                            <div style={{width:'160px',height:'160px',backgroundColor:'rgba(31,31,31,1)',borderRadius:'25px',display:'flex',justifyContent:'center',alignItems:'center',fontSize:64,color:'rgba(0,0,0,.8)'}}>+</div>
                            <div style={{width:'160px',height:'160px',backgroundColor:'rgba(31,31,31,1)',borderRadius:'25px',display:'flex',justifyContent:'center',alignItems:'center',fontSize:64,color:'rgba(0,0,0,.8)'}}>+</div>
                            <div style={{width:'160px',height:'160px',backgroundColor:'rgba(31,31,31,1)',borderRadius:'25px',display:'flex',justifyContent:'center',alignItems:'center',fontSize:64,color:'rgba(0,0,0,.8)'}}>+</div>
                            <div style={{width:'160px',height:'160px',backgroundColor:'rgba(31,31,31,1)',borderRadius:'25px',display:'flex',justifyContent:'center',alignItems:'center',fontSize:64,color:'rgba(0,0,0,.8)'}}>+</div>
                            <div style={{width:'160px',height:'160px',backgroundColor:'rgba(31,31,31,1)',borderRadius:'25px',display:'flex',justifyContent:'center',alignItems:'center',fontSize:64,color:'rgba(0,0,0,.8)'}}>+</div>
                            <div style={{width:'160px',height:'160px',backgroundColor:'rgba(31,31,31,1)',borderRadius:'25px',display:'flex',justifyContent:'center',alignItems:'center',fontSize:64,color:'rgba(0,0,0,.8)'}}>+</div>
                            <div style={{width:'160px',height:'160px',backgroundColor:'rgba(31,31,31,1)',borderRadius:'25px',display:'flex',justifyContent:'center',alignItems:'center',fontSize:64,color:'rgba(0,0,0,.8)'}}>+</div>
                        </div>

                        <button className='submit_btn' style={{width:'100px',padding:'10px'}}>
                            Add
                        </button>
                    </div>
                </div>
            </main>
            <NewFooter/>
        </>
     )
}

export default AlbumEdit;
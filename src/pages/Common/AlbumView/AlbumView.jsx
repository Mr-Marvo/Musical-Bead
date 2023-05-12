import React from 'react';
import './AlbumView.css';
import { NewHeader,NewFooter } from '../../../components/system';

import img1 from '../../../assets/images/system/Rectangle 139.png';
import img2 from '../../../assets/images/system/Rectangle 140.png';
import img3 from '../../../assets/images/system/Rectangle 141.png';
import img4 from '../../../assets/images/system/Rectangle 142.png';
import img5 from '../../../assets/images/system/Rectangle 143.png';
import img6 from '../../../assets/images/system/Rectangle 144.png';

function AlbumView() {
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
                            <div style={{width:'400px',height:'320px',background:'green',borderRadius:'25px'}}>
                                
                            </div>

                            <span className='songs_list font-nunito'>Songs List</span>

                            <div className='songs_container'>
                                <div className='songs_wrap'>
                                    <img src={img1} alt="song_icon" width="60px"/>
                                    <span>Lorem ipsum dagdahahhkjhdkad.com</span>
                                </div>
                            </div>
                           
                        </div>
                    </div>
                    <div className="album_view_right_container">

                    </div>
                </div>
            </main>
            <NewFooter/>
        </>
     )
}

export default AlbumView;
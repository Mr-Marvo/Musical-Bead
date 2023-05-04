import React from 'react';
import './AddSongPopup.css';

function AddSongPopup() {
    return ( 
        <div className="popup_container">
            <div className="popup_wrap">
                <div className="popup">
                    <p className='pop_addsong font-nunito'>Add song</p>
                    <input type='text' placeholder='Song Name'></input>
                    <div className='upload_container'>
                        <div className="upload_wrap"></div>
                        <div className="upload_wrap"></div>
                        <div className="upload_wrap"></div>
                    </div>
                    <div className='upload_container2'>
                        <div className="up_song"></div>
                        <button className='add_btn'>Add</button>
                    </div>
                </div>
            </div>
        </div>
     );
}

export default AddSongPopup;
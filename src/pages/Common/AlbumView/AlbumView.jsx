import React from 'react';
import './AlbumView.css';
import { NewHeader,NewFooter } from '../../../components/system';
import Album4 from '../Album4';

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
                            <Album4/>
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
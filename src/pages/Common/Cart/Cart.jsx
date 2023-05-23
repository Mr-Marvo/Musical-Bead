import React, {useState} from 'react';
import './Cart.css';
import { NewFooter, NewHeader } from '../../../components/system';
import {AiOutlineShoppingCart} from 'react-icons/ai';
import {RiDeleteBin6Line} from 'react-icons/ri';
import Album from '../Album';

import img1 from '../../../assets/images/system/Rectangle 139.png';
import img2 from '../../../assets/images/system/Rectangle 140.png';
import img3 from '../../../assets/images/system/Rectangle 141.png';
import img4 from '../../../assets/images/system/Rectangle 142.png';
import img5 from '../../../assets/images/system/Rectangle 143.png';
import img6 from '../../../assets/images/system/Rectangle 144.png';
import MyAlbumImg from '../../../assets/images/system/MyAlbumImg.png';

function Cart() {
    const [num,setNum] = useState(0);
    const handlePlus = () => {
        setNum(num+1);
    }
    const handleMinus = () => {
        if (num-1<0){
            setNum(0);
        }else {
            setNum(num-1);
        }
    }

    return ( 
        <>
            <NewHeader/>
            <main>
                <div className="cart_container">
                    <div className="item_content">
                       
                        <div className="item_wrap">
                            <img src={MyAlbumImg} alt="album" width="60px"/>
                            <div>
                                <p>Album Name : </p>
                                <p>lorem ipsum sun</p>
                            </div>
                            <div>
                                <p>Price : </p>
                                <p>$31.15</p>
                            </div>
                            <div>
                                <p>Quantity : </p>
                                <button  onClick={handleMinus} style={{width:'30px',backgroundColor:'rgba(31,31,31,1)',padding:'7px',textAlign:'center'}}>-</button>
                                <input type="number"  value={num} style={{width:'30px',backgroundColor:'rgba(31,31,31,1)',padding:'7px',textAlign:'center'}}/>
                                <button  onClick={handlePlus} style={{width:'30px',backgroundColor:'rgba(31,31,31,1)',padding:'7px',textAlign:'center'}}>+</button>
                            </div>
                            <div>
                                <p>Total: </p>
                                <p>$31.15</p>
                            </div>
                            <div >
                                <button style={{marginTop:'20px'}}>
                                  <RiDeleteBin6Line fontSize={30}/>
                                </button>
                            </div>
                            <div >
                                <button style={{marginTop:'20px',color:'white',width:'100px',height:'30px',fontSize:'16px',background:'linear-gradient(270deg, #2AAEC0 0%, #12E45A 100%)',borderRadius:'25px'}}>
                                    Buy Now
                                </button>
                            </div>
                          
                        </div>

                        <div className="item_wrap">
                            <img src={MyAlbumImg} alt="album" width="60px"/>
                            <div>
                                <p>Album Name : </p>
                                <p>lorem ipsum sun</p>
                            </div>
                            <div>
                                <p>Price : </p>
                                <p>$31.15</p>
                            </div>
                            <div>
                                <p>Quantity : </p>
                                <button  onClick={handleMinus} style={{width:'30px',backgroundColor:'rgba(31,31,31,1)',padding:'7px',textAlign:'center'}}>-</button>
                                <input type="number"  value={num} style={{width:'30px',backgroundColor:'rgba(31,31,31,1)',padding:'7px',textAlign:'center'}}/>
                                <button  onClick={handlePlus} style={{width:'30px',backgroundColor:'rgba(31,31,31,1)',padding:'7px',textAlign:'center'}}>+</button>
                            </div>
                            <div>
                                <p>Total: </p>
                                <p>$31.15</p>
                            </div>
                            <div >
                                <button style={{marginTop:'20px'}}>
                                  <RiDeleteBin6Line fontSize={30}/>
                                </button>
                            </div>
                            <div >
                                <button style={{marginTop:'20px',color:'white',width:'100px',height:'30px',fontSize:'16px',background:'linear-gradient(270deg, #2AAEC0 0%, #12E45A 100%)',borderRadius:'25px'}}>
                                    Buy Now
                                </button>
                            </div>
                          
                        </div>

                        <div className="item_wrap">
                            <img src={MyAlbumImg} alt="album" width="60px"/>
                            <div>
                                <p>Album Name : </p>
                                <p>lorem ipsum sun</p>
                            </div>
                            <div>
                                <p>Price : </p>
                                <p>$31.15</p>
                            </div>
                            <div>
                                <p>Quantity : </p>
                                <button  onClick={handleMinus} style={{width:'30px',backgroundColor:'rgba(31,31,31,1)',padding:'7px',textAlign:'center'}}>-</button>
                                <input type="number"  value={num} style={{width:'30px',backgroundColor:'rgba(31,31,31,1)',padding:'7px',textAlign:'center'}}/>
                                <button  onClick={handlePlus} style={{width:'30px',backgroundColor:'rgba(31,31,31,1)',padding:'7px',textAlign:'center'}}>+</button>
                            </div>
                            <div>
                                <p>Total: </p>
                                <p>$31.15</p>
                            </div>
                            <div >
                                <button style={{marginTop:'20px'}}>
                                  <RiDeleteBin6Line fontSize={30}/>
                                </button>
                            </div>
                            <div >
                                <button style={{marginTop:'20px',color:'white',width:'100px',height:'30px',fontSize:'16px',background:'linear-gradient(270deg, #2AAEC0 0%, #12E45A 100%)',borderRadius:'25px'}}>
                                    Buy Now
                                </button>
                            </div>
                          
                        </div>

                        <div className="item_wrap">
                            <img src={MyAlbumImg} alt="album" width="60px"/>
                            <div>
                                <p>Album Name : </p>
                                <p>lorem ipsum sun</p>
                            </div>
                            <div>
                                <p>Price : </p>
                                <p>$31.15</p>
                            </div>
                            <div>
                                <p>Quantity : </p>
                                <button  onClick={handleMinus} style={{width:'30px',backgroundColor:'rgba(31,31,31,1)',padding:'7px',textAlign:'center'}}>-</button>
                                <input type="number"  value={num} style={{width:'30px',backgroundColor:'rgba(31,31,31,1)',padding:'7px',textAlign:'center'}}/>
                                <button  onClick={handlePlus} style={{width:'30px',backgroundColor:'rgba(31,31,31,1)',padding:'7px',textAlign:'center'}}>+</button>
                            </div>
                            <div>
                                <p>Total: </p>
                                <p>$31.15</p>
                            </div>
                            <div >
                                <button style={{marginTop:'20px'}}>
                                  <RiDeleteBin6Line fontSize={30}/>
                                </button>
                            </div>
                            <div >
                                <button style={{marginTop:'20px',color:'white',width:'100px',height:'30px',fontSize:'16px',background:'linear-gradient(270deg, #2AAEC0 0%, #12E45A 100%)',borderRadius:'25px'}}>
                                    Buy Now
                                </button>
                            </div>
                          
                        </div>

                        <div className="item_wrap">
                            <img src={MyAlbumImg} alt="album" width="60px"/>
                            <div>
                                <p>Album Name : </p>
                                <p>lorem ipsum sun</p>
                            </div>
                            <div>
                                <p>Price : </p>
                                <p>$31.15</p>
                            </div>
                            <div>
                                <p>Quantity : </p>
                                <button  onClick={handleMinus} style={{width:'30px',backgroundColor:'rgba(31,31,31,1)',padding:'7px',textAlign:'center'}}>-</button>
                                <input type="number"  value={num} style={{width:'30px',backgroundColor:'rgba(31,31,31,1)',padding:'7px',textAlign:'center'}}/>
                                <button  onClick={handlePlus} style={{width:'30px',backgroundColor:'rgba(31,31,31,1)',padding:'7px',textAlign:'center'}}>+</button>
                            </div>
                            <div>
                                <p>Total: </p>
                                <p>$31.15</p>
                            </div>
                            <div >
                                <button style={{marginTop:'20px'}}>
                                  <RiDeleteBin6Line fontSize={30}/>
                                </button>
                            </div>
                            <div >
                                <button style={{marginTop:'20px',color:'white',width:'100px',height:'30px',fontSize:'16px',background:'linear-gradient(270deg, #2AAEC0 0%, #12E45A 100%)',borderRadius:'25px'}}>
                                    Buy Now
                                </button>
                            </div>
                          
                        </div>
                    </div>
                    
                </div>
            </main>
            <NewFooter/>
        </>
     );
}

export default Cart;
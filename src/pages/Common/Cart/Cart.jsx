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
                    <div className="cart_subcontainer">

                        <div style={{display:'flex',flexDirection:'row',justifyContent:'space-between',marginBottom:'50px'}}>
                            <div style={{display:'flex',flexDirection:'row'}}>
                                <AiOutlineShoppingCart style={{color:'#fff',fontSize:'40px',marginRight:'20px'}}/>
                                <p style={{color:'#fff',fontSize:'24px',fontWeight:'700'}}>MY CART</p>
                            </div>
                            <div style={{display:'flex',flexDirection:'row'}}>
                                <p style={{color:'#2AAEC0',fontSize:'24px',fontWeight:'400'}}>Delete</p>
                            </div>
                           
                        </div>
                   
                        <div className="item_content">

                            <div className="item_wrap font-nunito">
                                <div style={{width:'10%'}}>
                                    <input type="checkbox" name="" id="" />
                                </div>

                                <div className='item_container'>
                                    <img src={MyAlbumImg} alt="album" width="100px" height="100px"/>

                                    <div>
                                        <p style={{fontSize:'24px',fontWeight:700}}>Lorem ipsum dolor sit amet .ft <br/>  dolor sit amet</p>
                                        <p style={{fontSize:'16px',fontWeight:700,color:'#2AAEC0',marginTop:'20px'}}>Lorem ipsum dolor sit amet</p>
                                    </div>

                                    <div style={{display:'flex',alignItems:'center',justifyContent:'center'}}>
                                        <button  onClick={handleMinus} style={{width:'60px',backgroundColor:'rgba(0,0,0,.52)',padding:'7px',textAlign:'center',fontSize:'32px',fontWeight:400,borderTopLeftRadius:'35px',borderBottomLeftRadius:'35px'}}>-</button>
                                        <input type="number"  value={num} style={{width:'60px',backgroundColor:'rgba(0,0,0,.52)',padding:'7px',textAlign:'center',fontSize:'32px',fontWeight:400}}/>
                                        <button  onClick={handlePlus} style={{width:'60px',backgroundColor:'rgba(0,0,0,.52)',padding:'7px',textAlign:'center',fontSize:'32px',fontWeight:400,borderBottomRightRadius:'35px',borderTopRightRadius:'35px'}}>+</button>
                                    </div>
                                    <div style={{display:'flex',alignItems:'center',justifyContent:'center'}}>
                                        <p style={{fontSize:'32px',fontWeight:500}}>US $31.15</p>
                                    </div>
                                </div>
                               
                            </div>

                            <div className="item_wrap font-nunito">
                                <div style={{width:'10%'}}>
                                    <input type="checkbox" name="" id="" />
                                </div>

                                <div className='item_container'>
                                    <img src={MyAlbumImg} alt="album" width="100px" height="100px"/>

                                    <div>
                                        <p style={{fontSize:'24px',fontWeight:700}}>Lorem ipsum dolor sit amet .ft <br/>  dolor sit amet</p>
                                        <p style={{fontSize:'16px',fontWeight:700,color:'#2AAEC0',marginTop:'20px'}}>Lorem ipsum dolor sit amet</p>
                                    </div>

                                    <div style={{display:'flex',alignItems:'center',justifyContent:'center'}}>
                                        <button  onClick={handleMinus} style={{width:'60px',backgroundColor:'rgba(0,0,0,.52)',padding:'7px',textAlign:'center',fontSize:'32px',fontWeight:400,borderTopLeftRadius:'35px',borderBottomLeftRadius:'35px'}}>-</button>
                                        <input type="number"  value={num} style={{width:'60px',backgroundColor:'rgba(0,0,0,.52)',padding:'7px',textAlign:'center',fontSize:'32px',fontWeight:400}}/>
                                        <button  onClick={handlePlus} style={{width:'60px',backgroundColor:'rgba(0,0,0,.52)',padding:'7px',textAlign:'center',fontSize:'32px',fontWeight:400,borderBottomRightRadius:'35px',borderTopRightRadius:'35px'}}>+</button>
                                    </div>
                                    <div style={{display:'flex',alignItems:'center',justifyContent:'center'}}>
                                        <p style={{fontSize:'32px',fontWeight:500}}>US $31.15</p>
                                    </div>
                                </div>
                               
                            </div>

                            <div className="item_wrap font-nunito">
                                <div style={{width:'10%'}}>
                                    <input type="checkbox" name="" id="" />
                                </div>

                                <div className='item_container'>
                                    <img src={MyAlbumImg} alt="album" width="100px" height="100px"/>

                                    <div>
                                        <p style={{fontSize:'24px',fontWeight:700}}>Lorem ipsum dolor sit amet .ft <br/>  dolor sit amet</p>
                                        <p style={{fontSize:'16px',fontWeight:700,color:'#2AAEC0',marginTop:'20px'}}>Lorem ipsum dolor sit amet</p>
                                    </div>

                                    <div style={{display:'flex',alignItems:'center',justifyContent:'center'}}>
                                        <button  onClick={handleMinus} style={{width:'60px',backgroundColor:'rgba(0,0,0,.52)',padding:'7px',textAlign:'center',fontSize:'32px',fontWeight:400,borderTopLeftRadius:'35px',borderBottomLeftRadius:'35px'}}>-</button>
                                        <input type="number"  value={num} style={{width:'60px',backgroundColor:'rgba(0,0,0,.52)',padding:'7px',textAlign:'center',fontSize:'32px',fontWeight:400}}/>
                                        <button  onClick={handlePlus} style={{width:'60px',backgroundColor:'rgba(0,0,0,.52)',padding:'7px',textAlign:'center',fontSize:'32px',fontWeight:400,borderBottomRightRadius:'35px',borderTopRightRadius:'35px'}}>+</button>
                                    </div>
                                    <div style={{display:'flex',alignItems:'center',justifyContent:'center'}}>
                                        <p style={{fontSize:'32px',fontWeight:500}}>US $31.15</p>
                                    </div>
                                </div>
                               
                            </div>

                            <div className="item_wrap font-nunito">
                                <div style={{width:'10%'}}>
                                    <input type="checkbox" name="" id="" />
                                </div>

                                <div className='item_container'>
                                    <img src={MyAlbumImg} alt="album" width="100px" height="100px"/>

                                    <div>
                                        <p style={{fontSize:'24px',fontWeight:700}}>Lorem ipsum dolor sit amet .ft <br/>  dolor sit amet</p>
                                        <p style={{fontSize:'16px',fontWeight:700,color:'#2AAEC0',marginTop:'20px'}}>Lorem ipsum dolor sit amet</p>
                                    </div>

                                    <div style={{display:'flex',alignItems:'center',justifyContent:'center'}}>
                                        <button  onClick={handleMinus} style={{width:'60px',backgroundColor:'rgba(0,0,0,.52)',padding:'7px',textAlign:'center',fontSize:'32px',fontWeight:400,borderTopLeftRadius:'35px',borderBottomLeftRadius:'35px'}}>-</button>
                                        <input type="number"  value={num} style={{width:'60px',backgroundColor:'rgba(0,0,0,.52)',padding:'7px',textAlign:'center',fontSize:'32px',fontWeight:400}}/>
                                        <button  onClick={handlePlus} style={{width:'60px',backgroundColor:'rgba(0,0,0,.52)',padding:'7px',textAlign:'center',fontSize:'32px',fontWeight:400,borderBottomRightRadius:'35px',borderTopRightRadius:'35px'}}>+</button>
                                    </div>
                                    <div style={{display:'flex',alignItems:'center',justifyContent:'center'}}>
                                        <p style={{fontSize:'32px',fontWeight:500}}>US $31.15</p>
                                    </div>
                                </div>
                               
                            </div>

                            <div className="item_wrap font-nunito">
                                <div style={{width:'10%'}}>
                                    <input type="checkbox" name="" id="" />
                                </div>

                                <div className='item_container'>
                                    <img src={MyAlbumImg} alt="album" width="100px" height="100px"/>

                                    <div>
                                        <p style={{fontSize:'24px',fontWeight:700}}>Lorem ipsum dolor sit amet .ft <br/>  dolor sit amet</p>
                                        <p style={{fontSize:'16px',fontWeight:700,color:'#2AAEC0',marginTop:'20px'}}>Lorem ipsum dolor sit amet</p>
                                    </div>

                                    <div style={{display:'flex',alignItems:'center',justifyContent:'center'}}>
                                        <button  onClick={handleMinus} style={{width:'60px',backgroundColor:'rgba(0,0,0,.52)',padding:'7px',textAlign:'center',fontSize:'32px',fontWeight:400,borderTopLeftRadius:'35px',borderBottomLeftRadius:'35px'}}>-</button>
                                        <input type="number"  value={num} style={{width:'60px',backgroundColor:'rgba(0,0,0,.52)',padding:'7px',textAlign:'center',fontSize:'32px',fontWeight:400}}/>
                                        <button  onClick={handlePlus} style={{width:'60px',backgroundColor:'rgba(0,0,0,.52)',padding:'7px',textAlign:'center',fontSize:'32px',fontWeight:400,borderBottomRightRadius:'35px',borderTopRightRadius:'35px'}}>+</button>
                                    </div>
                                    <div style={{display:'flex',alignItems:'center',justifyContent:'center'}}>
                                        <p style={{fontSize:'32px',fontWeight:500}}>US $31.15</p>
                                    </div>
                                </div>
                               
                            </div>

                        </div>

                        <div className='detail_container'>
                            <div style={{display:'flex',flexDirection:'row',justifyContent:'space-between'}}>
                                <p style={{fontSize:'28px',fontWeight:400}}>Sub Total</p>
                                <p style={{fontSize:'28px',fontWeight:400}}>US $31.15</p>
                            </div>

                            <div style={{display:'flex',flexDirection:'row',justifyContent:'space-between'}}>
                                <p style={{fontSize:'28px',fontWeight:400}}>Shipping</p>
                                <p style={{fontSize:'28px',fontWeight:400}}>US $31.15</p>
                            </div>

                            <div style={{display:'flex',flexDirection:'row',justifyContent:'space-between'}}>
                                <p style={{fontSize:'28px',fontWeight:400,color:'#2AAEC0'}}>Total</p>
                                <p style={{fontSize:'28px',fontWeight:400,color:'#2AAEC0'}}>US $31.15</p>
                            </div>

                            <div style={{display:'flex',flexDirection:'row',justifyContent:'space-between',marginTop:'40px'}}>
                                <button style={{fontSize:'32px',fontWeight:'500',color:'#514F4F'}}>Countinue Shopping</button>
                                <button style={{fontSize:'32px',fontWeight:'700',background: 'linear-gradient(270deg, #2AAEC0 0%, #12E45A 100%)',display:'flex',alignItems:'center',justifyContent:'center',height:'60px',borderRadius:'20px',width:'350px'}}>Proceed to Checkout</button>
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
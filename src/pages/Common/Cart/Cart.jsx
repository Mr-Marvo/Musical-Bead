import React, {useState} from 'react';
import './Cart.css';
import { NewFooter, NewHeader } from '../../../components/system';
import {AiOutlineShoppingCart} from 'react-icons/ai';
import {RiDeleteBin6Line} from 'react-icons/ri';
import Album from '../Album';
import CustomCheckbox from '../../../components/Common/CustomCheckbox';


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

    const [isChecked1, setIsChecked1] = useState(false);

    const handleCheckboxChange1 = () => {
        setIsChecked1(!isChecked1);
    };

   


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
                                    <CustomCheckbox checked={isChecked1} onChange={handleCheckboxChange1} />
                                </div>

                                <div className='item_container'>
                                    <img src={MyAlbumImg} alt="album" style={{width:'100px'}}/>

                                    <div>
                                        <p style={{fontWeight:700}} className='fs24'>Lorem ipsum dolor sit amet .ft dolor sit amet</p>
                                        <p style={{fontWeight:700,color:'#2AAEC0',marginTop:'20px'}} className='fs16'>Lorem ipsum dolor sit amet</p>
                                    </div>

                                    <div style={{display:'flex',alignItems:'center',justifyContent:'center'}}>
                                        <button  onClick={handleMinus} style={{backgroundColor:'rgba(0,0,0,.52)',padding:'7px',textAlign:'center',fontWeight:400,borderTopLeftRadius:'35px',borderBottomLeftRadius:'35px'}} className='fs32 w60'>-</button>
                                        <input type="number"  value={num} style={{backgroundColor:'rgba(0,0,0,.52)',padding:'7px',textAlign:'center',fontWeight:400}} className='fs32 w60'/>
                                        <button  onClick={handlePlus} style={{backgroundColor:'rgba(0,0,0,.52)',padding:'7px',textAlign:'center',fontWeight:400,borderBottomRightRadius:'35px',borderTopRightRadius:'35px'}} className='fs32 w60'>+</button>
                                    </div>
                                    <div style={{display:'flex',alignItems:'center',justifyContent:'center'}}>
                                        <p style={{fontWeight:500}} className='fs32'>US $31.15</p>
                                    </div>
                                </div>
                               
                            </div>

                            <div className="item_wrap font-nunito">
                                <div style={{width:'10%'}}>
                                    <CustomCheckbox checked={isChecked1} onChange={handleCheckboxChange1} />
                                </div>

                                <div className='item_container'>
                                    <img src={MyAlbumImg} alt="album" style={{width:'100px'}}/>

                                    <div>
                                        <p style={{fontWeight:700}} className='fs24'>Lorem ipsum dolor sit amet .ft dolor sit amet</p>
                                        <p style={{fontWeight:700,color:'#2AAEC0',marginTop:'20px'}} className='fs16'>Lorem ipsum dolor sit amet</p>
                                    </div>

                                    <div style={{display:'flex',alignItems:'center',justifyContent:'center'}}>
                                        <button  onClick={handleMinus} style={{backgroundColor:'rgba(0,0,0,.52)',padding:'7px',textAlign:'center',fontWeight:400,borderTopLeftRadius:'35px',borderBottomLeftRadius:'35px'}} className='fs32 w60'>-</button>
                                        <input type="number"  value={num} style={{backgroundColor:'rgba(0,0,0,.52)',padding:'7px',textAlign:'center',fontWeight:400}} className='fs32 w60'/>
                                        <button  onClick={handlePlus} style={{backgroundColor:'rgba(0,0,0,.52)',padding:'7px',textAlign:'center',fontWeight:400,borderBottomRightRadius:'35px',borderTopRightRadius:'35px'}} className='fs32 w60'>+</button>
                                    </div>
                                    <div style={{display:'flex',alignItems:'center',justifyContent:'center'}}>
                                        <p style={{fontWeight:500}} className='fs32'>US $31.15</p>
                                    </div>
                                </div>
                               
                            </div>
                            <div className="item_wrap font-nunito">
                                <div style={{width:'10%'}}>
                                    <CustomCheckbox checked={isChecked1} onChange={handleCheckboxChange1} />
                                </div>

                                <div className='item_container'>
                                    <img src={MyAlbumImg} alt="album" style={{width:'100px'}}/>

                                    <div>
                                        <p style={{fontWeight:700}} className='fs24'>Lorem ipsum dolor sit amet .ft dolor sit amet</p>
                                        <p style={{fontWeight:700,color:'#2AAEC0',marginTop:'20px'}} className='fs16'>Lorem ipsum dolor sit amet</p>
                                    </div>

                                    <div style={{display:'flex',alignItems:'center',justifyContent:'center'}}>
                                        <button  onClick={handleMinus} style={{backgroundColor:'rgba(0,0,0,.52)',padding:'7px',textAlign:'center',fontWeight:400,borderTopLeftRadius:'35px',borderBottomLeftRadius:'35px'}} className='fs32 w60'>-</button>
                                        <input type="number"  value={num} style={{backgroundColor:'rgba(0,0,0,.52)',padding:'7px',textAlign:'center',fontWeight:400}} className='fs32 w60'/>
                                        <button  onClick={handlePlus} style={{backgroundColor:'rgba(0,0,0,.52)',padding:'7px',textAlign:'center',fontWeight:400,borderBottomRightRadius:'35px',borderTopRightRadius:'35px'}} className='fs32 w60'>+</button>
                                    </div>
                                    <div style={{display:'flex',alignItems:'center',justifyContent:'center'}}>
                                        <p style={{fontWeight:500}} className='fs32'>US $31.15</p>
                                    </div>
                                </div>
                               
                            </div>
                            <div className="item_wrap font-nunito">
                                <div style={{width:'10%'}}>
                                    <CustomCheckbox checked={isChecked1} onChange={handleCheckboxChange1} />
                                </div>

                                <div className='item_container'>
                                    <img src={MyAlbumImg} alt="album" style={{width:'100px'}}/>

                                    <div>
                                        <p style={{fontWeight:700}} className='fs24'>Lorem ipsum dolor sit amet .ft dolor sit amet</p>
                                        <p style={{fontWeight:700,color:'#2AAEC0',marginTop:'20px'}} className='fs16'>Lorem ipsum dolor sit amet</p>
                                    </div>

                                    <div style={{display:'flex',alignItems:'center',justifyContent:'center'}}>
                                        <button  onClick={handleMinus} style={{backgroundColor:'rgba(0,0,0,.52)',padding:'7px',textAlign:'center',fontWeight:400,borderTopLeftRadius:'35px',borderBottomLeftRadius:'35px'}} className='fs32 w60'>-</button>
                                        <input type="number"  value={num} style={{backgroundColor:'rgba(0,0,0,.52)',padding:'7px',textAlign:'center',fontWeight:400}} className='fs32 w60'/>
                                        <button  onClick={handlePlus} style={{backgroundColor:'rgba(0,0,0,.52)',padding:'7px',textAlign:'center',fontWeight:400,borderBottomRightRadius:'35px',borderTopRightRadius:'35px'}} className='fs32 w60'>+</button>
                                    </div>
                                    <div style={{display:'flex',alignItems:'center',justifyContent:'center'}}>
                                        <p style={{fontWeight:500}} className='fs32'>US $31.15</p>
                                    </div>
                                </div>
                               
                            </div>
                            <div className="item_wrap font-nunito">
                                <div style={{width:'10%'}}>
                                    <CustomCheckbox checked={isChecked1} onChange={handleCheckboxChange1} />
                                </div>

                                <div className='item_container'>
                                    <img src={MyAlbumImg} alt="album" style={{width:'100px'}}/>

                                    <div>
                                        <p style={{fontWeight:700}} className='fs24'>Lorem ipsum dolor sit amet .ft dolor sit amet</p>
                                        <p style={{fontWeight:700,color:'#2AAEC0',marginTop:'20px'}} className='fs16'>Lorem ipsum dolor sit amet</p>
                                    </div>

                                    <div style={{display:'flex',alignItems:'center',justifyContent:'center'}}>
                                        <button  onClick={handleMinus} style={{backgroundColor:'rgba(0,0,0,.52)',padding:'7px',textAlign:'center',fontWeight:400,borderTopLeftRadius:'35px',borderBottomLeftRadius:'35px'}} className='fs32 w60'>-</button>
                                        <input type="number"  value={num} style={{backgroundColor:'rgba(0,0,0,.52)',padding:'7px',textAlign:'center',fontWeight:400}} className='fs32 w60'/>
                                        <button  onClick={handlePlus} style={{backgroundColor:'rgba(0,0,0,.52)',padding:'7px',textAlign:'center',fontWeight:400,borderBottomRightRadius:'35px',borderTopRightRadius:'35px'}} className='fs32 w60'>+</button>
                                    </div>
                                    <div style={{display:'flex',alignItems:'center',justifyContent:'center'}}>
                                        <p style={{fontWeight:500}} className='fs32'>US $31.15</p>
                                    </div>
                                </div>
                               
                            </div>
                            <div className="item_wrap font-nunito">
                                <div style={{width:'10%'}}>
                                    <CustomCheckbox checked={isChecked1} onChange={handleCheckboxChange1} />
                                </div>

                                <div className='item_container'>
                                    <img src={MyAlbumImg} alt="album" style={{width:'100px'}}/>

                                    <div>
                                        <p style={{fontWeight:700}} className='fs24'>Lorem ipsum dolor sit amet .ft dolor sit amet</p>
                                        <p style={{fontWeight:700,color:'#2AAEC0',marginTop:'20px'}} className='fs16'>Lorem ipsum dolor sit amet</p>
                                    </div>

                                    <div style={{display:'flex',alignItems:'center',justifyContent:'center'}}>
                                        <button  onClick={handleMinus} style={{backgroundColor:'rgba(0,0,0,.52)',padding:'7px',textAlign:'center',fontWeight:400,borderTopLeftRadius:'35px',borderBottomLeftRadius:'35px'}} className='fs32 w60'>-</button>
                                        <input type="number"  value={num} style={{backgroundColor:'rgba(0,0,0,.52)',padding:'7px',textAlign:'center',fontWeight:400}} className='fs32 w60'/>
                                        <button  onClick={handlePlus} style={{backgroundColor:'rgba(0,0,0,.52)',padding:'7px',textAlign:'center',fontWeight:400,borderBottomRightRadius:'35px',borderTopRightRadius:'35px'}} className='fs32 w60'>+</button>
                                    </div>
                                    <div style={{display:'flex',alignItems:'center',justifyContent:'center'}}>
                                        <p style={{fontWeight:500}} className='fs32'>US $31.15</p>
                                    </div>
                                </div>
                               
                            </div>

                           

                        </div>

                        <div className='detail_container'>
                            <div style={{display:'flex',flexDirection:'row',justifyContent:'space-between'}}>
                                <p style={{fontWeight:400}} className='fs28'>Sub Total</p>
                                <p style={{fontWeight:400}} className='fs28'>US $31.15</p>
                            </div>

                            <div style={{display:'flex',flexDirection:'row',justifyContent:'space-between'}}>
                                <p style={{fontWeight:400}} className='fs28'>Shipping</p>
                                <p style={{fontWeight:400}} className='fs28'>US $31.15</p>
                            </div>

                            <div style={{display:'flex',flexDirection:'row',justifyContent:'space-between'}}>
                                <p style={{fontWeight:400,color:'#2AAEC0'}} className='fs28'>Total</p>
                                <p style={{fontWeight:400,color:'#2AAEC0'}} className='fs28'>US $31.15</p>
                            </div>

                            <div style={{display:'flex',flexDirection:'row',justifyContent:'space-between',marginTop:'40px'}}>
                                <button style={{fontWeight:'500',color:'#514F4F'}} className='fs32'>Countinue Shopping</button>
                                <button style={{fontWeight:'700',background: 'linear-gradient(270deg, #2AAEC0 0%, #12E45A 100%)',display:'flex',alignItems:'center',justifyContent:'center',height:'60px',borderRadius:'20px',width:'350px',color:'black'}} className='fs32'>Proceed to Checkout</button>
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
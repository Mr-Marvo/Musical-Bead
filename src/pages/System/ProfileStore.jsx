import React, { useState } from 'react';
import styled from 'styled-components';
import { NewHeader } from '../../components/system';
import {NewFooter} from '../../components/system';
import {FaCcMastercard} from 'react-icons/fa';
import {FaCcVisa} from 'react-icons/fa';
import {SiAmericanexpress} from 'react-icons/si'
import {TbBrandTelegram} from 'react-icons/tb';
import {MdOutlineSupportAgent} from 'react-icons/md';
import {FiPhoneCall} from 'react-icons/fi';

const ProfileStore = () => {
  const [activeTab, setActiveTab] = useState('settings');

  const changeContent = (tab) => {
    setActiveTab(tab);
  };

  

  return (
    <>
        <NewHeader />
        {/* Body Content */}
        <main className="font-nunito">
            <div className='profilestore_container'>
                <div className='profilestore_sidebar'>
                    <ul>
                        <li>
                            <button onClick={() => changeContent('settings')} style={{color:'#fff',padding:'10px',fontWeight:'700',fontSize:'24px'}} className=''>Settings</button>
                        </li>
                        <li>
                            <button onClick={() => changeContent('billing')} style={{color:'#fff',padding:'10px',fontWeight:'700',fontSize:'24px'}}>Billings</button>
                        </li>
                        <li>
                            <button onClick={() => changeContent('support')} style={{color:'#fff',padding:'10px',fontWeight:'700',fontSize:'24px'}}>Support</button>
                        </li>
                    </ul>
                </div>
                <div className='profilestore_content'>
                    {activeTab === 'settings' && <Settings />}
                    {activeTab === 'billing' && <Billing />}
                    {activeTab === 'support' && <Support />}
                </div>
            </div>
        </main>
        <NewFooter />
    </>
    
  );
};

const Settings = () => {
    const [nameS,setNameS] = useState('');
    const [emailS,setEmailS] = useState('');
    const [numberS,setNumberS] = useState('+01');
    const [cpwS,setCpwS] = useState('');
    const [npwS,setNpwS] = useState('');
    const [okpwS,setOkpwS] = useState('');

    const [isOn, setIsOn] = useState(false);

    const handleToggle = () => {
        setIsOn(!isOn);
    };

    const switchStyle = {
        position: 'relative',
        display: 'inline-block',
        minWidth: '90px',
        maxWidth:'120px',
        height: '34px'
    };
    
    const sliderStyle = {
        position: 'absolute',
        cursor: 'pointer',
        top: '0',
        left: '0',
        right: '0',
        bottom: '0',
        backgroundColor: isOn ? '#12E4A5' : 'red',
        transition: '.4s',
        borderRadius: '34px',
    };
    
    const labelStyle = {
        position: 'absolute',
        top: '50%',
        left: isOn ? '8px' : '38px',
        transform: 'translateY(-50%)',
        color: 'white' ,
        transition: '.4s',
        fontWeight:600
    };

    const Container = styled.button`
        display:flex;
        width:100%;
        flex-direction:column;
        padding:3rem;

        @media (max-width: 768px) {
          
        }
    `;

    return (
        <div style={{background:'#0B0B0B',width:'100%',height:'100%',borderRadius:'10px',color:'#fff',fontWeight:'500',fontSize:'24px'}} className='font-nunito'>
            <Container>
                <div style={{width:'100%'}}>
                    <div style={{display:'flex',marginBottom:'25px'}} className='fd'>
                        <div style={{textAlign:'left'}}>Name</div>
                        <input type="text" style={{ backgroundColor: "#1F1F1F",borderRadius:'15px',paddingLeft:'10px' }} value={nameS} onChange={(e) => setNameS(e.target.value)}/>
                    </div>
                    <div style={{display:'flex',marginBottom:'25px'}} className='fd'>
                        <div style={{textAlign:'left'}}>E-mail</div>
                        <input type="text" style={{ backgroundColor: "#1F1F1F",borderRadius:'15px',paddingLeft:'10px' }} value={emailS} onChange={(e) => setEmailS(e.target.value)} ></input>
                    </div>
                    <div style={{display:'flex',marginBottom:'25px'}} className='fd'>
                        <div style={{textAlign:'left'}}>Phone Number</div>
                        <input type="text" style={{ backgroundColor: "#1F1F1F",borderRadius:'15px',paddingLeft:'10px' }} value={numberS} onChange={(e) => setNumberS(e.target.value)} ></input>
                    </div>
                    <div>
                        <button style={{background:'#12E4A5',borderRadius:'10px',width:'220px',float:'right',marginRight:'2%'}}>
                            <span style={{fontSize:'16px',color:'#000',fontWeight:'700'}}>SAVE CHANGES</span> 
                        </button>
                    </div>
                </div>
            </Container>

            <Container>
                <div style={{width:'100%'}}>
                    <div style={{display:'flex',marginBottom:'25px'}} className='fd'>
                        <div style={{textAlign:'left'}}>Current Password</div>
                        <input type="text" style={{ backgroundColor: "#1F1F1F",borderRadius:'15px',paddingLeft:'10px' }} value={cpwS} onChange={(e) => setCpwS(e.target.value)} ></input>
                    </div>
                    <div style={{display:'flex',marginBottom:'25px'}} className='fd'>
                        <div style={{textAlign:'left'}}>New Password</div>
                        <input type="text" style={{ backgroundColor: "#1F1F1F",borderRadius:'15px',paddingLeft:'10px' }} value={npwS} onChange={(e) => setNpwS(e.target.value)} ></input>
                    </div>
                    <div style={{display:'flex',marginBottom:'25px'}} className='fd'>
                        <div style={{textAlign:'left'}}>Confirm Password</div>
                        <input type="text" style={{ backgroundColor: "#1F1F1F",borderRadius:'15px',paddingLeft:'10px' }} value={okpwS} onChange={(e) => setOkpwS(e.target.value)} ></input>
                    </div>
                    <div>
                        <button style={{background:'#12E4A5',borderRadius:'10px',width:'220px',float:'right',marginRight:'2%'}}>
                            <span style={{fontSize:'16px',color:'#000',fontWeight:'700'}}>CHANGE PASSWORD</span> 
                        </button>
                    </div>
                </div>
            </Container>

            <Container>
                <div style={{display:'flex',marginBottom:'25px'}} className='fd'>
                    <div>Sequrity Question</div>
                    <p style={{paddingLeft:'10px',marginRight:'20px',fontSize:'20px'}}>
                        Lorem ipsum, dolor sit amet consectetur adipisicing elit. Labore eaque dolorem ratione voluptatibus in cupiditate nulla. Officia nisi aliquid sed ipsum minima? Id quis ipsum, porro minus odio voluptas soluta.
                    </p>
                    <div className="switch" style={switchStyle} onClick={handleToggle} >
                        <div className="slider round" style={sliderStyle}>
                            <span className="label" style={labelStyle}>
                                {isOn ? 'ON' : 'OFF'}
                            </span>
                            <span style={{width:'5px',height:'5px',borderRadius:'2.5px'}}>
                                {isOn ?  <div style={{width:'25px',height:'25px',borderRadius:'17px',background:'#fff',margin:'5px',marginLeft:'60px'}}></div> : <div style={{width:'25px',height:'25px',borderRadius:'17px',background:'#fff',margin:'5px',marginLeft:'5px'}}></div>}
                            </span>
                        </div>
                    </div>
                </div>
            </Container>
        </div>
    )
};

const Billing = () => {
    const [cardNo,setCardNo] = useState('');
    const [expDate,setExpDate] = useState('');
    const [cvc,setCvc] = useState('');
    const [payoneer,setPayoneer] = useState('');
    const [paypal,setPaypal] = useState('');
    const [adl1,setAdl1] = useState('');
    const [adl2,setAdl2] = useState('');
    const [city,setCity] = useState('');
    const [post,setPost] = useState('');
    const [country,setCountry] = useState('');

    const validate = () => {

    }

    const Container = styled.button`
        display:flex;
        width:100%;
        flex-direction:column;
        padding:3rem;

        @media (max-width: 768px) {
          
        }
    `;
    return (
        <div style={{background:'#0B0B0B',width:'100%',height:'100%',borderRadius:'10px',color:'#fff',fontWeight:'500',fontSize:'24px'}} className='font-nunito'>
            <Container>
                <h1 style={{fontSize:'20px',fontWeight:'700',color:'#12E4A5',marginBottom:'20px'}}>ADD / EDIT  CARD</h1>
                <div style={{width:'100%'}}>
                    <div style={{display:'flex',marginBottom:'25px'}} className='fd'>
                        <div style={{textAlign:'left',fontSize:'20px',fontWeight:'500'}}>Card Number</div>
                        <input type="text" style={{ backgroundColor: "#1F1F1F",borderRadius:'15px',paddingLeft:'10px' }} value={cardNo} onChange={(e) => setCardNo(e.target.value)} onKeyUp={validate}></input>
                    </div>
                    <div style={{display:'flex',marginBottom:'25px'}} className='fd'>
                        <div style={{textAlign:'left',fontSize:'20px',fontWeight:'500',paddingTop:'15px'}}>Card Type</div>
                        <div style={{display:'flex',flexDirection:'row',fontSize:'56px',width:'100%',justifyContent:'space-between',marginLeft:'8%'}}>
                            <span style={{width:'20%'}}><FaCcVisa/></span>
                            <span style={{width:'20%'}}><FaCcMastercard/></span>
                            <span style={{width:'20%',}}><FaCcVisa/></span>
                            <span style={{width:'20%'}}><FaCcMastercard/></span>
                        </div>
                    </div>
                    <div style={{display:'flex',marginBottom:'25px'}} >
                        <div style={{textAlign:'left',fontSize:'20px',fontWeight:'500',width:'24%'}}>Expire Date</div>
                        <input type="text" style={{ backgroundColor: "#1F1F1F",borderRadius:'15px',paddingLeft:'10px',width:'25%' }} value={expDate} onChange={(e) => setExpDate(e.target.value)} onKeyUp={validate}></input>
                        <div style={{fontSize:'20px',fontWeight:'500',textAlign:'left',paddingLeft:'5px',width:'24%'}}>CVC</div>
                        <input type="text" style={{ backgroundColor: "#1F1F1F",borderRadius:'15px',paddingLeft:'10px' ,width:'25%'}} value={cvc} onChange={(e) => setCvc(e.target.value)} onKeyUp={validate}></input>
                    </div>
                    <div>
                        <button style={{background:'#12E4A5',borderRadius:'10px',width:'220px',float:'right',marginRight:'2%'}}>
                            <span style={{fontSize:'16px',color:'#000',fontWeight:'700'}}>ADD CARD</span> 
                        </button>
                    </div>
                </div>   
            </Container>
            <Container>
                 <h1 style={{fontSize:'20px',fontWeight:'700',color:'#12E4A5',marginBottom:'20px'}}>OTHER PAYMENT METHODS</h1>
                <div style={{width:'100%'}}>
                    <div style={{display:'flex',marginBottom:'25px'}} className='fd'>
                        <div style={{textAlign:'left',fontSize:'20px',fontWeight:'500'}}>PAYONEER</div>
                        <input type="text" style={{ backgroundColor: "#1F1F1F",borderRadius:'15px',paddingLeft:'10px' }} value={payoneer} onChange={(e) => setPayoneer(e.target.value)} onKeyUp={validate}></input>
                    </div>
                    <div style={{display:'flex',marginBottom:'25px'}} className='fd'>
                        <div style={{textAlign:'left',fontSize:'20px',fontWeight:'500'}}>PAYPAL</div>
                        <input type="text" style={{ backgroundColor: "#1F1F1F",borderRadius:'15px',paddingLeft:'10px' }} value={paypal} onChange={(e) => setPaypal(e.target.value)} onKeyUp={validate}></input>
                    </div>
                    <div>
                        <button style={{background:'#12E4A5',borderRadius:'10px',width:'220px',float:'right',marginRight:'2%'}}>
                            <span style={{fontSize:'16px',color:'#000',fontWeight:'700'}}>ADD</span> 
                        </button>
                    </div>
                </div>   
            </Container>
            <Container>
                 <h1 style={{fontSize:'20px',fontWeight:'700',color:'#12E4A5',marginBottom:'20px'}}>BILLING ADDRESS</h1>
                <div style={{width:'100%'}}>
                    <div style={{display:'flex',marginBottom:'25px'}} className='fd'>
                        <div style={{textAlign:'left',fontSize:'20px',fontWeight:'500'}}>Address Line 1</div>
                        <input type="text" style={{ backgroundColor: "#1F1F1F",borderRadius:'15px',paddingLeft:'10px' }} value={adl1} onChange={(e) => setAdl1(e.target.value)} onKeyUp={validate}></input>
                    </div>
                    <div style={{display:'flex',marginBottom:'25px'}} className='fd'>
                        <div style={{textAlign:'left',fontSize:'20px',fontWeight:'500'}}>Address Line 2</div>
                        <input type="text" style={{ backgroundColor: "#1F1F1F",borderRadius:'15px',paddingLeft:'10px' }} value={adl2} onChange={(e) => setAdl2(e.target.value)} onKeyUp={validate}></input>
                    </div>
                    <div style={{display:'flex',marginBottom:'25px'}} >
                        <div style={{textAlign:'left',fontSize:'20px',fontWeight:'500',width:'24%'}}>City / Town</div>
                        <input type="text" style={{ backgroundColor: "#1F1F1F",borderRadius:'15px',paddingLeft:'10px',width:'25%' }} value={city} onChange={(e) => setCity(e.target.value)} onKeyUp={validate}></input>
                        <div style={{fontSize:'20px',fontWeight:'500',textAlign:'left',paddingLeft:'5px',width:'24%'}}>Postal Code</div>
                        <input type="text" style={{ backgroundColor: "#1F1F1F",borderRadius:'15px',paddingLeft:'10px' ,width:'25%'}} value={post} onChange={(e) => setPost(e.target.value)} onKeyUp={validate}></input>
                    </div>
                    <div style={{display:'flex',marginBottom:'25px'}} className='fd'>
                        <div style={{textAlign:'left',fontSize:'20px',fontWeight:'500'}}>Country</div>
                        <input type="text" style={{ backgroundColor: "#1F1F1F",borderRadius:'15px',paddingLeft:'10px' }} value={country} onChange={(e) => setCountry(e.target.value)} onKeyUp={validate}></input>
                    </div>
                    <div>
                        <button style={{background:'#12E4A5',borderRadius:'10px',width:'220px',float:'right',marginRight:'2%'}}>
                            <span style={{fontSize:'16px',color:'#000',fontWeight:'700'}}>ADD</span> 
                        </button>
                    </div>
                </div>   
            </Container>
        </div>
    )
};

const Support = () => {
    const Container = styled.button`
        display:flex;
        width:100%;
        flex-direction:column;
        padding:3rem;

        @media (max-width: 768px) {
          
        }
    `;
    return (
        <div style={{background:'#0B0B0B',width:'100%',height:'100%',borderRadius:'10px',color:'#fff',fontWeight:'500',fontSize:'24px'}} className='font-nunito'>
            <Container>
                <h1 style={{fontSize:'28px',fontWeight:'500',color:'#2AAEC0',marginBottom:'20px'}}>Hello, How can we help you?</h1>
                <div style={{width:'100%',display:'flex',alignItems:'center',justifyContent:'center'}}>
                    <div style={{display:'flex',flexDirection:'row',fontSize:'56px',width:'90%',justifyContent:'space-between',gap:'10px'}}>
                        <div style={{width:'175px',height:'175px',background:'#161616',border:'1px solid #12E4A5',borderRadius:'20px',alignItems:'center',justifyContent:'center',display:'flex',fontSize:'75px'}}><MdOutlineSupportAgent/></div>
                        <div style={{width:'175px',height:'175px',background:'#161616',border:'1px solid #12E4A5',borderRadius:'20px',alignItems:'center',justifyContent:'center',display:'flex',fontSize:'75px'}}><FiPhoneCall/></div>
                        <div style={{width:'175px',height:'175px',background:'#161616',border:'1px solid #12E4A5',borderRadius:'20px',alignItems:'center',justifyContent:'center',display:'flex',fontSize:'75px'}}><TbBrandTelegram/></div>
                    </div>
                </div>
            </Container>
            <Container>
                <h1 style={{fontSize:'28px',fontWeight:'500',color:'#2AAEC0',marginBottom:'20px'}}>My Support Requsts</h1>
                <div style={{width:'100%',display:'flex',alignItems:'center',justifyContent:'center'}}>
                    <div style={{display:'flex',flexDirection:'column',fontSize:'56px',width:'100%'}} >
                        <div style={{width:'100%',background:'#161616',borderRadius:'15px',alignItems:'center',justifyContent:'space-between',display:'flex',fontSize:'20px',padding:'10px',marginBottom:'10px'}} className='fd'>
                            <div >MBRQ22548-248-22</div>
                            <div style={{display:'flex',flexDirection:'row',width:'100%'}} >
                                <button style={{width:'50%',marginRight:'2%'}}>
                                    <span style={{fontSize:'16px',color:'#636363',fontWeight:'700'}}>ADD CARD</span> 
                                </button>
                                <button style={{background:'#12E4A5',borderRadius:'10px',width:'50%',float:'right',marginRight:'2%'}}>
                                    <span style={{fontSize:'16px',color:'#000',fontWeight:'700'}}>Pending</span> 
                                </button>
                            </div>
                        </div>
                        <div style={{width:'100%',background:'#161616',borderRadius:'15px',alignItems:'center',justifyContent:'space-between',display:'flex',fontSize:'20px',padding:'10px',marginBottom:'10px'}} className='fd'>
                            <div>MBRQ22548-248-22</div>
                            <div style={{display:'flex',flexDirection:'row',width:'100%'}}>
                                <button style={{width:'50%',marginRight:'2%',}}>
                                    <span style={{fontSize:'16px',color:'#636363',fontWeight:'700'}}>ADD CARD</span> 
                                </button>
                                <button style={{background:'#262626',borderRadius:'10px',width:'50%',float:'right',marginRight:'2%'}}>
                                    <span style={{fontSize:'16px',color:'#828282',fontWeight:'700'}}>Solved</span> 
                                </button>
                            </div>
                        </div>
                        <div style={{width:'100%',background:'#161616',borderRadius:'15px',alignItems:'center',justifyContent:'space-between',display:'flex',fontSize:'20px',padding:'10px',marginBottom:'10px'}} className='fd'>
                            <div>MBRQ22548-248-22</div>
                            <div style={{display:'flex',flexDirection:'row',width:'100%'}}>
                                <button style={{width:'50%',marginRight:'2%',}}>
                                    <span style={{fontSize:'16px',color:'#636363',fontWeight:'700'}}>ADD CARD</span> 
                                </button>
                                <button style={{background:'#262626',borderRadius:'10px',width:'50%',float:'right',marginRight:'2%'}}>
                                    <span style={{fontSize:'16px',color:'#828282',fontWeight:'700'}}>Solved</span> 
                                </button>
                            </div>
                        </div>
                        <div style={{width:'100%',background:'#161616',borderRadius:'15px',alignItems:'center',justifyContent:'space-between',display:'flex',fontSize:'20px',padding:'10px',marginBottom:'10px'}} className='fd'>
                            <div>MBRQ22548-248-22</div>
                            <div style={{display:'flex',flexDirection:'row',width:'100%'}}>
                                <button style={{width:'50%',marginRight:'2%',}}>
                                    <span style={{fontSize:'16px',color:'#636363',fontWeight:'700'}}>ADD CARD</span> 
                                </button>
                                <button style={{background:'#262626',borderRadius:'10px',width:'50%',float:'right',marginRight:'2%'}}>
                                    <span style={{fontSize:'16px',color:'#828282',fontWeight:'700'}}>Solved</span> 
                                </button>
                            </div>
                        </div>
                       
                    </div>
                </div>
            </Container>
            <Container>
                <div style={{width:'100%'}}>
                    <div style={{display:'flex',flexDirection:'column',fontSize:'56px',width:'95%',justifyContent:'flex-end',alignItems:'flex-end'}}>
                        <p style={{fontSize:'20px',fontWeight:'500'}}>Standards & Our Terms of Service</p>
                    </div>
                </div>
            </Container>

        </div>
    )
};

export default ProfileStore;

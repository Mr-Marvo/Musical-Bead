import React, { useState } from 'react';
import styled from 'styled-components';
import { NewHeader } from '../../components/system';
import {NewFooter} from '../../components/system';

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
                            <button onClick={() => changeContent('settings')} style={{color:'#fff',padding:'10px',fontWeight:'700',fontSize:'24px'}}>Settings</button>
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

    const [isOn, setIsOn] = useState(false);

    const handleToggle = () => {
        setIsOn(!isOn);
    };

    const validate = () => {

    }

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
                    <div style={{display:'flex',flexDirection:'row',marginBottom:'25px'}}>
                        <div style={{width:'24%',textAlign:'left'}}>Name</div>
                        <input type="text" style={{ backgroundColor: "#1F1F1F",width:'75%',borderRadius:'15px',paddingLeft:'10px' }} value={nameS} onChange={(e) => setNameS(e.target.value)} onKeyUp={validate}></input>
                    </div>
                    <div style={{display:'flex',flexDirection:'row',marginBottom:'25px'}}>
                        <div style={{width:'24%',textAlign:'left'}}>E-mail</div>
                        <input type="text" style={{ backgroundColor: "#1F1F1F",width:'75%',borderRadius:'15px',paddingLeft:'10px' }} value={emailS} onChange={(e) => setEmailS(e.target.value)} onKeyUp={validate}></input>
                    </div>
                    <div style={{display:'flex',flexDirection:'row',marginBottom:'25px'}}>
                        <div style={{width:'24%',textAlign:'left'}}>Phone Number</div>
                        <input type="text" style={{ backgroundColor: "#1F1F1F",width:'75%',borderRadius:'15px',paddingLeft:'10px' }} value={numberS} onChange={(e) => setNumberS(e.target.value)} onKeyUp={validate}></input>
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
                    <div style={{display:'flex',flexDirection:'row',marginBottom:'25px'}}>
                        <div style={{width:'24%',textAlign:'left'}}>Current Password</div>
                        <input type="text" style={{ backgroundColor: "#1F1F1F",width:'75%',borderRadius:'15px',paddingLeft:'10px' }} value={nameS} onChange={(e) => setNameS(e.target.value)} onKeyUp={validate}></input>
                    </div>
                    <div style={{display:'flex',flexDirection:'row',marginBottom:'25px'}}>
                        <div style={{width:'24%',textAlign:'left'}}>New Password</div>
                        <input type="text" style={{ backgroundColor: "#1F1F1F",width:'75%',borderRadius:'15px',paddingLeft:'10px' }} value={emailS} onChange={(e) => setEmailS(e.target.value)} onKeyUp={validate}></input>
                    </div>
                    <div style={{display:'flex',flexDirection:'row',marginBottom:'25px'}}>
                        <div style={{width:'24%',textAlign:'left'}}>Confirm Password</div>
                        <input type="text" style={{ backgroundColor: "#1F1F1F",width:'75%',borderRadius:'15px',paddingLeft:'10px' }} value={numberS} onChange={(e) => setNumberS(e.target.value)} onKeyUp={validate}></input>
                    </div>
                    <div>
                        <button style={{background:'#12E4A5',borderRadius:'10px',width:'220px',float:'right',marginRight:'2%'}}>
                            <span style={{fontSize:'16px',color:'#000',fontWeight:'700'}}>CHANGE PASSWORD</span> 
                        </button>
                    </div>
                </div>
            </Container>

            <Container>
                <div style={{display:'flex',flexDirection:'row',marginBottom:'25px'}}>
                    <div style={{width:'24%'}}>Sequrity Question</div>
                    <p style={{ width:'60%',paddingLeft:'10px',marginRight:'20px',fontSize:'20px' }}>
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
    return (
        <div style={{background:'#0B0B0B',width:'100%',height:'100%'}}>
            <h1>Billing Content</h1>
        </div>
    )
};

const Support = () => {
    return (
        <div style={{background:'#0B0B0B',width:'100%',height:'100%'}}>
            <h1>Support Content</h1>
        </div>
    )
};

export default ProfileStore;

import React,{useState} from "react";
import "../../App.css";

import Album from "../Common/Album";

import {BsSearch} from 'react-icons/bs';
import {BiDownArrow} from 'react-icons/bi';
import {BiUpArrow} from 'react-icons/bi';

/* Slider */
import { Slide } from "react-slideshow-image";
import "react-slideshow-image/dist/styles.css";
import { NewFooter, NewHeader } from "../../components/system";
import {
  SampleSlider1,
  SampleSlider2,
  SampleSlider3,
  SampleSlider4,
  SampleSlider5,
  SampleSlider6,
  SampleSlider7,
  SampleSlider8,
} from "../../assets";

const slideImages = [
  {
    url: "https://images.unsplash.com/photo-1509721434272-b79147e0e708?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=1500&q=80",
    caption: "Slide 1",
  },
  {
    url: "https://images.unsplash.com/photo-1506710507565-203b9f24669b?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=1536&q=80",
    caption: "Slide 2",
  },
  {
    url: "https://images.unsplash.com/photo-1536987333706-fc9adfb10d91?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=1500&q=80",
    caption: "Slide 3",
  },
];



function Home() {

  const [isCollapsed, setIsCollapsed] = useState(true);

  const handleToggleCollapse = () => {
    setIsCollapsed(!isCollapsed);
  };

  return (
    <>
      <NewHeader />
      <div className="home_upper_content">
          <div className="image_containing_wrapper" style={{display:'flex',justifyContent:'center',alignItems:'flex-end'}}>
            <div style={{display:'flex',flexDirection:'row',margin:'1rem',width:'900px',backgroundColor:'white',fontSize:20,padding:'2px',borderRadius:'25px', background: '-webkit-linear-gradient(60deg, rgba(18, 228, 90, 1), rgba(42, 174, 192, 1))'}}>
              <input type="text" style={{width:'800px',backgroundColor:'#121212',fontSize:20,padding:'5px',borderRadius:'25px 0px 0px 25px',paddingLeft:'25px'}} placeholder="Search Here.." ></input>
             <div style={{display:'flex',flexDirection:'row',alignItems:'center',justifyContent:'center',backgroundColor:'#121212',borderRadius:'0px 25px 25px 0px',padding:2}}>
                <BsSearch color="white"/>
                <span style={{fontSize:12, backgroundImage: 'linear-gradient(60deg, #00C7E2, #12E45A)',WebkitBackgroundClip:'text',WebkitTextFillColor:'transparent'}}>by Album</span>
                <BiDownArrow color="white"/>
             </div>
            </div>  
          </div>
          
            <div className="upper_content_navbar">
                <p>All Categories </p>
                {isCollapsed ? (<BiDownArrow fontSize={20} color="#5555" onClick={handleToggleCollapse}/>) : (<BiUpArrow fontSize={20} color="#5555" onClick={handleToggleCollapse}/>)}
                <p>Classical</p>
                <p>Hip Pop</p>
                <p>Reggae</p>
                <p>K-pop</p>
                <p>Heavy Metal</p>
                <p>EDM</p>
                <p>Rhythm & Blues</p>
                <p>Country Music</p>
            </div>
           
            {isCollapsed ? (
              <div style={{width:'100%',height:'10rem',background:'#101010',marginTop:'-25px',color:'white'}}>
                  <div style={{margin:'25px 0px 25px 280px',display:'grid',gridTemplateColumns:'auto auto auto auto auto auto auto auto',gap:35}}>
                    <p>Pop</p>
                    <p>Jazz</p>
                    <p>Blues</p>
                    <p>Folk</p>
                    <p>Funk</p>
                    <p>Soul</p>
                    <p>Indian</p>
                    <p>Latin</p>
                    <p>World</p>
                    <p>New-Age</p>
                    <p>Opera</p>
                    <p>J-pop</p>
                    <p>Experiment</p>
                    <p>Ambient</p>
                    <p>House</p>
                    <p>Alternative</p>
                    <p>Classical</p>
                    <p>Hip Pop</p>
                    <p>Reggae</p>
                    <p>K-pop</p>
                    <p>Heavy Metal</p>
                    <p>EDM</p>
                    <p>Rhythm & Blues</p>
                    <p>Country Music</p>
                  </div>
                 
              </div>
            ) : (
              null
            )

            }
           
           
         
         
        </div>
      {/* Main Content */}
      <main>       
            <div>
              <div style={{display: "flex",justifyContent: "center",alignItems: "center",}}>
                <aside className="headline font-nunito" style={{paddingBottom:'2rem'}}>Trending Albums</aside>
              </div>
            </div>
            <div>
              <div style={{display:'grid',gridTemplateColumns:'auto auto auto auto auto',gap:25}}>
                <Album />
                <Album />
                <Album />
                <Album />
                <Album />
                <Album />
                <Album />
                <Album />
                <Album />
                <Album />
              
              </div>
            </div>
            <div>
              <div style={{display: "flex",justifyContent: "center",alignItems: "center",paddingTop:'5rem',paddingBottom:'2rem'}}>
                <aside className="headline font-nunito">New Albums</aside>
              </div>
            </div>
            <div style={{marginBottom:'2rem'}}>
            <div style={{display:'grid',gridTemplateColumns:'auto auto auto auto auto',gap:25}}>
                <Album />
                <Album />
                <Album />
                <Album />
                <Album />
                <Album />
                <Album />
                <Album />
                <Album />
                <Album />
              
              </div>
            </div>

            <div
              className="my_profile_sub_container2"
              style={{ width: "86%", height: "300px", overflowY: "hidden" }}
            >
              <div
                className="slide-container"
                style={{ width: "80%", height: "300px" }}
              >
                <Slide>
                  {slideImages.map((slideImage, index) => (
                    <div key={index}>
                      <div
                        style={{
                          display: "flex",
                          flexDirection: "row",
                          justifyContent: "center",
                          alignItems: "center",
                          height: "300px",
                        }}
                      >
                        <img
                          src={SampleSlider1}
                          alt="Facebook"
                          className="w-25"
                          style={{ margin: "5px" }}
                        />
                        <img
                          src={SampleSlider2}
                          alt="Facebook"
                          className="w-25"
                          style={{ margin: "5px" }}
                        />
                        <img
                          src={SampleSlider3}
                          alt="Facebook"
                          className="w-25"
                          style={{ margin: "5px" }}
                        />
                        <img
                          src={SampleSlider4}
                          alt="Facebook"
                          className="w-25"
                          style={{ margin: "5px" }}
                        />
                        <img
                          src={SampleSlider5}
                          alt="Facebook"
                          className="w-25"
                          style={{ margin: "5px" }}
                        />
                        <img
                          src={SampleSlider6}
                          alt="Facebook"
                          className="w-25"
                          style={{ margin: "5px" }}
                        />
                        <img
                          src={SampleSlider7}
                          alt="Facebook"
                          className="w-25"
                          style={{ margin: "5px" }}
                        />
                        <img
                          src={SampleSlider8}
                          alt="Facebook"
                          className="w-25"
                          style={{ margin: "5px" }}
                        />
                      </div>
                    </div>
                  ))}
                </Slide>
              </div>
            </div>
       
      </main>

      <NewFooter />
    </>
  );
}

export default Home;


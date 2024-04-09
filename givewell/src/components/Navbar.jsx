import React from "react";
import "../css/Navbar.css";
import { Link,useNavigate } from "react-router-dom";
// import { a } from "react-router-dom";
const Navbar = (props) => {
  let author = localStorage.getItem('user');
  author = JSON.parse(author);
  const navigate = useNavigate(); 
  const logout = ()=>{
    localStorage.clear();
    navigate("/");
  }
  const openPop = ()=>{
    navigate('/');
    props.setStyle({
      display:"block"
    })
  }
  return (
    // <>
    //   <nav className="navbar">
    //         <div className="navbar-container">
    //             <input type="checkbox" name="" id=""/>
    //             <div className="hamburger-lines">
    //                 <span className="line line1"></span>
    //                 <span className="line line2"></span>
    //                 <span className="line line3"></span>
    //             </div> 
    //             <ul className="menu-items">
    //                 <li><Link to="/" id="hp">Givewell</Link></li>
    //                 <span className="right-section">
    //                     <li><a href="/">About Us</a></li>
    //                     <li><a href="/">Contact Us</a></li>
    //                     <li>{author ? <button onClick={()=>logout()} className="login-link">Logout</button>:<Link to="/login" className="login-link" id="openbtn">Login</Link>}</li>
    //                     <li>{author?<Link to="userprofile">Profile</Link>:<></>}</li>
    //                 </span>
    //             </ul>
    //         </div>
    //     </nav>
    // </>
<>
<nav className="navbar">
            <div className="navbar-container">
            <div className="hp">{author?author.type==='ngo'?<Link to='/foryou'>Givewell</Link>:<Link to='/'>Givewell</Link>:<Link to="/">Givewell</Link>}</div>
                <input type="checkbox" name="" id="" />
                <div className="hamburger-lines">
                    <span className="line line2"></span>
                    <span className="line line3"></span>
                    <span className="line line1"></span>
                </div> 
                <ul className="menu-items">
                        {/* <!-- <span className="right-section"> --> */}
                        <li><a href='#About'>About Us</a></li>
                        <li><a href='#contact'>Contact Us</a></li>
                        <li><button style={{border:'none',background:'none'}}>
                          
                                {author?  <div className="dropdown">
                                <button className="dropbtn"><img alt="..." src={require(`../photos/Profile_pic.png`)} className="prof-btn"/></button><div className="dropdown-content">
                                   {author.type==='user'?<Link to="/userprofile">Profile</Link>:<Link to="/nprof">
                                   Profile
                                   </Link>}<br />
                                    <a href="/"><button style={{border:'none',background:'none'}} onClick={()=>logout()} className="logout">Logout</button></a>
                            </div>
                                </div>:<button onClick={openPop} className="login-link" id="openbtn">Login</button>}
                                
                        </button></li>
                        {/* <!-- </span> --> */}
                </ul>
            </div>
        </nav>
</>
  );
};
export default Navbar;
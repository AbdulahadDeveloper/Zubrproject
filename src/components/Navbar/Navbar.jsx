import "./Navbar.css"                               
import Logo from "../../assets/logotip.png"             
import Search from "../../assets/search.svg"            
import user from "../../assets/user.svg"              
import Korzina from "../../assets/cart.svg"               
import Menu from "../../assets/menu.svg"                  
import { Link } from "react-router-dom"                     
import App from "../../App.jsx"                                 
import { useState } from "react"                                
function Navbar() {                                             
  const [Toggle, showMenu] = useState(false)                                    
 const logout = ()=>{  
  localStorage.clear()                                                
  window.location.reload(<App/>)                                   
 }                                              
  return (                                
    <div className="Navbar">                                    
     <img src={Logo} alt="" className="Logo" />                                   
     <ul className={Toggle ? "showmenu" : "ul"}>                                    
     <li id="dropdown"><h3>ABOUT COMPANY</h3>                                                                   
      <div className="Showdropdown">                                                                            
        <Link className="Link" to='./Certificates'><h6 className="h6">CERTIFICATES</h6></Link>                        
       <Link className="Link" to='./About'> <h6 id="h6">ABOUT US</h6></Link>                                            
      </div>                                                                                                                                                                                                                             
      <svg  onClick={()=> showMenu(!Toggle)} className="svgt" width="44" height="44" viewBox="0 0 44 44" fill="none" xmlns="http://www.w3.org/2000/svg">                                                      
<rect width="44" height="44" fill="#EB0029"/>   
<path d="M15 15L22 22M29 29L22 22M22 22L29 15L15 29" stroke="white" stroke-width="4"/>                                  
</svg>                                                

     </li>                                                                    
     <li><Link className="Link" to="/Catalog"><h3>Catalog</h3></Link></li>                        
     <li><Link className="Link" to="/Articles"><h3>ARTICLES</h3></Link></li>                    
     <li><Link className="Link" to="/Delivery"><h3>DELIVERY</h3></Link></li>                          
     <li><h3>CONTACTS</h3></li>                                                                   

     </ul>                                                                                              
     <img className="Nav_Menu" src={Menu} alt="" onClick={()=> showMenu(!Toggle)} />                                
     <div className="sitting">                                                                        
        <img className="search" src={Search} alt="" />                                                                            
        <hr />                                                                                      

        <Link to='./Lognup' className="Link">  <img className="user" src={user} alt="" />
          
        </Link>     
        <button className="hoverbutton" onClick={logout}>Logout</button>                                          
                                       

        <img className="korzina" src={Korzina} alt="" />                        
     </div>                                               
     <div className="number">                           
      <h2>+7 (495) 151-87-01 <br />                       
      </h2>                                         
        <h2> +7 (915) 049-35-85</h2>                        
     </div>                             
    </div>                        
  );                                                                          
}                                                             
                                                
export default Navbar;                                

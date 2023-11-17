import "./Catalog.css"
import {Link} from "react-router-dom"
import Egg from "../..//assets/th27027056b51866360e19fbdc3886cd63e32ded.jpg"
import Eggs from "../..//assets/th270270b96a1029a7f2c88ecaf44ce098cdfb41.jpg"

function Catalog() {
   return(
    <div className="Catalog">
      <h1>CATALOG   <Link className="Link" to="/"><span></span><span>/</span><span></span><span> Home</span></Link></h1>
      <div className="cards">
           <div className="card">
            <img src={Egg} alt="" />
            <h3>BERTSY</h3>
           </div>
           <div className="card1">
            <img src={Eggs} alt="" />
            <h3>BERTSY</h3>
           </div>
      </div>
    </div>
   ) 
}
export default Catalog
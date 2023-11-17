import "./Articles.css"
import {Link} from "react-router-dom"
function Articles() {
    return(
        <div className="Articles">
            <h1>ARTICLES <Link className="Link" to="/"><span></span><span>/</span> <span></span> <span>Home</span></Link></h1>
            <h2>Articles</h2>
             <div className="meet">
                <span>28.10.2014</span> <h3>BERTSY - THE PERFECT SHOES FOR ALL TIMES</h3>
             </div>
             <p>Is it possible to find shoes that can be worn for half a year or even all year long, enjoying incredible <br/> comfort, beautiful appearance and compatibility with various styles of clothing?</p>
        </div>
    )
}
export default Articles;
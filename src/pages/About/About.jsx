import {Link} from "react-router-dom"
import "./About.css"
function About() {
    return(
        <div className="About">
          <h1>ABOUT COMPANY   <Link to="/" className="Link"> / <span>home</span></Link></h1>
          <h3>About company</h3>
          <p>The ZUBR company is engaged in sewing safety shoes of impeccable quality for professional workers in various fields. We opened production in 1998, and at the moment, <br />  thanks to our extensive experience, we offer products that fully meet the wishes of customers.</p>
          <p className="p">Our safety shoes boast a number of advantages:
           
           <li className="li">incredible strength, reliability and amazing wear resistance (you can wear it for many years);</li>
           <li className="li1">excellent performance in accordance with quality standards (safety shoes are made on professional modern equipment using the latest technologies);</li>
           <li className="li2">beautiful design (among our products, there are models that look just as good as well-known brand shoes);</li>
           <li className="li3">comfort (in the production process, modern breathable materials and a special insole are used; thanks to the ergonomic block in shoes, you can walk for a very long time and your legs will not get tired at all);</li>
</p>
<p className="pen">We sell our safety shoes to partners at surprisingly low prices. They are possible thanks to work without intermediaries and large volumes of products - in total we produce about ten thousand pairs of shoes every month. Our company employs more than 100 employees, each of which is a highly qualified specialist in their field. A serious attitude to the selection of personnel helps us to keep the quality mark of our products at a high level. In order to keep up with the times, we visit specialized exhibitions and pay special attention to innovations in production.</p>     
<p className="pencil">We treat cooperation with our partners with the same responsibility. Full compliance with all pre-agreed conditions, delivery of goods just in time are the main principles of our activity. That is why we are happy to cooperate with partners, both throughout Russia and abroad.</p>
<p className="pencilcase">Convenient location - in the very center of the city - is a weighty argument in favor of cooperation with us. You can drive up to us at any convenient time and discuss all the details or contact us in any other way convenient for you. We are interested in communication both with new partners and sales representatives.</p>
<p className="pentor">Another significant advantage is the possibility of obtaining discounts when purchasing large volumes of products. All details of wholesale transactions are negotiated individually.</p>
        </div>
    )
}
export default About
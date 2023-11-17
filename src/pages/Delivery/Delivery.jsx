import {Link} from "react-router-dom"
import "./Delivery.css"
function Delivery() {
    return(
        <div className="Delivery">
            <h1>DELIVERY <Link className="Link" to="/"><span></span><span>/</span> <span></span> <span>Home</span></Link></h1>
            <h2>Delivery</h2>
            <p className="per1">Are you going to purchase professional safety shoes for your outlet? We recommend contacting the Zubr company : cooperating with us, you can purchase a wide range of <br /> beautiful models of different sizes at an affordable cost. Below we will describe the terms of cooperation.</p>
            <p className="per2">We have a huge selection of products on our website, where you can place an order. After selecting the product that suits you and sending it to the basket, indicate the <br /> desired number of boxes for each of the items.
            <li className="li">The minimum order is 1 <b>box (eight pairs).</b> The sizing  is split.</li>
            <li className="li1">Zubr employees accept orders on the website from 9:00 to 19:00. When this happens, you will receive an invoice for payment to the email address specified when filling  out.</li>
            <li className="li3">
Before registration, you will need to pay 20-30% of the cost of products .
</li>
            <li className="li3">Payment can be made to the account "TD Svyatozar" After receiving it, we complete the order, inform you, and you pay the balance.</li>
            <li className="li3">In the parcel, in addition to boxes, you will find accompanying documents: quality certificates and an invoice.</li>
</p>  
<p className="per3">In whatever region you live, we will send you a package. You can choose a convenient delivery option for you from those transport companies that are in our city. Delivery is <br /> carried out daily, from 9:00 to 19:00. You can choose both the "warehouse-warehouse" and "warehouse-doors" options.</p>   
<p className="per4">You can find out all the information regarding the work of transport companies on their websites. The transport company of your choice is solely responsible for the safety <br /> of your parcel. When issuing it, pay attention to the integrity of the packaging and the correspondence of the actual weight of the goods to the weight in the documentation. If such problems are found, you need to contact the employees of the transport company with this problem.</p>
<p className="per5">If you find a marriage or unpacking, please inform our managers within 14 days by sending a photo of this model and specifying the date of receipt of the parcel. </p>
<p className="per6">If you wish, you can carry out self-delivery from our warehouse. Call our manager in advance and specify the time and date of your arrival.
<p className="per7">If you have any questions about the order, delivery, payment, features of the goods or any other points, the managers of the Zubr company will readily give comprehensive answers to them. 
</p>
</p>
        </div>
    )
}
export default Delivery;
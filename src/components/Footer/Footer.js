import "./Footer.css"
import Hit from "../../assets/hit.gif"
function Footer() {
    return (
        <div className="Footer">
            <div className="Futer">
                <div className="At">
                    <h4 className="h4" id="f">
                        Menu
                    </h4>
                    <a id="g" href="/About" className="ah1">About company</a>
                    <a id="g" href="/Catalog" className="ah">Catalog</a>
                    <a id="g" href="/Articles" className="ah">Articles</a>
                    <a id="g" href="/Delivery" className="ah">Delivery</a>
                    <a id="g" href="#Contact" className="ah">Contacts</a>

                </div>
                <hr />
                <div className="Ad">
                    <h4 className="h4">
                        Address
                    </h4>
                    <a href="#" className="ah2">"Zubr" - footwear production.</a><br />
                    <a href="#" className="ah3">Moscow region, Balashikha, Sovetskaya st., 56</a>
                    <br />
                    <br />
                    <img src={Hit} alt="" />
                </div>
                <hr />

                <div className="Hot">
                    <a href="#Delivery" className="ah ah4">Hotline</a>
                    <h4>+7 (495) 151-87-01</h4>
                    <div className="twiter">
                        <svg width="32" height="37" viewBox="0 0 36 37" fill="none" xmlns="http://www.w3.org/2000/svg">
                            <rect x="1" y="1.32666" width="34" height="34" rx="17" stroke="#6C6C4C" stroke-width="2" />
                            <path d="M22 9.32662V12.3266H20C19.4093 12.3266 19.2176 12.0822 19 12.3266C18.7824 12.571 19 12.8379 19 13.3266V15.3266H22L21 18.3266H19V26.3266H16V18.3266H13V15.3266H16V13.3266C16 12.0741 16.285 11.0292 17 10.3266C17.715 9.62401 18.7876 9.32662 20 9.32662C21.0259 9.32662 21.4404 9.23498 22 9.32662V9.32662Z" fill="white" />
                        </svg>
                        <svg className="svg" width="32" height="37"  viewBox="0 0 36 37" fill="none" xmlns="http://www.w3.org/2000/svg">
                            <rect x="1" y="1.32666" width="34" height="34" rx="17" stroke="#6C6C4C" stroke-width="2" />
                            <path d="M27 10.3268C26.2165 10.8914 24.9181 11.0443 24 11.3268C23.5072 10.7479 23.7284 10.513 23 10.3268C22.2716 10.1406 20.7015 10.0532 20 10.3268C19.2985 10.6004 19.4217 11.692 19 12.3268C18.5783 12.9615 17.9899 13.5597 18 14.3268V15.3268C16.5622 15.3649 15.2848 14.9875 14 14.3268C12.7152 13.6661 11.8266 12.5294 11 11.3268C11 11.3268 7.63636 18.983 15 22.3268C13.315 23.4954 11.0349 23.4095 9 23.3268C16.3636 27.5065 25 23.9402 25 14.3268C24.9992 14.0939 25.0428 13.5555 25 13.3268C25.835 12.4854 26.7225 11.491 27 10.3268Z" fill="white" />
                        </svg>
                    <a href="#Delivery" className="ah ah5">Site creation</a>
                    <h5><a href="#">Descartes Media</a></h5>
                    </div>
                </div>
             

            </div>
            <hr className="art" />
            <a href="#" className="ah3 ah6">© 2023 "Zubr" - footwear production</a>
          
        </div>
    )
}
export default Footer;
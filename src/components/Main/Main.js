import "./Main.css"
import Banner from "../../assets/banner-cover.png"

function Main() {
    return (
        <div className="Main">
            <div className="Home">
                <h1>safety shoes
                </h1>
                <h3>For professionals
                </h3>
                <img src={Banner} alt="" className="banner" />
                <span>
                    <hr />
                    Safety footwear production

                </span>
            </div>
        </div>
    );
}
export default Main
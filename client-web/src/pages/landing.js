import ImagePlaceholder from "../media/img-placeholder.png";
import styles from "./landing.css";
const Landing = () => {
    return (
        <>
            <div className="post">
                <div className="ad">
                    <div className="ad1">
                        <h1>Ищите практику или стажировку?</h1>
                        YakPrak поможет вам найти её!
                        <button className="btn"> Зарегистрироваться!</button>
                    </div>
                    <img src={ImagePlaceholder} />
                </div>
            </div>

            <div className="post">
                <div className="ad">
                    <img src={ImagePlaceholder} />
                    <div className="ad1">
                        <h1>Не знаете как оформить резюме?</h1>
                        Не беспокойтесь, мы поможем вам!
                    </div>
                </div>
            </div>

            <div className="post">
                <div className="ad">
                    <div className="ad1">
                        <h1>Более 50 якутских компаний ждут вас!</h1>
                    </div>
                    <img src={ImagePlaceholder} />
                </div>
            </div>
        </>
    );
};

export default Landing;

import "./landing.css";
import React from "react";
import PropTypes from "prop-types";
import ImagePlaceholder from "../media/img-placeholder.png";

const Landing = ({ open }) => {
    return (
        <>
            <div className="post">
                <div className="ad">
                    <div className="ad1">
                        <h1>Ищите практику или стажировку?</h1>
                        YakPrak поможет вам найти её!
                        <button onClick={open} className="btn">
                            Зарегистрироваться!
                        </button>
                    </div>
                    <img src={ImagePlaceholder} alt="pic1" />
                </div>
            </div>

            <div className="post">
                <div className="ad">
                    <img src={ImagePlaceholder} alt="pic2" />
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
                    <img src={ImagePlaceholder} alt="pic3" />
                </div>
            </div>
        </>
    );
};

Landing.propTypes = {
    open: PropTypes.func
}

export default Landing;

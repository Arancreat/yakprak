import "./modal.css";
import imagePlaceholder from "../media/img-placeholder.png";

const Modal = ({ open, onClose }) => {
    if (!open) return null;

    return (
        <div className="modalOverlay">
            <div className="modalContainer">
                <img src={imagePlaceholder} alt="authPic" />
                <div className="modalRight">
                    <p onClick={onClose} className="modalCloseBtn">
                        X
                    </p>
                    <div className="modalContent">Do you want to register?</div>
                    <div className="modalBtnContainer">
                        <button className="btn">Yes</button>
                        <button onClick={onClose} className="btn">
                            Cancel
                        </button>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Modal;

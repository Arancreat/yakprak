import React from "react";
import PropTypes from "prop-types";
import TraineeLogin from "./traineeLogin";
import TraineeSignup from "./traineeSignup";

const TraineeAuth = ({ signup, onClose, onChangeAuth }) => {

    return (
        <>
            {signup ? (
                <TraineeSignup
                    onChangeAuth={() => onChangeAuth()}
                    onClose={onClose}
                />
            ) : (
                <TraineeLogin
                    onChangeAuth={() => onChangeAuth()}
                    onClose={onClose}
                />
            )}
        </>
    );
};

TraineeAuth.propTypes = {
    signup: PropTypes.bool,
    onClose: PropTypes.func,
    onChangeAuth: PropTypes.func,
};

export default TraineeAuth;

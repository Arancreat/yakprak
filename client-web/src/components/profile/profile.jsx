import React, { useState } from "react";
import PropTypes from "prop-types";
import TraineeProfileCard from "./traineeProfileCard";
import TraineeProfileCardSettings from "./traineeProfileCardSettings";

const ProfileComponent = ({ currentUser }) => {
    const [editMode, setEditMode] = useState(false);

    return (
        <div>
            {editMode ? (
                <TraineeProfileCardSettings
                    currentUser={currentUser}
                    toggleEdit={() => setEditMode(!editMode)}
                />
            ) : (
                <TraineeProfileCard
                    currentUser={currentUser}
                    toggleEdit={() => setEditMode(!editMode)}
                />
            )}
        </div>
    );
};

ProfileComponent.propTypes = {
    currentUser: PropTypes.object,
};

export default ProfileComponent;

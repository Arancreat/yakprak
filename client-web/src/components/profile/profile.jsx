import React, { useState } from "react";
import PropTypes from "prop-types";
import ProfileCard from "./profileCard";
import ProfileCardSettings from "./profileCardSettings";

const ProfileComponent = ({ currentUser }) => {
    const [editMode, setEditMode] = useState(false);

    return (
        <div>
            {editMode ? (
                <ProfileCardSettings
                    currentUser={currentUser}
                    toggleEdit={() => setEditMode(!editMode)}
                />
            ) : (
                <ProfileCard
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

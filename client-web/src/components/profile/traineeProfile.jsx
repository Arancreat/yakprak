import React, { useState } from "react";
import { useQuery } from "@tanstack/react-query";
import { ApiCurrentUserData } from "../../services/trainee";
import TraineeProfileCard from "./traineeProfileCard";
import TraineeProfileCardSettings from "./traineeProfileCardSettings";

const TraineeProfileComponent = () => {
    const [editMode, setEditMode] = useState(false);

    const {
        isLoading,
        isError,
        data: currentUser,
        error,
    } = useQuery({
        queryKey: ["currentUser"],
        queryFn: ApiCurrentUserData,
    });

    if (isLoading) {
        return <span> Loading... </span>;
    }

    if (isError) {
        return <span> Error: {error.message} </span>;
    }

    return (
        <div>
            {editMode ? (
                <TraineeProfileCardSettings
                    currentUser={currentUser.data}
                    toggleEdit={() => setEditMode(!editMode)}
                />
            ) : (
                <TraineeProfileCard
                    currentUser={currentUser.data}
                    toggleEdit={() => setEditMode(!editMode)}
                />
            )}
        </div>
    );
};

export default TraineeProfileComponent;
import React from "react";
import { useQuery } from "@tanstack/react-query";
import { ApiCurrentUserData } from "../services/trainee";
import ProfileComponent from "../components/profile/profile";

const Profile = () => {
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
        <>
            <ProfileComponent currentUser={currentUser.data} />
        </>
    );
};

export default Profile;

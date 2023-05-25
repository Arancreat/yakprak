import React from "react";
import { useQuery } from "@tanstack/react-query";
import { ApiCurrentUserData } from "../services/trainee";

const Profile = () => {
    var dateOptions = {
        year: "numeric",
        month: "numeric",
        day: "numeric",
        timezone: "UTC",
    };
    
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
            <div className="post">
                <h2>
                    {currentUser.data?.lastName} {currentUser.data?.firstName}{" "}
                    {currentUser.data?.patronymic}
                </h2>
                <div>
                    На сайте с{" "}
                    {new Date(currentUser.data?.createdAt).toLocaleString(
                        "ru",
                        dateOptions
                    )}
                </div>
                <div>
                    Пол:{" "}
                    {currentUser.data?.gender == "unknown"
                        ? "не указан"
                        : currentUser.data?.gender}
                </div>
                <div>Почта: {currentUser.data?.email}</div>
            </div>
        </>
    );
};

export default Profile;

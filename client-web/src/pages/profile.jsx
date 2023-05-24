import React from "react";
import { useQuery } from "@tanstack/react-query";
import { ApiCurrentUserData } from "../services/trainee";

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
            <div className="post">
                <h2>Профиль пользователя</h2>
                <div>Идентификатор: {currentUser.data?.id}</div>
                <div>Фамилия: {currentUser.data?.lastName}</div>
                <div>Имя: {currentUser.data?.firstName}</div>
                <div>Отчество: {currentUser.data?.patronymic}</div>
            </div>
        </>
    );
};

export default Profile;

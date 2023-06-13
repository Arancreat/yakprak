import React from "react";
import PropTypes from "prop-types";
import { useQuery } from "@tanstack/react-query";
import { ApiGetTrainee } from "../../../services/trainee";

const userDetails = ({ userId }) => {
    const dateOptions = {
        year: "numeric",
        month: "numeric",
        day: "numeric",
        timezone: "UTC",
    };

    const {
        isLoading,
        isError,
        data: resumeTrainee,
        error,
    } = useQuery({
        queryKey: ["resumeTrainee", userId],
        queryFn: async ({ queryKey }) => {
            return await ApiGetTrainee(queryKey[1]);
        },
    });

    if (isLoading) {
        return <span> Loading... </span>;
    }

    if (isError) {
        return <span> Error: {error.message} </span>;
    }

    return (
        <div className="user">
            <div className="profileInfo">
                <h2>
                    {resumeTrainee?.data.firstName}{" "}
                    {resumeTrainee?.data.lastName}{" "}
                    {resumeTrainee?.data.patronymic}
                </h2>
                <div>
                    Пол:{" "}
                    {resumeTrainee?.data.gender == "male"
                        ? "Мужской"
                        : "Женский"}
                </div>
                <div>Телефон: {resumeTrainee?.data.phone}</div>
                <div>Почта: {resumeTrainee?.data.email}</div>
                <div>
                    Дата рождения:{" "}
                    {new Date(resumeTrainee?.data.birthdate).toLocaleString(
                        "ru",
                        dateOptions
                    )}
                </div>
            </div>

            <img
                className="avatar"
                src={"http://localhost:8080" + resumeTrainee?.data.avatar}
                alt="trainee-avatar"
            />
        </div>
    );
};

userDetails.propTypes = {
    userId: PropTypes.string,
};

export default userDetails;

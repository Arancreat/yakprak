import React from "react";
import PropTypes from "prop-types";
import { useQuery } from "@tanstack/react-query";
import { ApiGetResume } from "../../../services/resume";

const resumeDetails = ({ resumeId }) => {
    const stages = (stage) => {
        if (stage == "unknown") return "Не выбран";
        if (stage == "secondary") return "Среднее общее";
        if (stage == "professional") return "Среднее профессиональное";
        if (stage == "bachelor") return "Бакалавр";
        if (stage == "master") return "Магистр";
    };

    const {
        isLoading,
        isError,
        data: receivedResume,
        error,
    } = useQuery({
        queryKey: ["receivedResume", resumeId],
        queryFn: async ({ queryKey }) => {
            return await ApiGetResume(queryKey[1]);
        },
    });

    if (isLoading) {
        return <span> Loading... </span>;
    }

    if (isError) {
        return <span> Error: {error.message} </span>;
    }

    return (
        <div>
            <h2>Резюме</h2>
            <div>Общая информация: {receivedResume?.data.aboutMe}</div>
            <div>Навыки: {receivedResume?.data.skills}</div>
            <div>Плюсы: {receivedResume?.data.pros}</div>
            <div>Минусы: {receivedResume?.data.cons}</div>
            <div>Владение языками: {receivedResume?.data.languages}</div>
            <h2>Образование</h2>
            <div>Уровень: {stages(receivedResume?.data.stage)}</div>
            <div>Институт: {receivedResume?.data.institution}</div>
            <div>Специальность: {receivedResume?.data.speciality}</div>
            <div>Год окончания: {receivedResume?.data.graduationYear}</div>
        </div>
    );
};

resumeDetails.propTypes = {
    resumeId: PropTypes.string,
};

export default resumeDetails;

import React, { useEffect, useState } from "react";
import PropTypes from "prop-types";
import { useQuery } from "@tanstack/react-query";
import { ApiGetSendedResumesByJwt } from "../../services/sendedResume";

const TraineeSendedResumes = ({ currentUser }) => {
    const {
        isLoading,
        isError,
        data: sendedResumes,
        error,
    } = useQuery({
        queryKey: ["sendedResumes"],
        queryFn: ApiGetSendedResumesByJwt,
    });

    if (isLoading) {
        return <span> Loading... </span>;
    }

    if (isError) {
        return <span> Error: {error.message} </span>;
    }

    return sendedResumes?.data.map((sendedResume, i) => (
        <div key={i}>
            Вы отправили в компанию: {sendedResume.companyId}, статус принятия:{" "}
            {sendedResume.status ? "принято!" : "ожидается"}
        </div>
    ));
};

TraineeSendedResumes.propTypes = {
    currentUser: PropTypes.object,
};

export default TraineeSendedResumes;

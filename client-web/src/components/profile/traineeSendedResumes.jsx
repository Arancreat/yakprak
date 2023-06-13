import React, { useEffect, useState } from "react";
import PropTypes from "prop-types";
import { useQuery } from "@tanstack/react-query";
import { ApiGetSendedResumesByResumeId } from "../../services/sendedResume";

const TraineeSendedResumes = ({ currentUser }) => {
    const [sendedResumes, setSendedResumes] = useState();

    const fetch = async (id) => {
        const data = await ApiGetSendedResumesByResumeId(id).then((res) => {
            return res;
        });
        setSendedResumes(data.data);
    };

    useEffect(() => {
        if (currentUser?.id) fetch(currentUser?.id);
    }, [currentUser]);

    console.log(sendedResumes);

    return sendedResumes?.map((sendedResume, i) => (
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

import React, { useState } from "react";
import { useQuery } from "@tanstack/react-query";
import { ApiGetSendedResumesByJwt } from "../../../services/sendedResume";
import ResumeModal from "../../modals/receivedResume";
import "./dashboard.css";

const Dashboard = () => {
    const [openResumeModal, setOpenResumeModal] = useState(false);
    const [resumeId, setResumeId] = useState("");
    const [companyId, setCompanyId] = useState("");

    const dateOptions = {
        year: "numeric",
        month: "numeric",
        day: "numeric",
        timezone: "UTC",
    };

    const {
        isLoading,
        isError,
        data: receivedResumes,
        error,
    } = useQuery({
        queryKey: ["receivedResumes"],
        queryFn: ApiGetSendedResumesByJwt,
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
                <h1>Полученные резюме</h1>
                {receivedResumes?.data.map((receivedResume, i) => (
                    <div className="receivedResumeRow" key={i}>
                        Создано:{" "}
                        {new Date(receivedResume.createdAt).toLocaleString(
                            "ru",
                            dateOptions
                        )}
                        <button
                            className="btn"
                            onClick={(e) => {
                                setResumeId(receivedResume.resumeId);
                                setCompanyId(receivedResume.companyId);
                                setOpenResumeModal(true);
                            }}
                        >Открыть резюме</button>
                    </div>
                ))}
            </div>

            <ResumeModal
                open={openResumeModal}
                onClose={() => setOpenResumeModal(false)}
                resumeId={resumeId}
                companyId={companyId}
            />
        </>
    );
};

export default Dashboard;

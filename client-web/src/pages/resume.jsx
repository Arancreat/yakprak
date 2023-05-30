import React, { useCallback, useEffect, useState } from "react";
import { useQuery } from "@tanstack/react-query";
import ResumeEdit from "../components/resume/resumeEdit";
import {
    ApiGetCurrentTraineeResume,
    ApiGetEducationData,
} from "../services/resume";

const Resume = () => {
    const {
        isLoading: myResumeIsLoading,
        isError: myResumeIsError,
        data: myResume,
        error: myResumeError,
    } = useQuery({
        queryKey: ["myResume"],
        queryFn: ApiGetCurrentTraineeResume,
    });

    const [educationData, setEducationData] = useState();

    const fetchEducationData = useCallback(async (resumeId) => {
        const data = await ApiGetEducationData(resumeId).then((res) => {
            return res;
        });
        setEducationData(data.data);
    });

    useEffect(() => {
        if (myResume?.data.id) fetchEducationData(myResume?.data.id);
    }, [myResume]);

    useEffect(() => {
        if (educationData?.length > 0) {
            console.log(educationData);
        }
    }, [educationData]);

    if (myResumeIsLoading) {
        return <span> Loading... </span>;
    }

    if (myResumeIsError) {
        return <span> Error: {myResumeError.message} </span>;
    }

    return (
        <div>
            <ResumeEdit myResume={myResume.data} myResumeEducation={educationData} />
        </div>
    );
};

export default Resume;

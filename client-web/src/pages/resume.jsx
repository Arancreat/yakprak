import React, { useCallback, useEffect, useState } from "react";
import { useQuery } from "@tanstack/react-query";
import ResumeEdit from "../components/resume/resumeEdit";
import { ApiGetCurrentTraineeResume } from "../services/resume";

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

    if (myResumeIsLoading) {
        return <span> Loading... </span>;
    }

    if (myResumeIsError) {
        return <span> Error: {myResumeError.message} </span>;
    }

    return <ResumeEdit myResume={myResume.data} />;
};

export default Resume;

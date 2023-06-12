import React, { useState, Fragment } from "react";
import { useInfiniteQuery, useQuery } from "@tanstack/react-query";
import { ApiCurrentUserData } from "../../../services/trainee";
import Companies from "./companies";

const CompanyList = () => {
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
            <Companies resumeId={currentUser?.data.id} />
        </>
    );
};

export default CompanyList;

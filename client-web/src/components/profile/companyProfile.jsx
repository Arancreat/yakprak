import React, { useState } from "react";
import { useQuery } from "@tanstack/react-query";
import { ApiCurrentCompanyData } from "../../services/company";
import CompanyProfileCard from "./companyProfileCard";
import CompanyProfileCardSettings from "./companyProfileCardSettings";

const CompanyProfileComponent = () => {
    const [editMode, setEditMode] = useState(false);

    const {
        isLoading,
        isError,
        data: currentCompany,
        error,
    } = useQuery({
        queryKey: ["currentCompany"],
        queryFn: ApiCurrentCompanyData,
    });

    if (isLoading) {
        return <span> Loading... </span>;
    }

    if (isError) {
        return <span> Error: {error.message} </span>;
    }

    return (
        <div>
            {editMode ? (
                <CompanyProfileCardSettings
                    currentCompany={currentCompany.data}
                    toggleEdit={() => setEditMode(!editMode)}
                />
            ) : (
                <CompanyProfileCard
                    currentCompany={currentCompany.data}
                    toggleEdit={() => setEditMode(!editMode)}
                />
            )}
        </div>
    );
};

export default CompanyProfileComponent;

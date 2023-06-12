import React, { useState, Fragment } from "react";
import { useInfiniteQuery, useQuery } from "@tanstack/react-query";
import Company from "./company";
import { ApiGetAllCompanies, ApiGetPage } from "../../../services/company";

const CompanyList = () => {
    const [searchCategoryString, setSearchCategoryString] = useState("");
    const [searchNameString, setSearchNameString] = useState("");

    // const {
    //     isLoading,
    //     isError,
    //     data: companies,
    //     error,
    // } = useQuery({
    //     queryKey: ["companies"],
    //     queryFn: ApiGetAllCompanies,
    // });

    // if (isLoading) {
    //     return <span> Loading... </span>;
    // }

    // if (isError) {
    //     return <span> Error: {error.message} </span>;
    // }

    const {
        data: companies,
        error,
        fetchNextPage,
        hasNextPage,
        isFetching,
        isFetchingNextPage,
        status,
    } = useInfiniteQuery({
        queryKey: ["companies"],
        queryFn: ApiGetPage,
        getNextPageParam: (lastPage) => lastPage.nextPage,
    });

    return status === "loading" ? (
        <p>Loading...</p>
    ) : status === "error" ? (
        <p>Error: {error.message}</p>
    ) : (
        <>
            <div className="post">
                Поиск по сфере деятельности:
                <select
                    value={searchCategoryString}
                    onChange={(e) => setSearchCategoryString(e.target.value)}
                >
                    <option value="">Все</option>
                    <option value="it">Информационные технологии</option>
                    <option value="banking">Банковская сфера</option>
                    <option value="medicine">Медицина</option>
                    <option value="building">Строительство</option>
                    <option value="education">Образование</option>
                </select>
                Поиск по названию компании:
                <input
                    type="text"
                    placeholder="Название компании"
                    value={searchNameString}
                    onChange={(e) => setSearchNameString(e.target.value)}
                />
            </div>

            {/* For Simple Get All request */}
            {/* {companies.data
                .filter((item) => {
                    return searchCategoryString == " "
                        ? item
                        : item.category
                              .toLowerCase()
                              .includes(searchCategoryString.toLowerCase());
                })
                .filter((item) => {
                    return searchCategoryString == " "
                        ? item
                        : item.companyName
                              .toLowerCase()
                              .includes(searchNameString.toLowerCase());
                })
                .map((company, index) => (
                    <Company company={company} key={index} />
                ))} */}

            {/* For Paginated Get request */}

            {companies.pages.map((group, i) => (
                <Fragment key={i}>
                    {group.data.map((company, i) => (
                        <Company company={company} key={i} />
                    ))}
                </Fragment>
            ))}

            <div className="companyLoad">
                <button
                    className="btn"
                    onClick={() => fetchNextPage()}
                    disabled={!hasNextPage || isFetchingNextPage}
                >
                    {isFetchingNextPage
                        ? "Идёт загрузка..."
                        : hasNextPage
                        ? "Загрузить ещё"
                        : "Вакансии закончились"}
                </button>
            </div>
            <div className="companyLoad">
                {isFetching && !isFetchingNextPage ? "Загрузка..." : null}
            </div>
        </>
    );
};

export default CompanyList;

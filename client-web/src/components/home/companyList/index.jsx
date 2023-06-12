import React, { useState } from "react";
import Company from "./company";

const CompanyList = () => {
    const [searchCategoryString, setSearchCategoryString] = useState("");
    const [searchNameString, setSearchNameString] = useState("");

    return (
        <>
            <div className="post">
                Поиск по категориям:
                <select
                    value={searchCategoryString}
                    onChange={(e) => setSearchCategoryString(e.target.value)}
                >
                    <option value=""> Ничего</option>
                    <option value="Финансовая сфера">Финансовая сфера</option>
                    <option value="IT-сфера">IT-сфера</option>
                    <option value="Медицина и биология">
                        Медицина и биология
                    </option>
                    <option value="Пищевая сфера">Пищевая сфера</option>
                    <option value="Развлекательная сфера">
                        Развлекательная сфера
                    </option>
                </select>
                Поиск по названию:
                <input
                    type="text"
                    value={searchNameString}
                    onChange={(e) => setSearchNameString(e.target.value)}
                />
            </div>

            {}
        </>
    );
};

export default CompanyList;

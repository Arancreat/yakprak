import React, { useState } from "react";
import Resume from "./resume";

const Dashboard = () => {
    const [searchCategoryString, setSearchCategoryString] = useState("");
    const [searchNameString, setSearchNameString] = useState("");

    return (
        <div className="post">
            <h1>Полученные резюме</h1>
        </div>
    );
};

export default Dashboard;
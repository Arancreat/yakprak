import React, { useState } from "react";
import PropTypes from "prop-types";

const EducationEdit = ({ education }) => {
    const [stage, setStage] = useState();
    const [institute, setInstitute] = useState();
    const [faculty, setFaculty] = useState();
    const [speciality, setSpeciality] = useState();
    const [graduationYear, setGraduationYear] = useState();

    return (
        <>
            <input
                name="stage"
                type="text"
                placeholder="Образование"
                value={stage}
                onChange={(e) => setStage(e.target.value)}
            />
            <input
                name="institute"
                type="text"
                placeholder="Институт"
                value={institute}
                onChange={(e) => setInstitute(e.target.value)}
            />
            <input
                name="faculty"
                type="text"
                placeholder="Факультет"
                value={faculty}
                onChange={(e) => setFaculty(e.target.value)}
            />
            <input
                name="speciality"
                type="text"
                placeholder="Специальность"
                value={speciality}
                onChange={(e) => setSpeciality(e.target.value)}
            />
            <input
                name="graduationYear"
                type="text"
                placeholder="Год окончания"
                value={graduationYear}
                onChange={(e) => setGraduationYear(e.target.value)}
            />
        </>
    );
};

EducationEdit.propTypes = {
    education: PropTypes.object,
};

export default EducationEdit;

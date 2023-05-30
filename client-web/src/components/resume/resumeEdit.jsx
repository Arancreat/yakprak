import React, { useEffect, useState } from "react";
import PropTypes from "prop-types";
import { useQueryClient, useMutation } from "@tanstack/react-query";
import { useNavigate } from "react-router-dom";
import "./resumeEdit.css";
import EducationEdit from "./educationEdit";

const ResumeEdit = ({ myResume, myResumeEducation }) => {
    const navigate = useNavigate();

    const [aboutMe, setAboutMe] = useState();
    const [skills, setSkills] = useState();
    const [pros, setPros] = useState();
    const [cons, setCons] = useState();
    const [languages, setLanguages] = useState();
    const [educations, setEducations] = useState([]);

    useEffect(() => {
        if (myResumeEducation) setEducations(myResumeEducation);
    }, [myResumeEducation]);

    const onSubmitResumeEdit = (e) => {
        e.preventDefault();

        navigate("/profile");
    };

    return (
        <div className="resumeEdit">
            <h2>Резюме</h2>
            Напишите о себе. После заполнения этого резюме, его можно будет
            отправить компаниям, зарегистрированным на этом сайте.
            <form className="resumeEditForm" onSubmit={onSubmitResumeEdit}>
                <textarea
                    name="aboutMe"
                    placeholder="О себе"
                    value={aboutMe}
                    onChange={(e) => setAboutMe(e.target.value)}
                />

                <textarea
                    name="skills"
                    placeholder="Умения"
                    value={skills}
                    onChange={(e) => setSkills(e.target.value)}
                />

                <textarea
                    name="pros"
                    placeholder="Сильные стороны"
                    value={pros}
                    onChange={(e) => setPros(e.target.value)}
                />

                <textarea
                    name="cons"
                    placeholder="Слабые стороны"
                    value={cons}
                    onChange={(e) => setCons(e.target.value)}
                />

                <input
                    name="languages"
                    type="text"
                    placeholder="Языки, например якутский или русский языки"
                    value={languages}
                    onChange={(e) => setLanguages(e.target.value)}
                />

                {educations.map((education, index) => (
                    <EducationEdit education={education} key={index} />
                ))}

                <div className="buttons">
                    <button className="btn" type="submit">
                        Сохранить
                    </button>
                    <button
                        className="btnCancel"
                        type="button"
                        onClick={(e) => navigate("/profile")}
                    >
                        Отмена
                    </button>
                </div>
            </form>
        </div>
    );
};

ResumeEdit.propTypes = {
    myResume: PropTypes.object,
    myResumeEducation: PropTypes.array,
};

export default ResumeEdit;

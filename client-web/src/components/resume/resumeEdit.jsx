import React, { useState } from "react";
import PropTypes from "prop-types";
import { useQueryClient, useMutation } from "@tanstack/react-query";
import { useNavigate } from "react-router-dom";
import "./resumeEdit.css";
import { ApiPutResumeData } from "../../services/resume";

const ResumeEdit = ({ myResume }) => {
    const navigate = useNavigate();

    const [aboutMe, setAboutMe] = useState(myResume.aboutMe);
    const [skills, setSkills] = useState(myResume.skills);
    const [pros, setPros] = useState(myResume.pros);
    const [cons, setCons] = useState(myResume.cons);
    const [languages, setLanguages] = useState(myResume.languages);
    const [stage, setStage] = useState(myResume.stage);
    const [institution, setInstitution] = useState(myResume.institution);
    const [speciality, setSpeciality] = useState(myResume.speciality);
    const [graduationYear, setGraduationYear] = useState(
        myResume.graduationYear
    );

    const queryClient = useQueryClient();

    const traineeResumeData = useMutation({
        mutationFn: async (data) => {
            return await ApiPutResumeData(data).then((res) => {
                if (res.message) {
                    queryClient.invalidateQueries({
                        queryKey: ["myResume"],
                    });
                    navigate("/profile");
                }
            });
        },
    });

    const onSubmitResumeEdit = (e) => {
        e.preventDefault();

        traineeResumeData.mutate({
            aboutMe: aboutMe,
            skills: skills,
            pros: pros,
            cons: cons,
            languages: languages,
            stage: stage,
            institution: institution,
            speciality: speciality,
            graduationYear: graduationYear,
            id: myResume.id,
        });
    };

    return (
        <div className="resumeEdit">
            <h2>Резюме</h2>
            Напишите о себе. После заполнения этого резюме, его можно будет
            отправить компаниям, зарегистрированным на данном сайте.
            <form className="resumeEditForm" onSubmit={onSubmitResumeEdit}>
                <textarea
                    name="aboutMe"
                    placeholder="Укажите информацию о себе"
                    value={aboutMe}
                    onChange={(e) => setAboutMe(e.target.value)}
                />

                <textarea
                    name="skills"
                    placeholder="Ваши умения"
                    value={skills}
                    onChange={(e) => setSkills(e.target.value)}
                />

                <textarea
                    name="pros"
                    placeholder="Ваши сильные стороны"
                    value={pros}
                    onChange={(e) => setPros(e.target.value)}
                />

                <textarea
                    name="cons"
                    placeholder="Ваши слабые стороны"
                    value={cons}
                    onChange={(e) => setCons(e.target.value)}
                />

                <input
                    name="languages"
                    type="text"
                    placeholder="Языки, например якутский, русский или английский"
                    value={languages}
                    onChange={(e) => setLanguages(e.target.value)}
                />

                <div className="education">
                    <select
                        value={stage}
                        onChange={(e) => setStage(e.target.value)}
                    >
                        <option value="unknown">Не выбран</option>
                        <option value="secondary">Среднее общее</option>
                        <option value="professional">
                            Среднее профессиональное
                        </option>
                        <option value="bachelor">Бакалавр</option>
                        <option value="master">Магистр</option>
                    </select>
                    <input
                        name="institution"
                        type="text"
                        placeholder="Учебное заведение"
                        value={institution}
                        onChange={(e) => setInstitution(e.target.value)}
                    />
                </div>

                <div className="education">
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
                </div>

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
};

export default ResumeEdit;

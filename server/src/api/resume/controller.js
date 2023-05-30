import ApiError from "../exception.js";
import Resume from "./resume.model.js";
import ResumeEducation from "./resumeEducation.model.js";

const controller = {
    getAll: async (req, res) => {
        await Resume.findAll()
            .then((response) => {
                return res.status(200).json(response);
            })
            .catch((error) => {
                error = ApiError.InternalServerError(error.stack);
                return res.status(error.status).json(error.data);
            });
    },
    getResumeByTraineeId: async (req, res) => {
        const traineeId = req.params.traineeId;
        await Resume.findOne({ where: { traineeId: traineeId } })
            .then((response) => {
                return res.status(200).json(response);
            })
            .catch((error) => {
                error = ApiError.InternalServerError(error.stack);
                return res.status(error.status).json(error.data);
            });
    },
    getEducationByResumeId: async (req, res) => {
        const resumeId = req.params.resumeId;
        await ResumeEducation.findOne({ where: { resumeId: resumeId } })
            .then((response) => {
                return res.status(200).json(response);
            })
            .catch((error) => {
                error = ApiError.InternalServerError(error.stack);
                return res.status(error.status).json(error.data);
            });
    },
    putUpdate: async (req, res) => {
        const data = req.body;
        try {
            await Resume.update(
                {
                    aboutMe: data.aboutMe,
                    skills: data.skills,
                    pros: data.pros,
                    cons: data.cons,
                    languages: data.languages,
                },
                { where: { id: data.id } }
            );

            await ResumeEducation.update(
                {
                    stage: data.stage,
                    institute: data.institute,
                    faculty: data.faculty,
                    speciality: data.speciality,
                    graduationYear: data.graduationYear,
                },
                {
                    where: { resumeId: data.id },
                }
            );

            return res
                .status(200)
                .json({ message: "Резюме успешно обновлено" });
        } catch (error) {
            error = ApiError.InternalServerError(error.stack);
            return res.status(error.status).json(error.data);
        }
    },
};

export default controller;

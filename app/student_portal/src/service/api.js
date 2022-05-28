import axios from "axios";

export const checkHealth = async (data) => {
    return await axios.get("/api/health", data);
};

export const getReport = async (id) => {
    return await axios.get(`/api/report/${id}`);
};

export const postReport = async (data) => {
    return await axios.post("/api/report/", data);
};

export const shareReport = async (data) => {
    return await axios.post("/api/report/share", data);
};

export const getStudent = async (id) => {
    return await axios.get(`/api/student/${id}`);
};

export const getStudentReports = async (id) => {
    return await axios.get(`/api/student/${id}/reports`);
};

import axios from "axios";

export const checkHealth = async (data) => {
    return await axios.get("http://localhost:8080/api/health", data);
};

export const getReport = async (id) => {
    return await axios.get(`http://localhost:8080/api/report/${id}`);
};

export const postReport = async (data) => {
    return await axios.post("http://localhost:8080/api/report/", data);
};

export const getStudent = async (id) => {
    return await axios.get(`http://localhost:8080/api/student/${id}`);
};

export const getStudentReports = async (id) => {
    return await axios.get(`http://localhost:8080/api/student/${id}/reports`);
};

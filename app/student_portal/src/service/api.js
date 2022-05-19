import axios from 'axios';

export const checkHealth = async (data) => {
  return await axios.get('http://localhost:8080/api/health', data);
};

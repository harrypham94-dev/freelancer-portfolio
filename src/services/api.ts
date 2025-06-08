import axios from 'axios';

const BASE_URL = 'http://localhost:8081';

const api = axios.create({
  baseURL: BASE_URL,
});

export const fetchAboutData = async () => {
  const response = await api.get('/api/about');
  return response.data;
};

export const fetchBlogData = async () => {
  const response = await api.get('/api/blog');
  return response.data;
};

export const fetchContactData = async () => {
  const response = await api.get('/api/contact');
  return response.data;
};

export const fetchHomeData = async () => {
  const response = await api.get('/api/home');
  return response.data;
};

export const fetchProjectsData = async () => {
  const response = await api.get('/api/projects');
  return response.data;
};

export const fetchServicesData = async () => {
  const response = await api.get('/api/services');
  return response.data;
};

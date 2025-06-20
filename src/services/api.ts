// Import JSON data
import aboutData from '../data/about.json';
import contactData from '../data/contact.json';
import projectsData from '../data/projects.json';
import servicesData from '../data/services.json';
import homeData from '../data/home.json';
import type { AboutData, BlogData, ContactData, ProjectsData, ServicesData, HomeData } from '../types';
import axios from 'axios';

const BASE_URL = 'https://freelancer-portfolio-backend.onrender.com';

const api = axios.create({
  baseURL: BASE_URL,
});

export const fetchAboutData = async (): Promise<AboutData> => {
  return aboutData;
};

export const fetchBlogData = async (): Promise<BlogData> => {
  const response = await api.get('/api/blog');
  return response.data;
};

export const fetchContactData = async (): Promise<ContactData> => {
  return contactData;
};

export const fetchProjectsData = async (): Promise<ProjectsData> => {
  return projectsData;
};

export const fetchServicesData = async (): Promise<ServicesData> => {
  return servicesData;
};

export const fetchHomeData = async (): Promise<HomeData> => {
  return homeData;
};

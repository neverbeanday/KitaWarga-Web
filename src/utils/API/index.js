import axios from 'axios';
const apiUrlDev = "http://api.kitawarga.com:3000";

// Login Service
export const postLogin = (payload) => axios.post(`${apiUrlDev}/api/auth/signin`);

// ==================== RT ====================
export const getListRT = (payload) => axios.get(`${apiUrlDev}/api/admin/list/rt`);
export const postAddRT = (payload) => axios.post(`${apiUrlDev}/api/admin/insert/rt`);
export const postUpdateRT = (payload) => axios.post(`${apiUrlDev}/api/admin/update/rt`);
export const postDeleteRT = (payload) => axios.post(`${apiUrlDev}/api/admin/delete/rt`);

// ==================== RW ====================
export const getListRW = (payload) => axios.get(`${apiUrlDev}/api/admin/list/rw`);
export const postAddRW = (payload) => axios.post(`${apiUrlDev}/api/admin/insert/rw`);
export const postUpdateRW = (payload) => axios.post(`${apiUrlDev}/api/admin/update/rw`);
export const postDeleteRW = (payload) => axios.post(`${apiUrlDev}/api/admin/delete/rw`);

// ==================== Perumahan ====================
export const getListPerumahan = (payload) => axios.get(`${apiUrlDev}/api/admin/list/perumahan`);
export const postAddPerumahan = (payload) => axios.post(`${apiUrlDev}/api/admin/insert/perumahan`);
export const postUpdatePerumahan = (payload) => axios.post(`${apiUrlDev}/api/admin/update/perumahan`);
export const postDeletePerumahan = (payload) => axios.post(`${apiUrlDev}/api/admin/delete/perumahan`);

// ==================== Warga ====================
export const getListWarga = (payload) => axios.post(`${apiUrlDev}/api/admin/list/warga`);
export const postAddWarga = (payload) => axios.post(`${apiUrlDev}/api/admin/insert/warga`);
export const postUpdateWarga = (payload) => axios.post(`${apiUrlDev}/api/admin/update/warga`);
export const postDeleteWarga = (payload) => axios.post(`${apiUrlDev}/api/admin/delete/warga`);
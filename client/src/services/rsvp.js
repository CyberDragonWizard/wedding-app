import api from './apiConfig';


export const createRSVP = async (data) => {
    const resp = await api.post('/rsvps', { post: data });
    return resp.data;
}

// export const updateRSVP = async (id, Data) => {
//     const resp = await api.put(`/rsvps/${id}`, { post: Data });
//     return resp.data;
// }

// export const destroyRSVP = async (id) => {
//     const resp = await api.delete(`/rsvps/${id}`);
//     return resp;
// }
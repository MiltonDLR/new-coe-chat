import axios from 'axios';
const GETTERS = import.meta.env.VITE_GETTERS;
const PRODUCER = import.meta.env.VITE_PRODUCER;

const getContacts = async () => {
    try {
        const {
            data: res,
            status,
            statusText,
        } = await axios.get(`${GETTERS}/contact`);

        if (status === 200) {
            return res;
        } else {
            Swal.fire({
                title: 'Error',
                icon: 'error',
                text: "couldn't fetch data",
            });
            return [];
        }
    } catch (error) {
        Swal.fire({
            title: 'Error',
            icon: 'error',
            text: error.message,
        });
        return [];
    }
};

const getContactById = (idContact) => {
    return axios.get(`${GETTERS}/contact/${idContact}`);
};

const saveContact = (contact) => {
    return axios.post(`${PRODUCER}/contact`, contact);
};

export { getContacts, getContactById, saveContact };

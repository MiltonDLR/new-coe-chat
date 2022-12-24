import { getContacts } from '../../services/contact';
import { getContacts as getAll } from './contacts.slice';
import Swal from 'sweetalert2';

export const getContactsData = () => {
    return async (dispatch) => {
        try {
            const res = await getContacts();
            dispatch(getAll(res));
        } catch (error) {
            Swal.fire({
                title: 'Error',
                text: error.message,
                icon: 'error',
            });
        }
    };
};

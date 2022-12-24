import React, { useEffect, useState } from 'react';
import Header from '../../shared/Header';
import SignIn from '../components/SignIn';
import SignUp from '../components/SignUp';
import { useSelector, useDispatch } from 'react-redux';
import { getContactsData } from '../../features/contacts/contacts.actions';
import Swal from 'sweetalert2';
import { useNavigate } from 'react-router-dom';
import { saveContact } from '../../services/contact';

const Auth = () => {
    const navigate = useNavigate();
    const contactsState = useSelector((state) => state.contacts);
    const dispatch = useDispatch();
    const [isSignIn, setIsSignIn] = useState(true);
    const [errors, setErrors] = useState('');
    const [contact, setContact] = useState({
        contactId: 0,
        firstName: '',
        lastName: '',
        profilePhoto: '',
        phoneNumber: '',
        status: 'OFFLINE',
    });

    const fetchContacts = () => {
        dispatch(getContactsData());
    };

    const handleSignInSubmit = () => {
        let loggedContact = contactsState.find(
            (c) => c.phoneNumber === parseInt(contact.phoneNumber)
        );
        if (loggedContact === undefined) {
            Swal.fire({
                title: 'Contact',
                text: 'Contact not found. Try again.',
                icon: 'warning',
            });
        } else {
            navigate(`/profile/${loggedContact.contactId}`);
        }
    };
    const handleSignUpSubmit = () => {
        if (isValidNewContact()) {
            saveContact(contact).then((res) => {
                if (res.status === 200) {
                    setTimeout(() => {
                        dispatch(getContactsData());
                        setTimeout(() => {
                            handleSignInSubmit();
                        }, 2000);
                    }, 3000);
                }
            });
            return;
        }
    };

    const isValidNewContact = () => {
        let errores = '';
        if (contact.firstName === '')
            errores = errores + ' First Name is Mandatory!. \n';

        if (contact.lastName === '')
            errores = errores + ' Last Name is Mandatory!. \n';

        if (contact.phoneNumber === '')
            errores = errores + ' Phone Number is Mandatory!. \n';

        setErrors(errores);
        return errores === '';
    };

    const handleNumberChange = (e) => {
        setErrors('');
        let reg = /^\d{0,15}$/;
        //Si es mayor a 15 characters no hacer nada
        if (e.target.value.length > 15) return;
        //Si se ingresa un character que no es numero, agregar mensaje de error
        if (!reg.test(e.target.value)) {
            setErrors('Only numbers are valid!');
            return;
        }

        //Si todo es correcto o se borra el valor del campo. Se actualiza
        if (reg.test(e.target.value) || e.target.value === '') {
            setContact({ ...contact, phoneNumber: e.target.value });
        }
    };

    const handleTextChange = (e) => {
        setContact({ ...contact, [e.target.name]: e.target.value });
    };

    const handlePhotoChange = (e) => {
        var reader = new FileReader();
        reader.readAsDataURL(e.target.files[0]);
        reader.onload = function () {
            setContact({
                ...contact,
                profilePhoto: reader.result.split(',')[1],
            });
        };
        reader.onerror = function (error) {
            Swal.fire({
                title: 'Profile Photo',
                text: error,
                icon: 'error',
            });
        };
    };

    const getSelectedForm = () => {
        if (isSignIn)
            return (
                <div className="w-full flex items-center flex-col">
                    <SignIn
                        contact={contact}
                        handlePhone={handleNumberChange}
                        submit={handleSignInSubmit}
                    />
                </div>
            );
        return (
            <div className="w-full flex items-center flex-col">
                <SignUp
                    contact={contact}
                    handlePhone={handleNumberChange}
                    handleText={handleTextChange}
                    handlePhoto={handlePhotoChange}
                    submit={handleSignUpSubmit}
                />
            </div>
        );
    };

    const handleFormChange = (e) => {
        setErrors('');
        setIsSignIn(!isSignIn);
    };

    useEffect(() => {
        fetchContacts();
    }, []);

    return (
        <div className="h-[100vh]">
            <Header />
            <div className="h-auto">
                <div className="w-full flex justify-center mt-2">
                    {getSelectedForm()}
                </div>
                <div className="w-full flex items-center flex-col">
                    {errors !== '' ? (
                        <span className="w-10/12 text-red-500 text-center whitespace-pre-line">
                            {errors}
                        </span>
                    ) : (
                        <span></span>
                    )}
                </div>
                <div className="w-full flex justify-center mt-2">
                    <button
                        onClick={handleFormChange}
                        className="w-fit hover:text-blue-700 active:text-blue-900 mb-5"
                    >
                        {isSignIn
                            ? 'create account'
                            : 'log in with your account'}
                    </button>
                </div>
            </div>
        </div>
    );
};

export default Auth;

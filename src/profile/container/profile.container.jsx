import { Button } from '@mui/material';
import React, { useEffect, useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { useNavigate, useParams } from 'react-router-dom';
import { getContactsData } from '../../features/contacts/contacts.actions';
import Swal from 'sweetalert2';
import ProfilePic from '../../assets/images/CatSticker.png';

const Profile = () => {
    const { idContact } = useParams();
    const navigate = useNavigate();
    const contactsState = useSelector((state) => state.contacts);
    const dispatch = useDispatch();
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

    const getContact = () => {
        let loggedContact = contactsState.find(
            (c) => c.contactId === parseInt(idContact)
        );
        if (loggedContact === undefined) {
            Swal.fire({
                title: 'Contact',
                text: 'Contact not found. Try again.',
                icon: 'warning',
            });
        } else {
            setContact(loggedContact);
        }
    };

    useEffect(() => {
        fetchContacts();
        getContact();
    }, []);

    return (
        <>
            <div className="h-[15vh] bg-red-500 w-full flex justify-center items-center">
                <h1 className="font-staatliches text-white text-5xl">
                    COE Chat
                </h1>
            </div>
            <div className="bg-gray-200 w-full flex justify-center">
                <div className="w-full md:w-6/12 flex flex-col min-h-[85vh]">
                    <div className="w-full flex justify-center my-5 ">
                        <img
                            src={`data:image/jpeg;base64,${contact.profilePhoto}`}
                            className="rounded-full h-[150px] w-[150px] border-2 border-black"
                        />
                    </div>
                    <h2 className="text-4xl text-gray-500 font-public-sans font-semibold text-center mt-5">
                        {contact.status}
                    </h2>
                    <div className="w-full mt-2 flex justify-evenly mb-5">
                        <Button variant="outlined" className="w-1/12">
                            <span className="material-symbols-outlined">
                                edit
                            </span>
                        </Button>
                        <Button
                            color="error"
                            variant="outlined"
                            className="w-1/12"
                        >
                            <span className="material-symbols-outlined">
                                delete
                            </span>
                        </Button>
                    </div>
                    <div className="w-full flex flex-col h-full">
                        <div className="flex flex-col bg-white h-[100px] justify-around px-5 mb-5">
                            <h4 className="text-xl font-semibold font-public-sans">
                                Phone Number
                            </h4>
                            <h5 className="text-md font-public-sans">
                                {contact.phoneNumber}
                            </h5>
                        </div>
                        <div className="flex flex-col bg-white h-[100px] justify-around px-5 mb-5">
                            <h4 className="text-xl font-semibold font-public-sans">
                                First Name
                            </h4>
                            <h5 className="text-md font-public-sans">
                                {contact.firstName}
                            </h5>
                        </div>
                        <div className="flex flex-col bg-white h-[100px] justify-around px-5 mb-5">
                            <h4 className="text-xl font-semibold font-public-sans">
                                Last Name
                            </h4>
                            <h5 className="text-md font-public-sans">
                                {contact.lastName}
                            </h5>
                        </div>
                    </div>
                </div>
            </div>
        </>
    );
};

export default Profile;

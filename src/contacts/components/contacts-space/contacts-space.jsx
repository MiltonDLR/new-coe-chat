import React, { useEffect, useState } from 'react';
import { getContacts } from '../../../services/contact';

import Contact from '../contact/contact';

import Styles from './contacts-space.module.css';

function ContactsSpace() {
    const [contacts, setContacts] = useState([]);

    const fetchContacts = async () => {
        const array = await getContacts();
        setContacts(array);
        console.log(array);
    };

    useEffect(() => {
        const f = async () => {
            await fetchContacts();
        };

        f();
    }, []);

    return (
        <div className={Styles.contacts}>
            {contacts.map((c) => (
                <Contact
                    key={c.contactId}
                    contactId={c.contactId}
                    name={c.firstName}
                    lastname={c.lastName}
                    phone={c.phoneNumber}
                    profilePhoto={c.profilePhoto}
                ></Contact>
            ))}
        </div>
    );
}

export default ContactsSpace;

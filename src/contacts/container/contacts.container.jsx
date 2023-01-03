import React from 'react';
import ContactsHeader from '../components/contact-header/contacts-header';
import ContactsSpace from '../components/contacts-space/contacts-space';

import Styles from './contacts.module.css';

function Contacts() {
    return (
        <div className={Styles.fondo}>
            <ContactsHeader />
            <ContactsSpace></ContactsSpace>
        </div>
    );
}
export default Contacts;

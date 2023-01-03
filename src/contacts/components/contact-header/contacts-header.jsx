import React from 'react';
import Module from './contacts-header.module.css';

function ContactsHeader() {
    return (
        <div className={Module.header}>
            <h2 className={Module.titlePage}>Contacts</h2>
            <button>Return</button>
        </div>
    );
}

export default ContactsHeader;

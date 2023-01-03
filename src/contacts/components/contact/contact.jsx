import React from 'react';
import PropTypes from 'prop-types';

import Styles from './contact.module.css';

function Contact({ contactId, name, lastname, phone, profilePhoto }) {
    return (
        <div className={Styles.contact}>
            <div className={Styles.contactInfo}>
                <strong>{name + ' ' + lastname}</strong>
            </div>
            <div className={Styles.contactInfo}>
                <p>{phone}</p>
                <img
                    src={`data:image/jpeg;base64,${profilePhoto}`}
                    className={Styles.contactPic}
                />
            </div>
        </div>
    );
}

Contact.propTypes = {
    contactId: PropTypes.number.isRequired,
    name: PropTypes.string.isRequired,
    lastname: PropTypes.string.isRequired,
    phone: PropTypes.number.isRequired,
    profilePhoto: PropTypes.string.isRequired,
};

export default Contact;

import React from 'react';
import Module from './conversation-header.module.css';

function ConversationHeader() {
    return (
        <div className={Module.header}>
            <h2 className={Module.titlePage}>COE Chat</h2>
            <button>Profile</button>
            <button>Contacts</button>
            <button>Log Out</button>
        </div>
    );
}

export default ConversationHeader;

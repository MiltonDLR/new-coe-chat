import React from 'react';
import PropTypes from 'prop-types';

import Styles from './conversation.module.css';

function Conversation(conversationId, conversationName) {
    return (
        <div className={Styles.conversation}>
            <div className={Styles.conversationInfo}>
                <strong>{conversationName}</strong>
                <p>{conversationId}</p>
            </div>
        </div>
    );
}

Conversation.PropTypes = {
    coversationId: PropTypes.number.isRequired,
    conversationName: PropTypes.string.isRequired,
};

export default Conversation;

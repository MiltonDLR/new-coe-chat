import React from 'react';
import ConversationHeader from '../components/conversation-header/conversation-header';
import ConversationsSpace from '../components/conversation-space/conversation-space';

import Styles from './conversations.module.css';

function Conversations() {
    return (
        <div className={Styles.fondo}>
            <ConversationHeader />
            <ConversationsSpace />
        </div>
    );
}
export default Conversations;

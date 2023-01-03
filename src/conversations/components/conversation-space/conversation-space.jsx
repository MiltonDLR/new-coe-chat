import React, { useEffect, useState } from 'react';

import Conversation from '../conversation/conversation';

import Styles from './conversation-space.module.css';

function ConversationsSpace() {
    const [conversations, setConversations] = useState([]);

    /*  const fetchConversations = async () => {
        const array = await getConversations();
        setContacts(array);
        console.log(array);
    };

    useEffect(() => {
        const f = async () => {
            await fetchContacts();
        };

        f();
    }, []);
*/
    return (
        <div className={Styles.conversation}>
            <Conversation />
        </div>
    );
}

export default ConversationsSpace;

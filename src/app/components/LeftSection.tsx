import React from 'react'
import styles from '@/styles/LeftSection.module.css'

const LeftSection = () => {
    const allChats = [
        {
            id: 1,
            chatName: 'This is sample Chat 1 for chatgpt...',
        },
        {
            id: 2,
            chatName: 'This is sample Chat 2 for chatgpt...',
        },
        {
            id: 3,
            chatName: 'This is sample Chat 3 for chatgpt...',
        },
        {
            id: 4,
            chatName: 'This is sample Chat 4 for chatgpt...',
        },
        {
            id: 5,
            chatName: 'This is sample Chat 5 for chatgpt...',
        },
    ]
    return <div>LeftSection
        <div>
            {allChats.map(chat => (
                <div key={chat.id}>
                    <p>{chat.chatName}</p>
                </div>
            ))}
        </div>
        <div></div>
    </div>
}

export default LeftSection

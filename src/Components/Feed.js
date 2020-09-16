import React from 'react'
import './Feed.css'
import StoryReel from './StoryReel'
import MessageSender from './MessageSender'
import Post from './Post'

function Feed() {
    return (
        <div className="feed">
            <StoryReel />
            <MessageSender />
            <Post
                profilePic="https://avatars2.githubusercontent.com/u/42527972?s=400&u=c6b5fb62eacf4ecb9d4932a7e7455313e17195fe&v=4"
                message="This is message"
                timestamp="This is timestamp"
                username="Francis"
                image='https://code.org/shared/images/social-media/codeorg2019_social.png'
            />
        </div>
    )
}

export default Feed

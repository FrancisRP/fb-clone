import userEvent from '@testing-library/user-event'
import React from 'react'
import './Sidebar.css'
import SidebarRow from "./SidebarRow"
import SecurityIcon from '@material-ui/icons/Security';
import HistoryIcon from '@material-ui/icons/History';
import PeopleIcon from '@material-ui/icons/People';
import GroupIcon from '@material-ui/icons/Group';
import StorefrontIcon from '@material-ui/icons/Storefront';
import VideoLibraryIcon from '@material-ui/icons/VideoLibrary';
import ExpandMoreIcon from '@material-ui/icons/ExpandMore';
import InsertInvitationIcon from '@material-ui/icons/InsertInvitation';
import BookmarkIcon from '@material-ui/icons/Bookmark';

function Sidebar() {
    return (
        <div className="sidebar">
            <SidebarRow 
                src="https://avatars2.githubusercontent.com/u/42527972?s=460&
                    u=c6b5fb62eacf4ecb9d4932a7e7455313e17195fe&v=4"
                title='Francis Pegenia' 
            />
            <SidebarRow 
                Icon={SecurityIcon} 
                title="COVID-19 Information Center" 
            />
            <SidebarRow Icon={PeopleIcon} title="Friends" />
            <SidebarRow Icon={HistoryIcon} title="Memories" />
            <SidebarRow Icon={GroupIcon} title="Groups" />
            <SidebarRow Icon={StorefrontIcon} title="Marketplace" />
            <SidebarRow Icon={InsertInvitationIcon} title="Events" />
            <SidebarRow Icon={VideoLibraryIcon} title="Videos" />
            <SidebarRow Icon={BookmarkIcon} title ="Saved" />
            <SidebarRow Icon={ExpandMoreIcon} title ="See More" />
        </div>
    )
}

export default Sidebar

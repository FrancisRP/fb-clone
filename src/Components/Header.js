import React from 'react'
import './Header.css'
import SearchIcon from '@material-ui/icons/Search';
import HomeIcon from '@material-ui/icons/Home';
import SubscriptionsIcon from '@material-ui/icons/Subscriptions';
import StoreMallDirectoryIcon from '@material-ui/icons/StoreMallDirectory';
import PeopleIcon from '@material-ui/icons/People';
import { Avatar, IconButton } from "@material-ui/core";
import AddIcon from '@material-ui/icons/Add';
import ForumIcon from '@material-ui/icons/Forum';
import NotificationsActiveIcon from '@material-ui/icons/NotificationsActive';
import ExpandMoreIcon from '@material-ui/icons/ExpandMore';

function Header() {
    return (
        <div className="header">
            <div className="header__left">
                <img src="//upload.wikimedia.org/wikipedia/commons/thumb/5/51/Facebook_f_logo_%282019%29.svg/100px-Facebook_f_logo_%282019%29.svg.png" 
                alt=""
                />
                <div className="header__input">
                 <SearchIcon />
                 <input  placeholder="Search Facebook" />
                </div>
            </div>

            <div className="header__center">
                <div className="header__option header__option--active">
                    <HomeIcon fontSize="large" />
                </div>
                <div className="header__option">
                    <SubscriptionsIcon fontSize="large"/>
                </div>
                <div className="header__option">
                    <StoreMallDirectoryIcon fontSize="large"/>
                </div>
                <div className="header__option">
                    <PeopleIcon fontSize="large"/>
                </div>
            </div>

            <div className="header__right">
                <div className="header__info">
                    <Avatar />
                    <h4>Francis</h4>
                </div>

                <IconButton>
                    <AddIcon />
                </IconButton >

                <IconButton>
                    <ForumIcon />
                </IconButton>  

                <IconButton>
                    <NotificationsActiveIcon />
                </IconButton> 
                    
                <IconButton>
                    <ExpandMoreIcon />
                </IconButton>    
            </div>
        </div>
    )
}

export default Header

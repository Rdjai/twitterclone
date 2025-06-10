import React from 'react'
import { House, Search, Bell, Mail, Users, User, MoreHorizontalIcon, X } from 'lucide-react'
import logo from '../assets/logo.png'
const LeftComponent = () => {
    return (
        <div className='leftcomponent'>
            <div className="icon">
                {/* <img src={logo} alt="" srcset="" height={50} /> */}
                Tweens <br />
            </div>
            <div className="menu">
                <ul >
                    <li className='menuitems'>
                        <House />
                        <h4>Home</h4>
                    </li>
                    <li className='menuitems'>
                        <Search />
                        <h4>Explore</h4>
                    </li>
                    <li className='menuitems'>
                        <Bell />
                        <h4>Notification</h4>
                    </li>
                    <li className='menuitems'>
                        <Mail />
                        <h4>messages</h4>
                    </li>
                    <li className='menuitems'>
                        <Users />
                        <h4>communities</h4>
                    </li>
                    <li className='menuitems'>
                        <User />
                        <h4>profile</h4>
                    </li>
                    <li className='menuitems'>
                        <MoreHorizontalIcon />
                        <h4>profile</h4>
                    </li>
                    <div className="post_btn">
                        <p>Post</p>
                    </div>
                    <div className="profilecard">
                        <img src="https://pbs.twimg.com/profile_images/1834111746761777152/AnOcYg2N_400x400.jpg" alt="" srcset="" height={50} className='profileicon' />
                        <div className="details">
                            <p>Rdj Kashyap</p>
                            <h6>@RdKashyap</h6>

                        </div>
                        {/* <MoreHorizontalIcon /> */}
                    </div>
                </ul>

            </div>
        </div>
    )
}

export default LeftComponent

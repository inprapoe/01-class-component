import React, { Component } from 'react';
import './User.css';

import {IoLocationOutline} from 'react-icons/io5'


class User extends Component {

    render() {

        return (
            <li className="flex flex-col items-center justify-between w-full max-w-xs mx-auto space-y-5 overflow-hidden text-center transition duration-300 transform bg-white rounded-lg shadow-lg hover:shadow-xl hover:scale-105">
                <div className="flex flex-col items-center p-8 space-y-5">
                    <p className="flex items-center space-x-4 text-sm font-semibold "><IoLocationOutline/>{this.props.user.address.city}</p>
                    <div className="grid bg-white rounded-full shadow-md h-44 w-44 place-items-center">
                        <div className="user-pic">
                            <img src={this.props.picSrc} alt="" />
                        </div>
                    </div>
                    <div className="flex flex-col items-center">
                        <h2 className="mb-1 text-xl font-semibold text-blue-700">{this.props.user.name}</h2>
                        <p className="text-xs">{this.props.user.email}</p>
                    </div>
                    <p className="text-sm text-gray-500"><i>"{this.props.user.company.catchPhrase}"</i></p>
                </div>
                <button className="grid w-full h-12 mx-8 mb-8 text-sm font-semibold tracking-widest text-white transition duration-300 bg-blue-600 place-items-center hover:bg-blue-700">FOLLOW</button>
            </li>
        )
    }
}

export default User;

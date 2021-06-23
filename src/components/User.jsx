import React, { Component } from 'react';
import './User.css';

import {IoLocationOutline} from 'react-icons/io5'

class User extends Component {

    render() {

        return (
            <li className="justify-between text-center max-w-xs mx-auto w-full space-y-5 bg-white shadow-lg rounded-lg overflow-hidden hover:shadow-xl transition duration-300 transform hover:scale-105 flex flex-col items-center">
                <div className="flex space-y-5 flex-col items-center p-8">
                    <p className="text-sm flex items-center space-x-4 font-semibold "><IoLocationOutline/>{this.props.user.address.city}</p>
                    <div className="h-44 w-44 rounded-full grid place-items-center bg-white shadow-md">
                        <div className="user-pic">
                            <img src={this.props.picSrc} alt="" />
                        </div>
                    </div>
                    <div className="flex flex-col items-center">
                        <h2 className="text-xl font-semibold mb-1 text-blue-700">{this.props.user.name}</h2>
                        <p className="text-xs">{this.props.user.email}</p>
                    </div>
                    <p className="text-gray-500 text-sm"><i>"{this.props.user.company.catchPhrase}"</i></p>
                </div>
                <div className="grid grid-cols-2 w-full border-t">
                    <button className="h-12 w-full grid place-items-center bg-blue-600 text-white font-semibold text-sm hover:bg-blue-700 transition duration-300 tracking-widest">FOLLOW</button>
                    <button className="h-12 w-full grid place-items-center bg-blue-100 text-blue-600 font-semibold text-sm hover:bg-blue-400 transition duration-300 tracking-widest hover:text-white">MESSAGE</button>
                </div>
            </li>
        )
    }
}

export default User;

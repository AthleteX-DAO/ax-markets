import React, { useState} from "react";
import AccountSheet from "./widgets/AccountCircle";

const TopNavigationBar = () => {
    return (
        <nav className="bg-gray-800 p-4">
            <div className="container mx-auto flex justify-between items-center">
                <div className="text-white text-lg font-bold">My App</div>
                <div className="space-x-4">

                    <AccountSheet />
                </div>
            </div>
        </nav>
    );
}

export default TopNavigationBar;
import React from 'react';

const BottomNavigationBar: React.FC = () => {
    return (
        <div className="bottom-navigation-bar">
            <div className="copyright">
                <p>&copy; {new Date().getFullYear()} Ax Markets. All rights reserved.</p>
            </div>
        </div>
    );
};

export default BottomNavigationBar;
import React from 'react';
import CreatePost from './card/card';
import TopBar from './navbar/Navbar';


const Home = ({ jwt_token }) => {
    return (
        <div>
            <TopBar/>
            {jwt_token && <CreatePost/>}
        </div>
    );
};

export default Home;
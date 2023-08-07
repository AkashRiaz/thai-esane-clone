import React from 'react';
import PageCover from '../../../components/PageCover/PageCover';
import homeBanner from '../../../assets/pageCover/03.png'

const Home = () => {
    return (
        <div>
           <PageCover bgImg={homeBanner} coverTitle={"THAI ESANE"}></PageCover>
        </div>
    );
};

export default Home;
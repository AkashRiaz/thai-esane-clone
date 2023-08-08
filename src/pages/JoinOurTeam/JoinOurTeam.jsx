import React from 'react';
import PageCover from '../../components/PageCover/PageCover';
import teamImage from '../../assets/pageCover/join-our-team.jpg'
import JoinForm from './JoinForm';
import OtherPageSlider from '../../components/PageCover/OtherPageSlider';

const JoinOurTeam = () => {
    return (
        <div>
           <OtherPageSlider coverTitle={"Join Our Team"}></OtherPageSlider>
            <div>
            <div className="grid md:grid-cols-2 grid-cols-1 md:my-20 my-10">
            <div className="left-side flex justify-center">
              <div className="w-7/12">
              <h2 className="md:text-5xl text-3xl font-normal text-black  md:mb-7 mb-4">Send Your Resume</h2>
              <p>Thank you for your interest in joining our team. Please submit your information and a copy of your resume for consideration.</p>
              </div>
            </div>
            <div className="right-side">
              <JoinForm></JoinForm>
            </div>
          </div>
            </div>
        </div>
    );
};

export default JoinOurTeam;
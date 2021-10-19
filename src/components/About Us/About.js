import React from 'react';

const About = () => {
    return (
        <div>
            <div>
                <h2 className="text-center mt-5">Our Vision/Mission and Values</h2>
               <div className="container">
               <h4>Vision</h4>
                <hr />
                <p>Yale New Haven Health enhances the lives of the people we serve by providing access to high value, patient-centered care in collaboration with those who share our values.</p>
                <h4>Mission</h4>
                <hr />
                <p>Yale New Haven Health is committed to innovation and excellence in patient care, teaching, research and service to our communities</p>
                <h4>Values</h4>
                <hr />
                <p>
                    <li>Integrity  Doing the right thing</li> 
                    <li>Patient-Centered Putting patients and families first</li> 
                    <li>Respect  Valuing all people</li> 
                    <li>Accountability  Being responsible and taking action</li> 
                    <li>Compassion  Being empathetic.</li>
                    </p>
               </div>
            </div>
        </div>
    );
};

export default About;
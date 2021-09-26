import React from 'react';
import '../Person/Person.css'
const PersonDetails = (props) => {
    const { img, name, designation } = props.person;


    return (
        <div className="p-2 mb-2 person-bg">
            <div className="d-flex justify-content-evenly align-items-center    ">
                <img src={img} className="small-image" alt="" />
                <div>
                    <h5><small>{name} <i class="fas fa-check-circle icon"></i></small></h5>
                    <h6><small>{designation}</small></h6>
                </div>
            </div>
        </div>
    );
};

export default PersonDetails;
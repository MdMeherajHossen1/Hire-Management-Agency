import React from 'react';
import './Person.css'
const Person = (props) => {
    const { name, age, salary, designation, country, img } = props.person;

    return (
        <div>
            <div class="col">
                <div class="card py-2 border-0 person-bg">
                    <img src={img} class="image " alt="..." />
                    <div class="card-body">
                        <h5 class="card-title">Name:  {name}</h5>
                        <h6> Designation:  {designation}</h6>
                        <h6>Age: {age}</h6>
                        <h6><small>Country: {country}</small></h6>
                        <h6>Salary: {salary}</h6>
                        <button className="btn btn-success" onClick={() => props.handleHirePerson(props.person)}> <i class="fab fa-hire-a-helper"></i> Hire Now</button>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Person;
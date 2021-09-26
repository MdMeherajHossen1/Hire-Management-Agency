import React from 'react';
import '../Person/Person.css'
import PersonDetails from '../PersonDetails/PersonDetails';
const PersonCart = (props) => {
    const { personCart } = props;
    let totalSalaries = 0;
    for (const person of personCart) {
        totalSalaries += parseInt(person.salary);
    }


    return (
        <div className="sticky-top ms-2">
            <div className="person-bg p-3">
                <h5>Total Persons:  {personCart.length}</h5>
                <h6>Total Salaries:$  {totalSalaries}</h6>
            </div>
            {/* person details component */}
            <div className="mt-3">
                <h5 className="text-center"><small>Hired persons information</small></h5>
                {
                    personCart.map(person => <PersonDetails
                        person={person}
                        key={person.id}
                    ></PersonDetails>)
                }
            </div>
        </div>
    );
};

export default PersonCart;
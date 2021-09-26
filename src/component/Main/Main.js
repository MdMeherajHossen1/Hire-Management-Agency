import React, { useState, useEffect } from 'react';
import Person from '../Person/Person';
import PersonCart from '../PersonCart/PersonCart';
import './Main.css'

const Main = () => {
    const [persons, setpersons] = useState([]);
    const [personCart, setPersonCart] = useState([])
    useEffect(() => {
        fetch('/management.JSON')
            .then(res => res.json())
            .then(data => setpersons(data))
    }, [])

    const handleHirePerson = person => {
        const seletedPerson = [...personCart, person];
        setPersonCart(seletedPerson)
    }
    return (
        <div className="container-fluid main-bg">
            <div className="row g-0 pt-4">
                {/* all persons component */}
                <div className="col-md-9">
                    <div className="row row-cols-md-3 g-3">
                        {
                            persons.map(person => <Person
                                key={person.key}
                                person={person}
                                handleHirePerson={handleHirePerson}
                            ></Person>)
                        }
                    </div>
                </div>

                {/* person details Cart Component */}
                <div className="col-md-3">
                    <PersonCart
                        personCart={personCart}
                    ></PersonCart>
                </div>

            </div>
        </div>
    );
};

export default Main;
import React, { useState, useEffect } from 'react';
import Person from '../Person/Person';
import './Main.css'

const Main = () => {
    const [persons, setpersons] = useState([]);
    console.log(persons)
    useEffect(() => {
        fetch('/management.JSON')
            .then(res => res.json())
            .then(data => setpersons(data))
    }, [])
    console.log(persons)
    return (
        <div className="container-fluid main-bg">
            <div className="row g-0 pt-4">

                <div className="col-md-9">
                    <div className="row row-cols-md-3 g-3">
                        {
                            persons.map(person => <Person
                                key={person.key}
                                person={person}
                            ></Person>)
                        }
                    </div>
                </div>
                <div className="col-md-3">

                </div>

            </div>
        </div>
    );
};

export default Main;
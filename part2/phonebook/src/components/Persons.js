import React from 'react'

const PersonDetail = ({person, toggleDeletePerson}) => <div>{person.name} {person.number} <button value={person.id} onClick={()=> toggleDeletePerson(person)}> delete</button></div>

const Persons = ({persons, toggleDeletePerson}) => {
    return (
        <div>
            {
                persons.map(person => <PersonDetail key={person.id} person={person} toggleDeletePerson={toggleDeletePerson}/>)
            }
        </div>
    )
}

export default Persons
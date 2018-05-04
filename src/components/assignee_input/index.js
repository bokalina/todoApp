import React from 'react';


const assignees = ['Antonette', 'Bret', 'Samantha', 'Karianne', 'Kamren', 'Leopoldo_Corkery', 'Elwyn.Skiles',
                        'Maxime_Nienow', 'Delphine', 'Moriah.Stanton'];

class AssigneeInput extends React.Component {
    
    constructor(props) {
        super(props);
    }

    render() {
        return (
            <select name="assignee" defaultValue="">
                <option value="" disabled>Choose Assignee</option>
                {assignees.map((user, index)=> <option key={index} value={user}>{user}</option>)}
            </select> 
        );
    }
}

export default AssigneeInput;

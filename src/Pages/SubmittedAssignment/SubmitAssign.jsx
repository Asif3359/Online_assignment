import React from 'react';

const SubmitAssign = ({ submitAssignment }) => {
    return (
        <tr>
            <td>
                <h1 className=' font-bold text-xl'>{submitAssignment.title}</h1>
            </td>
            <td>
                <h1>{submitAssignment.userSubmit}</h1>
            </td>
            <td>{submitAssignment.marks}</td>
            <th>
                <button className="btn btn-ghost btn-xs btn-warning btn-outline">give mark</button>
            </th>
        </tr>
    );
};

export default SubmitAssign;
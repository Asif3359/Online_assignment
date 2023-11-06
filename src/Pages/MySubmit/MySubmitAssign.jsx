import React from 'react';
import { Link } from 'react-router-dom';

const MySubmitAssign = ({submitAssignment}) => {

    // console.log(submitAssignment);

    return (
        <tr>
            <td>
                <h1 className=' font-bold text-xl'>{submitAssignment.title}</h1>
            </td>
            <td>
                <h1>{submitAssignment.userSubmit}</h1>
            </td>
            <td>{submitAssignment.marks}</td>
            <td>{submitAssignment?.pending ? <>Pending</> : <>Done</>}</td>
            <th>{submitAssignment.examineeMarks}</th>
        </tr>
    );
};

export default MySubmitAssign;
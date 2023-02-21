import React from "react";

const ListStudents=(props)=>{
    const { students } = props;
    
    return(
      <div className="bootstrap my-1">
      <table className="tabe table-striped">
      <thead>
        <tr>
          <th scope="col">SıraNo</th>
          <th scope="col">OgrNo</th>
          <th scope="col">Ad</th>
          <th scope="col">Soyad</th>
          <th scope="col">Sınıfı</th>
          <th scope="col">Okulu</th>
        </tr>
      </thead>
      <tbody>
        {students.map((student, index) => (
          <tr key={index}>
            <th scope="row">{index + 1}</th>
            <td>{student.studentNo}</td>
            <td>{student.name}</td>
            <td>{student.surname}</td>
            <td>{student.studentClass}</td>
            <td>{student.schoolName}</td>
          </tr>
        ))}
      </tbody>
    </table>

    </div>
    
    );
        };

export default ListStudents;
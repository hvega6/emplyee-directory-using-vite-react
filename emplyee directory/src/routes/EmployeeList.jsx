import EmployeeListItem from './EmployeeListItem';
import koalaImage from '../assets/koala.png';


function EmployeeList() {
  const employees = [
    { id: 1, name: 'John Doe', position: 'Software Engineer', picture: koalaImage },
    { id: 2, name: 'Jane Smith', position: 'Product Manager', picture: koalaImage },
    { id: 3, name: 'Alice Johnson', position: 'UX Designer', picture: koalaImage },
  ];

  return (
    <div>
      <ul>
        {employees.map(employee => (
          <EmployeeListItem key={employee.id} employee={employee} />
        ))}
      </ul>
    </div>
  )
}

export default EmployeeList;

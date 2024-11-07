import PropTypes from 'prop-types';

function EmployeeListItem({ employee }) {
  return (
    <li className="employee-list-item">
      <img src={employee.picture} alt={employee.name} />
      <div>
        <h3>{employee.name}</h3>
        <p>{employee.position}</p>
      </div>
    </li>
  );
}

EmployeeListItem.propTypes = {
  employee: PropTypes.shape({
    picture: PropTypes.string.isRequired,
    name: PropTypes.string.isRequired,
    position: PropTypes.string.isRequired,
  }).isRequired,
};

export default EmployeeListItem

import React from 'react';

class App extends React.Component {

  state = {
    isLoading: true,
    allEmployees: [],
    employees: []

  }

  componentDidMount() {
    fetch('./employees.json')
      .then(res => res.json())
      .then(employees => {
        this.setState({
          isLoading: false,
          employees,
          allEmployees: employees,
        });

      });

  }
   handleChangePosition = (event) => {
    const selectedPoisition = event.target.value;
    const allEmployees = this.state.allEmployees;

    this.setState({
      employees: allEmployees.filter(employee => {
        if (employee.position === selectedPoisition) {

          return true;
        }
    return false;

      })


    });

  }

  
  render() {
    if (this.state.isLoading) {
      return <div> Loading...</div>

    }
    return (
      <>
        <div>
          <label> Filter By Position</label>
          <select onChange= {this.handleChangePosition}>
            <option value="All">All</option>
            <option value="manager">manager</option>
            <option value="front-end">fonr-end</option>
            <option value="back-end">back-end</option>
            <option value="janitor">janitor</option>
            <option value="marketing ">marketing</option>
            <option value="cashier">cashier</option>
            <option value="driver">driver</option>
            <option value="engineer">engineer</option>
            <option value="accountant">accountant</option>

 <option value="manager">Manager</option>
          </select>


        </div>

        <table>
          <tr>
            <th>Name</th>
            <th>Email></th>
            <th>Position</th>
            <th>Date of Birth</th>
          </tr>
          {this.state.employees.map(employee => ( 
          <tr key={employee.id}>
            <td>{employee.name}</td>
            <td>{employee.email}</td>
            <td>{employee.DOB}</td>
            <td>{employee.position}</td>

          </tr>
          ))}
        </table>

      </>
    )

  }

}

export default App;

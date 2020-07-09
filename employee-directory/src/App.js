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
    const AllEmployees = this.state.allEmployees;

    this.setState({
      employees: allEmployees.filter(employee => {
        if (employee.position === selectedPoisition) {

          return true;
        }


      })


    })



  }
  render() {
    if (this.state, isLoading) {
      return <div> Loading...</div>

    }
    return (
      <>
        <div>
          <label> Filter By Position</label>
          <select> onChange= {this.ChangePosition}
            <option value="All">All</option>
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
          {this.state.employees.map(employee => <div />)}
          <tr key={employee.id}>
            <td>{employees.name}</td>
            <td>{employees.email}</td>
            <td>{employees.DOB}</td>
            <td>{employees.position}</td>

          </tr>
          ))}
        </table>

      </>
    )

  }

}

export default App;

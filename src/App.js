import React from 'react';
import Moment from 'moment';



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

    handleSort = (event) => {
      var sortValue = event.target.value;
      if (sortValue === 'oldtoYoung') {
        this.setState({
          employees: this.state.employees.sort((employee1, employee2) => {
            if (Moment(employee1.DOB) < Moment(employee2.DOB)) {
              return -1;
            }
            if (Moment(employee1.DOB) > Moment(employee2.DOB)) {
              return 1;

            }
            return 0;
          })

        })
      }
      if (sortValue === 'youngToOld') {
        this.setState({
          employees: this.state.employees.sort((employee1, employee2) => {
            if (Moment(employee1.DOB) > Moment(employee2.DOB)) {
              return -1;
            }
            if (Moment(employee1.DOB) < Moment(employee2.DOB)) {
              return 1;

            }
            return 0;
          })

        })
      }
    }
  

  render() {
    if (this.state.isLoading) {
      return <div> Loading...</div>

    }
    return (
      <>
        <div>
          <label> Filter By Position</label>
          <select onChange={this.handleChangePosition}>
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
        <label>Sort by</label>
        <select onChange={this.handleSort}>
          <option />
          <option value="youngtoOld"> Youngest to Oldest</option>
          <option value="oldtoYoung"> Oldest to Youngest</option>


        </select>

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

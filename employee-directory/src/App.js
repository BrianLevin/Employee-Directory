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

  render() {
    if (this.state, isLoading) {
      return <div> Loading...</div>

    }
    return (
      <>

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

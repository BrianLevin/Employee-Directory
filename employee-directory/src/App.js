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
          {this.state.employees.map(employee => <div />)}
        </table>

      </>
    )

  }

}

export default App;

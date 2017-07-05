import React from 'react';
import Auth from '../modules/Auth';
import Dashboard from '../components/Dashboard.jsx';
import Bills from "../components/Bills.js";
import Roommates from "../components/Roommates.js";

class DashboardPage extends React.Component {

  /**
   * Class constructor.
   */
  constructor(props) {
    super(props);

    this.state = {
      homeemail: '',
      roommates: [],
      bills: []
    };
  }

  /**
   * This method will be executed after initial rendering.
   */
  componentDidMount() {
    const xhr = new XMLHttpRequest();
    xhr.open('get', '/api/dashboard');
    xhr.setRequestHeader('Content-type', 'application/x-www-form-urlencoded');
    // set the authorization HTTP header
    xhr.setRequestHeader('Authorization', `bearer ${Auth.getToken()}`);
    xhr.responseType = 'json';
    xhr.addEventListener('load', () => {
      if (xhr.status === 200) {
        this.setState({
          roommates: xhr.response[0].roommates,
          bills: xhr.response[0].bills
        });
      }
    });
    xhr.send();
  }

  /**
   * Render the component.
   */
  render() {
    return (
    <div className="container">
      {/*<Dashboard secretData={this.state.secretData} />*/}
      {/* Want to add previous roommate and bill data here as props*/}
      <Roommates roommates={this.state.roommates} />
      <Bills bills={this.state.bills} />
    </div>
    );
  }

}

export default DashboardPage;

import React from 'react';
import Auth from '../modules/Auth';
import Bills from "../components/Bills.js";
import Roommates from "../components/Roommates.js";

class DashboardPage extends React.Component {

  /**
   * Class constructor.
   */
  constructor(props) {
    super(props);

    this.state = {
      roommates: [],
      bills: []
    };
  }

  /**
   * This method will be executed after initial rendering.
   */
  componentDidMount() {
    
    const homeemail = encodeURIComponent(Auth.grabEmail());
    const formData = `email=${homeemail}`;

    const xhr = new XMLHttpRequest();
    xhr.open('post', '/api/dashboard');
    xhr.setRequestHeader('Content-type', 'application/x-www-form-urlencoded');
    // set the authorization HTTP header
    xhr.setRequestHeader('Authorization', `bearer ${Auth.getToken()}`);
    xhr.responseType = 'json';
    xhr.addEventListener('load', () => {
      if (xhr.status === 200) {
        this.setState({
          roommates: xhr.response.roommates,
          bills: xhr.response.bills
        });
        
      }
    });
    xhr.send(formData);
  }

  /**
   * Render the component.
   */
  render() {
    let billTotal = 0;
    this.state.bills.map((i)=>{
      billTotal += i.cost;
    });

    return (
    <div className="container">
      {/* Want to add previous roommate and bill data here as props*/}
      <Roommates roommates={this.state.roommates} billTotal={billTotal}/>
      <Bills bills={this.state.bills} />
    </div>
    );
  }

}

export default DashboardPage;

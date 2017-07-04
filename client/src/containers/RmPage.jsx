// import React, { PropTypes } from 'react';
// //import AddRM from '../components/AddRM.js';

// class RmPage extends React.Component {

//   /**
//    * Class constructor.
//    */
//   constructor(props, context) {
//     super(props, context);

//     // set the initial component state
//     this.state = {
//       errors: {},
//       roommate: {
//         name: '',
//         email: '',
//         percentage: ''
//       },
//       home: {
//         email: ''
//       }
//     };

//     this.processForm = this.processForm.bind(this);
//     this.changeUser = this.changeUser.bind(this);
//   }

//   /**
//    * Process the form.
//    *
//    * @param {object} event - the JavaScript event object
//    */
//   processForm(event) {
//     // prevent default action. in this case, action is the form submission event
//     event.preventDefault();

//     // create a string for an HTTP body message
//     const name = encodeURIComponent(this.state.roommate.name);
//     const email = encodeURIComponent(this.state.roommate.email);
//     const percentage = encodeURIComponent(this.state.roommate.percentage);
//     const homeemail = encodeURIComponent(this.state.home.email);
//     const formData = `name=${name}&email=${email}&percentage=${percentage}&homeemail=${homeemail}`;

//     // create an AJAX request
//     const xhr = new XMLHttpRequest();
//     xhr.open('post', '/api/addrm');
//     xhr.setRequestHeader('Content-type', 'application/x-www-form-urlencoded');
//     xhr.responseType = 'json';
//     xhr.addEventListener('load', () => {
//       if (xhr.status === 200) {
//         // success

//         // change the component-container state
//         this.setState({
//           errors: {}
//         });

//         // change the current URL to /
//         this.context.router.replace('/');
//       } else {
//         // failure

//         // change the component state
//         const errors = xhr.response.errors ? xhr.response.errors : {};
//         errors.summary = xhr.response.message;

//         this.setState({
//           errors
//         });
//       }
//     });
//     xhr.send(formData);
//   }

// //   /**
// //    * Change the user object.
// //    *
// //    * @param {object} event - the JavaScript event object
// //    */
// //   changeUser(event) {
// //     const field = event.target.name;
// //     const user = this.state.user;
// //     user[field] = event.target.value;

// //     this.setState({
// //       user
// //     });
// //   }

//   /**
//    * Render the component.
//    */
//   render() {
//     return (
//       <Roommates
//         onSubmit={this.processForm}
//         onChange={this.changeUser}
//         errors={this.state.errors}
//         roommate={this.state.roommate}
//         home={this.state.home}
//       />
//     );
//   }

// }

// RmPage.contextTypes = {
//   router: PropTypes.object.isRequired
// };

// export default RmPage;
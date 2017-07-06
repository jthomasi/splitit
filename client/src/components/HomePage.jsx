import React from 'react';
import { Card, CardTitle, CardMedia, CardText } from 'material-ui/Card';


const HomePage = () => (
  <Card className="container">
    <CardTitle title="Welcome to Splitit!" subtitle="Split the bill with your roommates, easy(ier)" />
    <CardMedia>
      <img src={require("../../dist/img/splitrent.jpg")} alt="front"/>
    </CardMedia>
    <CardText>
      <p>Please sign in.</p>
    </CardText>
  </Card>
);

export default HomePage;
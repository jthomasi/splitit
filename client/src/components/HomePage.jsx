import React from 'react';
import { Card, CardTitle, CardMedia, CardText } from 'material-ui/Card';


const HomePage = () => (
  <Card className="container">
    <CardMedia
      overlay={
        <CardTitle title="Welcome to Splitit!" subtitle="Split the bill with your roommates, easier"/>
      }
    >
      <img src={require("../../dist/img/splitrent.jpg")} alt="front"/>
    </CardMedia>
  </Card>
);

export default HomePage;
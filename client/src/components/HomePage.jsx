import React from 'react';
import { Card, CardTitle, CardMedia, CardText } from 'material-ui/Card';


const HomePage = () => (
  <Card className="container">
    <CardTitle title="Splitit User Authentication" subtitle="This is the home page." />
    <CardMedia>
      <img src={require("../../dist/img/splitrent.jpg")} alt="front"/>
    </CardMedia>
    <CardText>
      <p>Split the bill with your roommates, easy(ier)</p>
    </CardText>
  </Card>
);

export default HomePage;
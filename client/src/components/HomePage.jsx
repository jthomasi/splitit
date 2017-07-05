import React from 'react';
import { Card, CardTitle, CardMedia, CardText } from 'material-ui/Card';


const HomePage = () => (
  <Card className="container">
    <CardTitle title="Welcome to Splitit!" subtitle="Split the bill with your roommates, easy(ier)" />
    <CardMedia>
      <img src="../../dist/img/split-rent.jpg"/>
    </CardMedia>
    <CardText>
      <p>Please sign in.</p>
    </CardText>
  </Card>
);

export default HomePage;
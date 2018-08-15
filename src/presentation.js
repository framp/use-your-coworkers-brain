// Import React
import React from 'react';

// Import Spectacle Core tags
import {
  Deck,
  Heading,
  ListItem,
  List,
  Slide,
  Text,
  Link,
  Image,
  Notes
} from 'spectacle';

// Import theme
import createTheme from 'spectacle/lib/themes/default';

// Require CSS
require('normalize.css');

const theme = createTheme(
  {
    primary: '#ecf0f1'
  },
  {
    primary: 'Source Sans Pro',
  }
);

export default class Presentation extends React.Component {
  render() {
    return (
      <Deck
        transition={['slide']}
        transitionDuration={500}
        theme={theme}
      >
        <Slide transition={['fade']} textFont="Source Sans Pro" textColor="#2c3e50" bgColor="#ecf0f1">
          <Heading size={1} fit caps lineHeight={1} textFont="Open Sans" textColor="#2c3e50">
            Use your coworkers' brain
          </Heading>
          <Image src="https://i.imgur.com/hH38KFC.png" />
          <Text textSize="14px">Thanks <Link href="https://www.iconfinder.com/icons/2291007/dead_face_halloween_smile_smiley_undead_zombie_icon">Laura Reen</Link> for the image</Text>
        </Slide>
        <Slide bgColor="#27ae60" textFont="Source Sans Pro" textColor="#ecf0f1">
          <Heading size={5} caps lineHeight={1.5} textFont="Open Sans" textColor="#ecf0f1">
            Inspiration
          </Heading>
          <br />
          <Image src="https://images-na.ssl-images-amazon.com/images/I/51mySVM6XbL._SX329_BO1,204,203,200_.jpg" />
          <Notes>
          </Notes>
        </Slide>
        <Slide bgColor="#27ae60" textFont="Source Sans Pro" textColor="#ecf0f1">
          <Heading size={5} caps lineHeight={1.5} textFont="Open Sans" textColor="#ecf0f1">
            Goals
          </Heading>
          <List>
            <ListItem>Present leadership concepts</ListItem>
            <ListItem>Improve interactions</ListItem>
            <ListItem>Improve coworkers</ListItem>
            <ListItem>???</ListItem>
            <ListItem>PROFIT!</ListItem>
          </List>
          <Notes>
          </Notes>
        </Slide>
        <Slide bgColor="#c0392b" textFont="Source Sans Pro" textColor="#ecf0f1">
          <Heading size={5} caps lineHeight={1.5} textFont="Open Sans" textColor="#ecf0f1">
            Leader - Follower
          </Heading>
          <List>
            <ListItem>Leader has the information</ListItem>
            <ListItem>Leader thinks</ListItem>
            <ListItem>Leader give orders</ListItem>
            <ListItem>Workforce executes orders</ListItem>
          </List>
          <Notes>
          </Notes>
        </Slide>
        <Slide bgColor="#c0392b" textFont="Source Sans Pro" textColor="#ecf0f1">
          <Heading size={5} caps lineHeight={1.5} textFont="Open Sans" textColor="#ecf0f1">
            Top down issues
          </Heading>
          <List>
            <ListItem>We're slower and more error prone</ListItem>
            <ListItem>Leader is overworked</ListItem>
            <ListItem>Team is not empowered and doesn't care</ListItem>
            <ListItem>Any more?</ListItem>
          </List>
          <Notes>
          </Notes>
        </Slide>
        <Slide bgColor="#c0392b" textFont="Source Sans Pro" textColor="#ecf0f1">
          <Heading size={5} caps lineHeight={1.5} textFont="Open Sans" textColor="#ecf0f1">
           We're slower and <br />more error prone
          </Heading>
          <List>
            <ListItem>One brain vs N brain</ListItem>
            <ListItem>Useless and perfect reports</ListItem>
            <ListItem>No recovery from errors</ListItem>
          </List>
          <Notes>
          </Notes>
        </Slide>
        <Slide bgColor="#c0392b" textFont="Source Sans Pro" textColor="#ecf0f1">
          <Heading size={5} caps lineHeight={1.5} textFont="Open Sans" textColor="#ecf0f1">
            The leader is overworked
          </Heading>
          <List>
            <ListItem>Poor guy is killing himself</ListItem>
            <ListItem>Unhappiness is contagious</ListItem>
            <ListItem>Performance drops after leader leaves</ListItem>
          </List>
          <Notes>
          </Notes>
        </Slide>

         <Slide bgColor="#c0392b" textFont="Source Sans Pro" textColor="#ecf0f1">
          <Heading size={5} caps lineHeight={1.5} textFont="Open Sans" textColor="#ecf0f1">
          The workforce is not empowered
          </Heading>
          <List>
          <ListItem>Leader doesn't trust us</ListItem>
            <ListItem>Unhappiness is contagious (again)</ListItem>
            <ListItem>Do what you're told and call it a day</ListItem>
            <ListItem>Lower performance</ListItem>
            <ListItem>No error recovery</ListItem>
          </List>
          <Notes>
          </Notes>
        </Slide>


        <Slide bgColor="#c0392b" textFont="Source Sans Pro" textColor="#ecf0f1">
          <Heading size={5} caps lineHeight={1.5} textFont="Open Sans" textColor="#ecf0f1">
          The workforce is not empowered - WHY?
          </Heading>
          <List>
          <ListItem>Personal problems</ListItem>
            <ListItem>Not paid enough</ListItem>
            <ListItem>Something wrong in the team</ListItem>
          </List>
          <Notes>
          </Notes>
        </Slide>

        <Slide bgColor="#c0392b" textFont="Source Sans Pro" textColor="#ecf0f1">
          <Heading size={5} caps lineHeight={1.5} textFont="Open Sans" textColor="#ecf0f1">
          The workforce is not empowered - Phases
          </Heading>
          <List>
           <ListItem>Prepared for the job and motivated</ListItem>
            <ListItem>No opportunity to contribute ideas</ListItem>
            <ListItem>I don't need my brain to do my jobs</ListItem>
            <ListItem>Doing work = washing dishes</ListItem>
            <ListItem>Sad because I just do chores </ListItem>
            <ListItem>I left the company</ListItem>
          </List>
          <Notes>
          </Notes>
        </Slide>

          <Slide bgColor="#c0392b" textFont="Source Sans Pro" textColor="#ecf0f1">
          <Heading size={5} caps lineHeight={1.5} textFont="Open Sans" textColor="#ecf0f1">
          More ideas?
          </Heading>
          
          <Notes>
          </Notes>
        </Slide>

          <Slide bgColor="#2980b9" textFont="Source Sans Pro" textColor="#ecf0f1">
          <Heading size={5} caps lineHeight={1.5} textFont="Open Sans" textColor="#ecf0f1">
          Leader-Leader model
          </Heading>
          <List>
            <ListItem>Everyone has a level of decision making and responsibilities</ListItem>
            <ListItem>People are challenged with leadership problems</ListItem>
            <ListItem>N brains vs 1 brain</ListItem>
            <ListItem>Faster response</ListItem>
            <ListItem>Error recovery</ListItem>
          </List>
          <Notes>
          </Notes>
        </Slide>

        <Slide bgColor="#2980b9" textFont="Source Sans Pro" textColor="#ecf0f1">
          <Heading size={5} caps lineHeight={1.5} textFont="Open Sans" textColor="#ecf0f1">
          Growing your people
          </Heading>
          <List>
            <ListItem>Better employees</ListItem>
            <ListItem>Motivated employees</ListItem>
            <ListItem>Good for the business and for the employees</ListItem>
          </List>
          <Notes>
          </Notes>
        </Slide>

        <Slide bgColor="#2980b9" textFont="Source Sans Pro" textColor="#ecf0f1">
          <Heading size={5} caps lineHeight={1.5} textFont="Open Sans" textColor="#ecf0f1">
          Communication
          </Heading>
          <List>
            <ListItem>Team goals are shared</ListItem>
            <ListItem>Team comes up with ideas</ListItem>
            <ListItem>Each member check their responsibilities are fulfilled</ListItem>
            <ListItem>Members share informally what they've been doing</ListItem>            
          </List>
          <Notes>
          </Notes>
        </Slide>

         <Slide bgColor="#2980b9" textFont="Source Sans Pro" textColor="#ecf0f1">
          <Heading size={5} caps lineHeight={1.5} textFont="Open Sans" textColor="#ecf0f1">
          When the Team Lead leaves
          </Heading>
          <List>
            <ListItem>Performance is not impacted</ListItem>
            <ListItem>Team adapts quickly</ListItem>
            <ListItem>Higher chances or finding a leader in the team</ListItem>
          </List>
          <Notes>
          </Notes>
        </Slide>

        <Slide bgColor="#2980b9" textFont="Source Sans Pro" textColor="#ecf0f1">
          <Heading size={5} caps lineHeight={1.5} textFont="Open Sans" textColor="#ecf0f1">
          Leader - Leader issues
          </Heading>
          <List>
          <ListItem>Not as simple to implement as barking orders</ListItem>
            <ListItem>New behaviours should be introduced gradually</ListItem>
            <ListItem>How to empower people in your industry?</ListItem>
          </List>
          <Notes>
          </Notes>
        </Slide>


        <Slide bgColor="#8e44ad" textFont="Source Sans Pro" textColor="#ecf0f1">
          <Heading size={5} caps lineHeight={1.5} textFont="Open Sans" textColor="#ecf0f1">
          Examples
          </Heading>
          <Notes>
          </Notes>
        </Slide>

        <Slide bgColor="#8e44ad" textFont="Source Sans Pro" textColor="#ecf0f1">
          <Heading size={5} caps lineHeight={1.5} textFont="Open Sans" textColor="#ecf0f1">
          Example 1
          </Heading>
          <Text textColor="#ecf0f1">
          You're leading a kick off, the business states the problem to solve. Your team members don't say a word, so you start talking and answering all the business concerns.
          </Text>
          <Notes>
          </Notes>
        </Slide>

        <Slide bgColor="#8e44ad" textFont="Source Sans Pro" textColor="#ecf0f1">
          <Heading size={5} caps lineHeight={1.5} textFont="Open Sans" textColor="#ecf0f1">
          Example 2
          </Heading>
          <Text textColor="#ecf0f1">
          You're pairing and the driver is doing everything while the second is in a comatose state.
          </Text>
          <Notes>
          </Notes>
        </Slide>

        <Slide bgColor="#8e44ad" textFont="Source Sans Pro" textColor="#ecf0f1">
          <Heading size={5} caps lineHeight={1.5} textFont="Open Sans" textColor="#ecf0f1">
          Example 3
          </Heading>
          <Text textColor="#ecf0f1">
          A set of problems arrive from the business for your team, you pick the hardest tasks for yourself, leaving bugfixing to the rest of the team
          </Text>
          <Notes>
          </Notes>
        </Slide>

        <Slide bgColor="#8e44ad" textFont="Source Sans Pro" textColor="#ecf0f1">
          <Heading size={5} caps lineHeight={1.5} textFont="Open Sans" textColor="#ecf0f1">
          Example 4
          </Heading>
          <Text textColor="#ecf0f1">
          You're on holiday with 2 friends: all of you speak English, but two of you speak Italian. Every time there is a decision, the Italians say something quick in Italian and take decisions for the group, communicating only the resulting orders to the third friend. He gets progressively more sad and detached until he doesn't even care about the decisions and passively do the things asked. He stops hanging out with you.
          </Text>
          <Notes>
          </Notes>
        </Slide>

        <Slide bgColor="#8e44ad" textFont="Source Sans Pro" textColor="#ecf0f1">
          <Heading size={5} caps lineHeight={1.5} textFont="Open Sans" textColor="#ecf0f1">
          Fin. <br />More examples?
          </Heading>
          <Notes>
          </Notes>
        </Slide>
      </Deck>
    );
  }
}

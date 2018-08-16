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

Recently, I read a book that Maurizio recommended called "Turn the ship around" by David Marquet.
It's a great story on how a captain of the us navy challenged what was the leadership status quo - I'm the captain, I give orders, I've all the responsibility, you obey - and gradually pushed down power to the entire workforce.
<br/><br/>
This book really clicked with me and with other readings I've been doing regarding brain development and`psychology and inspired me to create this presentation.<br/>
It's not a summary of the book, that I suggest you to read, but several concepts are coming from there.

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

My goal here is to give you a few ideas and see if these concepts can be used to improve how you interact with your coworkers and how you lead.
<br/><br/>
A common misconception about leadership, is that it's just about people at the top, everyone else can just chill and focus only on their work.
          </Notes>
        </Slide>

        <Slide bgColor="#27ae60" textFont="Source Sans Pro" textColor="#ecf0f1">
          <Heading size={5} caps lineHeight={1.5} textFont="Open Sans" textColor="#ecf0f1">
            Leadership
          </Heading>
          <List>
            <ListItem>Lead yourself</ListItem>
            <ListItem>Lead your peers</ListItem>
            <ListItem>Lead your boss</ListItem>
            <ListItem>Lead your team</ListItem>
            <ListItem>Don't waste processing power</ListItem>
          </List>
          <Notes>

Leadership happens at every level of an organisation and it should be of interest for everyone. There are leadership decisions at every level and being able and engaged enough to make them can mean a lot for the mission that you and your organisation are trying to achieve.
You can think of it as leading yourself, leading your peers, leading your team and even leading your boss.<br/>
Example time: your boss is suggesting to use a new library to solve an issue. It doesn't seem to work very well but the boss said so, so you struggle with it for 2 weeks before the boss checks back and see you're blocked. If you had used your brain to double check, you wouldn't have wasted 2 weeks. Pointing out the library wasn't a good fit could have also been a good example of leading your boss to the right solution.
<br/><br/>
We can frame it at an optimisation problem: believe it or not, but everyone you interact with has a brain, if you don't make them think and think for them you're wasting a good working CPU. In the same way, if you receive a task and you're not thinking you're wasting your CPU and missing out on correcting errors before they happen.
<br/><br/>
So, even though leadership is such a fundamental skill at every level, what most people still think when they hear about leadership is the Leader Follower model.

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

In a traditional leader follower model, the leader has all the information, the leader is thinking, the leader is processing all the information, the leader is giving orders.<br/>
The rest of the workforce is sitting idle and waiting for orders.

          </Notes>
        </Slide>
        <Slide bgColor="#c0392b" textFont="Source Sans Pro" textColor="#ecf0f1">
          <Heading size={5} caps lineHeight={1.5} textFont="Open Sans" textColor="#ecf0f1">
            Leader - Follower issues
          </Heading>
          <List>
            <ListItem>We're slower and more error prone</ListItem>
            <ListItem>Leader is overworked</ListItem>
            <ListItem>Team is not empowered and doesn't care</ListItem>
            <ListItem>Any more?</ListItem>
          </List>
          <Notes>

When a leader is taking all the decisions and just communicating orders he's not using anyone else brain.<br/>
This has, at least, 3 issues:<br/>
 - We're slower and more error prone<br/>
 - The leader is overworked<br/>
 - The workforce is not empowered, unhappy, and doesn't care about their job<br/>
 <br/>
 Let's analyse them further - and you can try to come up with more points to discuss after this.

          </Notes>
        </Slide>
        <Slide bgColor="#c0392b" textFont="Source Sans Pro" textColor="#ecf0f1">
          <Heading size={5} caps lineHeight={1.5} textFont="Open Sans" textColor="#ecf0f1">
           We're slower and <br />more error prone
          </Heading>
          <List>
            <ListItem>One brain vs N brains</ListItem>
            <ListItem>Useless and perfect reports</ListItem>
            <ListItem>No recovery from errors</ListItem>
          </List>
          <Notes>

Because we have only one brain doing the majority of the work, we can't come up with ideas as quick as we could if multiple people were thinking.<br/>
The feedback that a leader is getting tend to be formal and perfect - because employees want to show their boss they did a good job. Translated: it means that employees are wasting company time embellishing reports for no real benefit.<br/>
Another thing is, because the information are being parsed by just one individual we don't have a chance to recover in case of error; there is no-one checking the thought process. <br/>
This is one of the reasons why, for example, pairing (or a team wide planning session) is more effective than solo work when there are decisions to be made (should we use this 3rd party api or write the code?) and it's progressively less useful when things are small and certain (we need to fix the padding on the submit button).

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

This is obviously bad for the leader and for whoever is unlucky enough to have to deal with him.
Having to deal with unhappy people is not great and it's hard to endure for long. That's pretty much why I don't work in a hospital. This on the long term, can drive morale down and push valid team members to leave. <br/>
Another reason is that shifting the load on one person means that as soon as that one leaves the team, the performance of the team will vary significantly.<br/>
This is, unjustly, a reason of pride for some top down leaders, who convince themselves they're indispensable for the team to deliver.

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

The leader in our example communicates that he doesn't trust and doesn't value his team ideas. He's basically saying he doesn't need thinking people but robots, it's just that technology is too slow in catching up.<br/>
This is a very powerful way to take a team of motivated and effective people and transform them mindless zombies that just execute what they've been told to do and clock off for the day.
This translate to lower performance from the team, and not being able to recover errors.

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

If your team is not interacting and just executing what they're told, you can find yourself in one of the following scenarios:<br/>
- They're going through personal problems<br/>
- They're not paid enough<br/>
- There is something wrong in the team<br/>
We can't fix all personal problems, but it's in your interest as a leader to have a productive and happy team member: do reach out to your team members and try to help them if you can.<br/>
As developers and thanks to the market this is not a problem as hard as in other industries. If that's not enough and there is no budget for a raise you can still try to offer other benefits and focus on improving the quality of the work environment.<br/>
If we can exclude these 2 cases we need to be critical of how the team and the company are working to make the people feel empowered.

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

Even if the members involved are not able to explain why they feel that way, they will all go through different phases:<br/>
 - I'm prepared for this job, motivated to do good and contribute ideas<br/>
 - You're not giving me an opportunity to contribute my ideas or you flat out reject all of them<br/>
 - I don't need to use my brain to do my job, you can think for me, I can just execute and if sometimes goes wrong, well, it's your fault
 - Doing this work is like washing dishes, it's just a chore I do to get a benefit (money vs clean dishes)<br/>
 - I'm sad because all I do is doing chores and I'm not growing in any way<br/>
 - I left the company<br/>
 <br/>
If you get in this situation, it doesn't mean that the company is bad or that a single person is a bad leader, it just take a small mistake to alienate some employees. Some people could come into the company already in a battered state from previous employers. It can be a lot of things.<br/>
This, in turn, can propagate quickly across employees: unhappy employees make more unhappy employees, either because working with them is not great or because they can say bad things about the business and drive morale down.<br/>
I believe this to be reason why outsourcing is extremely tricky to get right. You need good leaders in two different companies sharing the same goals of growth and success for your employees, while trying to save as money as much as possible. 

          </Notes>
        </Slide>

          <Slide bgColor="#c0392b" textFont="Source Sans Pro" textColor="#ecf0f1">
          <Heading size={5} caps lineHeight={1.5} textFont="Open Sans" textColor="#ecf0f1">
          More ideas?
          </Heading>
          
          <Notes>

Is there anyone who wants to share more ideas that I may have left out?

          </Notes>
        </Slide>

          <Slide bgColor="#2980b9" textFont="Source Sans Pro" textColor="#ecf0f1">
          <Heading size={5} caps lineHeight={1.5} textFont="Open Sans" textColor="#ecf0f1">
          Leader - Leader model
          </Heading>
          <List>
            <ListItem>Everyone has a level of decision making and responsibilities</ListItem>
            <ListItem>People are challenged with leadership problems</ListItem>
            <ListItem>N brains vs 1 brain</ListItem>
            <ListItem>Faster response</ListItem>
            <ListItem>Error recovery</ListItem>
          </List>
          <Notes>

Ok, we saw the problem that a top down structure is creating. Let's see what an alternative may look like.<br/>
<br/>
In a leader-leader model everyone is a leader and he's trusted with a certain level of decision making and responsibilities. The power is pushed down from the leaders to the members of their team, giving them extra responsibilities and extra decision making work, but also keeping them challenged and making them grow.<br/>
Instead of having a many-to-one members-leader dependency we have a one-to-many leader-members dependency.<br/>
We now have N brains working together and producing a faster response - with the ability to catch mistakes before they happen.

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

Growing and taking care of your people is another important part of a leader to leader model - and it's great value: not only your employees are becoming better and more valuable, they're also happy and motivated: not only they're getting a salary, they're also increasing their value. What we did was aligning incentives: their growth is a win-win, it's good for the business and for them.<br/>
Story time: a few years ago I was running a small startup and I was working with my team from the Google Campus café; one day I met the founder of another startup and the first thing he told me was "What can I do for you?".<br/>
Those weren't empty words, he was really interested in helping me solve one of the struggles I was having and proceeded to ask me a few things about my startup to see whether he had the right contacts or the resources to help.<br/>
The rationale was that doing something good for someone in his network would have costed him very little time and could have generated positive effects for both of us (contacts, partnerships, just being in good relationship with your neighbours, having more successful neighbours).
The same thing applies in your company or in your team.

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

Let's see how communication will flow in the team: The leader will make everyone aware of the goals the team need to achieve; everybody will come up with ideas on how to solve the issues and, in the cases where it's needed, they will ask for official confirmation from the leader.<br/>
A leader shouldn't be actively pursuing all the goals, he need to make sure that those goals are going to be reached.<br/>
When unsure, team members can express their intention of doing something, saying something like "I intend to, I'm going to" and see if the boss will agree.<br/>
At the same time team members can communicate informally about what they're doing to share best practices between each other and to catch potential errors.<br/>
This concept of informal communication, that translates very well to our chat rooms, is asynchronous and involve all the team and it's much more useful than the synchronous leader barking individual orders to single members and getting back a formal report.

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

When you manage to push power down and you have leaders instead of followers, even something like a team lead leaving won't impact the team performance. The team will adapt quickly under the new lead, and because you invested time in growing your people, you have good chances of finding a good leader in the team already.<br/>
We want to optimise not only for immediate outcome of the team, but for the future outcome of the team.

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

Of course implementing this system is not as simple as someone walking in, saying what needed to be done and sitting back with a cocktail, saying "very well" to what the team come up with.
Changes should be introduced gradually, and that's the tricky bit. David Marquet left the navy and went to do exactly that, consulting for companies who wanted to change their leadership models, finding the best way for every industry and organisations to improve things.
Even when the problem was identified, one of the traditional ways to increase happiness was to have "Empowering workshop". The problem with this approach is that makes the assumption that people don't have empowerment and the management/speaker is going to provide empowerment. It's seen as a passive thing, as if it were a thing that can be passed around. Empowerment is a state of mind that should come from within you, because you enjoy how you're spending your time at work and you feel you're growing.<br/>
If you weren't feeling empowered before this talk, you won't feel empowered by the end of it.<br/>
Hopefully the ratio of people who find something they can improve in how they interact with coworkers and those who don't will be greater than 1.

          </Notes>
        </Slide>


        <Slide bgColor="#8e44ad" textFont="Source Sans Pro" textColor="#ecf0f1">
          <Heading size={5} caps lineHeight={1.5} textFont="Open Sans" textColor="#ecf0f1">
          Examples
          </Heading>
          <Notes>

Even though finding the right way to push power down is hard, we can all try to become better leaders and improve things for ourselves and our coworkers.<br/>
That's why I want to finish the presentation with a few examples of how things could be improved in our daily job and why. Again I would appreciate you thinking along with me and contributing some ideas at the end.<br/>
To keep in spirit, these examples are sourced from things I've seen leaders doing, things I did myself but also stories I've heard chatting with people, behind a screen or behind a pint. Other people brains are a great source of stories.

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

What's wrong?  You lost an opportunity to make your team members feel valuable and you deprived them of the chanche to come up with a solution and make decisions. They weren't talking because they were used to sit in meeting like this waiting for you to talk.<br/>
What to do? If no-one wants to say something, point at someone in particular and ask them if they have an idea.

          </Notes>
        </Slide>

        <Slide bgColor="#8e44ad" textFont="Source Sans Pro" textColor="#ecf0f1">
          <Heading size={5} caps lineHeight={1.5} textFont="Open Sans" textColor="#ecf0f1">
          Example 2
          </Heading>
          <Text textColor="#ecf0f1">
          You're pairing and doing everything while your partner is in a comatose state.
          </Text>
          <Notes>

What's wrong? You're missing out on letting the other take decisions and on him being engaged and properly checking your decisions. Or the pairing is useless because the task is too easy<br/>
What to do? Don't be afraid of saying so when pairing is useless because the task is solo work, or don't be afraid of asking to switch driver (it doesn't matter if you're driving or not). You both have a brain and can verify each other thoughts on the utility of the pairing you're doing.

          </Notes>
        </Slide>

        <Slide bgColor="#8e44ad" textFont="Source Sans Pro" textColor="#ecf0f1">
          <Heading size={5} caps lineHeight={1.5} textFont="Open Sans" textColor="#ecf0f1">
          Example 3
          </Heading>
          <Text textColor="#ecf0f1">
          A set of problems arrive from the business for your team, you pick the hardest tasks for yourself, leaving bugfixing to the rest of the team.
          </Text>
          <Notes>

What's wrong? You're missing out on growing your people (by depriving them of useful tasks to pick) and on letting them decide who's going to do what. You're also communicating distrusts towards the rest of the team.<br/>
What to do? Have you thought which tasks could have been useful for your team mates? Even better, why not to leave picking tasks for a short informal chat with all the partecipants (based on each members' skills, progression goals and deadlines)?

          </Notes>
        </Slide>

        <Slide bgColor="#8e44ad" textFont="Source Sans Pro" textColor="#ecf0f1">
          <Heading size={5} caps lineHeight={1.5} textFont="Open Sans" textColor="#ecf0f1">
          Example 4
          </Heading>
          <Text textColor="#ecf0f1">
          You're on holiday with 2 friends: all of you speak English, but two of you speak Italian. Every time there is a decision, the Italians say something quick in Italian and take decisions for the group, communicating only the resulting orders to the third friend. He gets progressively more sad and detached until he doesn't even care about the decisions and passively does the things asked. He stops hanging out with you shortly after.
          </Text>
          <Notes>

What's wrong? The third friend is not using his brain, he feels useless and stops caring about the rest of the group. He will just complain about wrong decisions and badly do the tasks asked.<br/>
What to do? Explain what the challenges are and what we want to achieve and let him join the discussion instead of just giving the output.

          </Notes>
        </Slide>

        <Slide bgColor="#8e44ad" textFont="Source Sans Pro" textColor="#ecf0f1">
          <Heading size={5} caps lineHeight={1.5} textFont="Open Sans" textColor="#ecf0f1">
          Fin. <br />More examples?
          </Heading>
          <Notes>
          
That's the end of the presentation.<br/>
I hope I got you to think a little bit about your interactions.<br/>
If you have any feedback, questions, more examples or stories to tell you're more than welcome to fire away. <br/>
Thanks

          </Notes>
        </Slide>
      </Deck>
    );
  }
}

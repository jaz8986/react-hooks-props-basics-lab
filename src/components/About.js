import Links from "./Links";
import Bio from "./Bio";

function About({user}) {

    return (
      <div id="about">
        <h2>About Me</h2>
        <Bio user={user}/>
        <img src="https://i.imgur.com/mV8PQxj.gif" alt="I made this" />
      <Links user={user} />
      </div>
    );
  }


export default About;

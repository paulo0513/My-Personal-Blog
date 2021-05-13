import Contact from "./Contact";

function About() {
  return (
    <main className="about">
      <img src="https://i.imgur.com/B5YqO7P.jpg" alt="a really good looking guy" width="auto" height="400" className="about-pic" />
      <div className="about-body">
      <h2>Getting to Know Paul</h2>
      <h4>
        Oh, hey there! Welcome to my page! If you stumbled across here, you're either lost or curious to hear what I'm all about, so let's dive in.</h4>
      <h4>
        My name is Paul Oh (Oh? Yes, it's a real lastname and I 
        <span class="italic"> challenge </span>
        you to get clever with it because I've heard it all...) and I am a web developer based out of Chicago. I was born in Chicago, raised in Michigan, but made my way back to Illinois in 2016 after I graduated from Michigan State University.
      </h4>
      <h4>
      I began my professional career in sales/account management, but was never entirely fulfilled. That empty feeling led me to pursue a more specialized field in software engineering. And now, here I am showing off all of the new skills I've learned!
      </h4>
      </div>
      {/* <div className="about-contact">
        <Contact />
      </div> */}
    </main>
  )
}

export default About;
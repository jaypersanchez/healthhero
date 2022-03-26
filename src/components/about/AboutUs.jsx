/* eslint-disable jsx-a11y/alt-text */
/* eslint-disable no-unused-expressions */
import React, { useState, useEffect } from "react";
import "bootstrap/dist/css/bootstrap.min.css";
import Accordion from 'react-bootstrap/Accordion';

// images
import char from "../../assets/images/char.png";
 
// eslint-disable-next-line
function About() {  

  return (
    <>
     <div id="about-us" className="">
      <div className="c-box">
        <h5 className="clr-blue mb-3">ABOUT</h5>
        <h2 className="clr-red mb-3">
          <span className="f-right"><img src={char} alt="img4" /></span>
          Welcome to the Map of Health Hero City!
        </h2>
        <p>A healthy metaverse focused on enabling creator economics &amp; free basic needs for its community members.</p>
      </div>

      <div className="c-box">
        <h4 className="clr-red mb-3">Health Hero City in Numbers</h4>
        <p>Our metaverse goal is to ensure at least 33% of the planet could earn a better &amp; healthier lifestyle, gain free food, clean water, energy, &amp; healthcare by participating as well as support their basic needs.</p>
        <ul className="stats">
          <li>
            <span className="icon-location"></span>
            <h4 className="h2 clr-blue">3,311</h4>
            <p>Land/Deeds for Sale</p>
          </li>
          <li>
            <span className="icon-key"></span>
            <h4 className="h2 clr-blue">4,777</h4>
            <p>Land/Deeds that are earnable based on step activity</p>
          </li>
          <li>
            <span className="icon-compas"></span>
            <h4 className="h2 clr-blue">1,076</h4>
            <p>Total square feet of land</p>
          </li>
          <li>
            <span className="icon-navi"></span>
            <h4 className="h2 clr-blue">100</h4>
            <p>Total square meters</p>
          </li>
          <li>
            <span className="icon-flag"></span>
            <h4 className="h2 clr-blue">40</h4>
            <p>Total acres</p>
          </li>
          <li>
            <span className="icon-focus"></span>
            <h4 className="h2 clr-blue">0.0625</h4>
            <p>Square miles per parcel</p>
          </li>
        </ul>
      </div>

      <div className="c-box">
        <h4 className="clr-red mb-3">The Story</h4>
        <p>Go!Bots are fun, empathetic, and competitive entities that are the epitome of health engagement. They hail from a future-branch multiverse of Earth (Earth-333) where Health Hero Corp positively “re-inverted” to an optimal healthcare system to best serve humanity’s well-being. Ultimately, Earth-333 is a divine future where healthcare, the cleanest air, freshest water, energy, food, shelter, world-class education/training, and transportation - were all free &amp; nature-powered.</p>
        
        <Accordion className="hide-about" id="aboutContent">
          <Accordion.Item eventKey="0"> 
            <Accordion.Body>
              <p>The 8,088 Go!Bots were forced to travel back in time due to a mysterious event driven by a galactic phenomenon called the “Quantum Time Crystal” collapse. The Go!Bots are unfortunately constrained to express themselves in an evolving Quantum-AI driven Metaverse called “Health Hero City”. The Quantum qubits evolving the city grow it from 2D to 3D and ultimately mixed reality gameplay that developers and the Health Hero community build, including spawned “well-being games” where gameplay is fueled by one’s spirit, mind, &amp; IoT based-body activity.</p>
              <p>Generated &amp; morphing from 177 traits, the Go!Bots (which each have unique superpowers) don’t know much about the current Earth, just that the healthcare system was drastically broken and most of what they learned came from high vibe decentralized cartoons, comics, music, toys, video games (&amp; all supportive merch) slated for reactivation in this timeline that the community drives. The Go!Bots are determined to show the current version of Earth all holistic well-being practices &amp; doing so in the highest vibrational way &amp; expressing such via its world engine open-source API fueling engaging integrations to all major consumer &amp; enterprise platforms supporting the current version of Earth.</p>
              <p>Some of the rarer (which are elder rangers (ie. royals) that are thousands of years old) minted Go!Bots have also committed to revealing key technologies to support the shift to a better world - including decentralized Quantum-AI based algorithms (hidden in Health Hero City &amp; merged with digital twins of some of the world’s most recognizable physical structures &amp; landscapes).</p>
              <p>Each of the minted Go!Bots come with an accompanying deed of Health Hero City that one will be able to build on. Additionally, Go!Bots belong to their own inter-dimensional well-being clan which supports live &amp; on-demand social media content relative to that dimension of well-being. The dimensions are: Physical, Social, Spiritual, Environmental, Occupational, Intellectual, &amp; Emotional - where they are always protecting the virtues of their clan. GoBots! are determined to protect Health Hero City against the lower vibrational beings called “Malos”.</p>
              <p>These lessons that Go!Bots will teach us what is needed to properly support the foundational needs of our world, which include foundational health support for spiritual &amp; social determinants of health where our society &amp; systems are at the battleground nexus point. All in all, the Go!Bot methods remade healthcare into fun personalized well-being-based virtual primary care plans for their citizens, employees, and patients in their timeline multiverse branch, one of which they aspire to return home to once they mine &amp; re-assemble the 7 geocached (in the real physical world of current Earth) time crystals, so they can see their friends &amp; family that they ever so dearly miss. Due to a temporal paradox, the Go!Bots have only 1,111 days left to find the crystals &amp; make it home - safely…</p>
              <p>The Saga continues…</p>
            </Accordion.Body>
            <Accordion.Header>
                View More <span className="icon-down"></span>
            </Accordion.Header>
          </Accordion.Item>
        </Accordion> 
      </div>

      <div className="c-box -nav-box">
        <h4 className="clr-red mb-3">About Us</h4>
        <p>Our Mission: 1 billion+ happy healthy people</p>
        <p>Our Values: Love, Greatness, Unity</p>
        <ul>
          <li><a target="_blank" href="https://angel.co/company/health-hero/jobs">We're Hiring!</a></li>
          <li><a target="_blank" href="https://soundcloud.com/pophealth">#PopHealth Podcast</a></li>
          <li><a target="_blank" href="http://gohealthhero.com/blog">Blog</a></li>
        </ul>
      </div>

      <div className="c-box -nav-box">
        <h4 className="clr-red mb-3">Community</h4>
        <ul>
          <li><a target="_blank" href="https://discord.com/oauth2/authorize?client_id=884987637977464882&amp;amp;scope=bot&amp;amp;permissions=0">Discord Bot</a></li>
          <li><a target="_blank" href="https://t.me/joinchat/OU42ftOpUfgxNDBh">Telegram Group</a></li>
          <li><a target="_blank" href="https://discord.gg/X4EHGCPC6r">Discord Server</a></li>
          <li><a target="_blank" href="https://join.slack.com/t/healthherocommunity/shared_invite/zt-ur4odjva-xplGQyhaCUW7Mhioxexc2g">Slack Community</a></li>
          <li><a target="_blank" href="http://developers.gohealthhero.com">Developer Community</a></li>
        </ul>
      </div>

      <div className="c-box">
        <h4 className="clr-red mb-3">Contact Us</h4>
        <p>Health Hero, Inc 548 Market St.</p>
        <p>Suite 15351, San Francisco, CA 94104</p>
        <p>Office: 415.653.3101</p>
      </div>
      
      <div className="c-box -social">
        <ul>
          <li><a href="https://www.facebook.com/gohealthhero/" target="_blank"><span className="icon-facebook"></span></a></li>
          <li><a href="https://www.linkedin.com/company/gohealthhero" target="_blank"><span className="icon-linkedin"></span></a></li>
          <li><a href="https://twitter.com/GoHealthHero" target="_blank"><span className="icon-twitter"></span></a></li>
          <li><a href="https://www.instagram.com/gohealthhero/?hl=en" target="_blank"><span className="icon-instagram"></span></a></li>
          <li><a href="https://www.youtube.com/channel/UCXJM8TeHKGxMHz9KHYbI-AQ" target="_blank"><span className="icon-youtube"></span></a></li>
          <li><a href="https://www.tiktok.com/@gohealthhero" target="_blank"><span className="icon-tiktok"></span></a></li>
          <li><a href="https://www.messenger.com/t/286330911429387" target="_blank"><span className="icon-messenger"></span></a></li>
        </ul>
      </div>

      {/* Footer */}
      <div id="footer-side">
        <div className="c-box -nav-box">
          <ul>
            <li><a href="#">Terms &amp; Conditions</a></li>
            <li><a href="#">Privacy Policy</a></li>
          </ul>
        </div>
        <div className="c-box copyrights">
          <p>© 2022 Health Hero, Inc - Go!Bots™️ is a pending trademark from Health Hero, Inc.</p>
        </div>
      </div>
    </div>
    </>
  );
}

export default About;
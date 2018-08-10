import React from "react";
import "./main.css";
import "./noscript.css";


const Card = props => (
  <div className="card" onClick={() => props.clickCount(props.id)}>
      <body className="is-preload">
    // Wrapper
        <div id="wrapper">
  
         // Header
            <header id="header">
              <div className="inner">
  
               // Logo
                  <a href="index.html" className="logo">
                    <span className="symbol"><img src="images/logo.svg" alt="" /></span><span className="title">Phantom</span>
                  </a>
  
  
              </div>
            </header>
  
          // Menu
            <nav id="menu">
              <h2>Menu</h2>
              <ul>
                <li><a href="index.html">Home</a></li>
                <li><a href="generic.html">Ipsum veroeros</a></li>
                <li><a href="generic.html">Tempus etiam</a></li>
                <li><a href="generic.html">Consequat dolor</a></li>
                <li><a href="elements.html">Elements</a></li>
              </ul>
            </nav>
  
        // Main
            <div id="main">
              <div className="inner">
                <header>
                  <h1>Erat ut Sapien, mus curae, morbi dictum duis<br />
                  aenean auctor at Dictum.</h1>
                  <p>Etiam quis viverra lorem, in semper lorem. Sed nisl arcu euismod sit amet nisi euismod sed cursus arcu elementum ipsum arcu vivamus quis venenatis orci lorem ipsum et magna feugiat veroeros aliquam. Lorem ipsum dolor sit amet nullam dolore.</p>
                </header>
                <section className="tiles">
                  <article className="style1">
                    <span className="image">
                      <img src="assets/images/pic01.jpg" alt="" />
                    </span>
                    <a href="generic.html">
                      <h2>News</h2>
                      <div className="content">
                        <p>Sed nisl arcu euismod sit amet nisi lorem etiam dolor veroeros et feugiat.</p>
                      </div>
                    </a>
                  </article>
                  <article className="style2">
                    <span className="image">
                      <img src="assets/images/pic02.jpg" alt="" />
                    </span>
                    <a href="generic.html">
                      <h2>Track Shipment</h2>
                      <div className="content">
                        <p>Sed nisl arcu euismod sit amet nisi lorem etiam dolor veroeros et feugiat.</p>
                      </div>
                    </a>
                  </article>
                  <article className="style3">
                    <span className="image">
                      <img src="assets/images/pic03.jpg" alt="" />
                    </span>
                    <a href="generic.html">
                      <h2>Request Quote</h2>
                      <div className="content">
                        <p>Sed nisl arcu euismod sit amet nisi lorem etiam dolor veroeros et feugiat.</p>
                      </div>
                    </a>
                  </article>
                  <article className="style4">
                    <span className="image">
                      <img src="assets/images/pic04.jpg" alt="" />
                    </span>
                    <a href="generic.html">
                      <h2>Warehouse Management</h2>
                      <div className="content">
                        <p>Sed nisl arcu euismod sit amet nisi lorem etiam dolor veroeros et feugiat.</p>
                      </div>
                    </a>
                  </article>
                  <article className="style5">
                    <span className="image">
                      <img src="assets/images/pic05.jpg" alt="" />
                    </span>
                    <a href="generic.html">
                      <h2>Transportation Management</h2>
                      <div className="content">
                        <p>Sed nisl arcu euismod sit amet nisi lorem etiam dolor veroeros et feugiat.</p>
                      </div>
                    </a>
                  </article>
                  <article className="style6">
                    <span className="image">
                      <img src="assets/images/pic06.jpg" alt="" />
                    </span>
                    <a href="generic.html">
                      <h2>International</h2>
                      <div className="content">
                        <p>Sed nisl arcu euismod sit amet nisi lorem etiam dolor veroeros et feugiat.</p>
                      </div>
                    </a>
                  </article>
                  <article className="style2">
                    <span className="image">
                      <img src="assets/images/pic07.jpg" alt="" />
                    </span>
                    <a href="generic.html">
                      <h2>Create Delivery</h2>
                      <div className="content">
                        <p>Sed nisl arcu euismod sit amet nisi lorem etiam dolor veroeros et feugiat.</p>
                      </div>
                    </a>
                  </article>
                  <article className="style3">
                    <span className="image">
                      <img src="assets/images/pic08.jpg" alt="" />
                    </span>
                    <a href="generic.html">
                      <h2>Delivery Calendar</h2>
                      <div className="content">
                        <p>Sed nisl arcu euismod sit amet nisi lorem etiam dolor veroeros et feugiat.</p>
                      </div>
                    </a>
                  </article>
                  <article className="style1">
                    <span className="image">
                      <img src="assets/images/pic09.jpg" alt="" />
                    </span>
                    <a href="generic.html">
                      <h2>NMVP Service</h2>
                      <div className="content">
                        <p>Sed nisl arcu euismod sit amet nisi lorem etiam dolor veroeros et feugiat.</p>
                      </div>
                    </a>
                  </article>
                  <article className="style5">
                    <span className="image">
                      <img src="assets/images/pic10.jpg" alt="" />
                    </span>
                    <a href="generic.html">
                      <h2>Proof of Delivery</h2>
                      <div className="content">
                        <p>Sed nisl arcu euismod sit amet nisi lorem etiam dolor veroeros et feugiat.</p>
                      </div>
                    </a>
                  </article>
                  <article className="style6">
                    <span className="image">
                      <img src="assets/images/pic11.jpg" alt="" />
                    </span>
                    <a href="generic.html">
                      <h2>Invoices</h2>
                      <div className="content">
                        <p>Sed nisl arcu euismod sit amet nisi lorem etiam dolor veroeros et feugiat.</p>
                      </div>
                    </a>
                  </article>
                  <article className="style4">
                    <span className="image">
                      <img src="/assets/images/pic12.jpg" alt="" />
                    </span>
                    <a href="generic.html">
                      <h2>Reporting</h2>
                      <div className="content">
                        <p>Sed nisl arcu euismod sit amet nisi lorem etiam dolor veroeros et feugiat.</p>
                      </div>
                    </a>
                  </article>
                </section>
              </div>
            </div>
  
        </div>
  
  
    </body>
    </div>
);
export default Card;
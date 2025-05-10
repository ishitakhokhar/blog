import React from "react";
import styles from "../styles/About.module.css";

const About = () => {
  return (
    <div className={styles.container}>
      <h1 className={styles.center}>About Hunting Coder</h1>

      <h2 className={styles.h2}>Introduction</h2>
      <p>
        Welcome to <strong>Hunting Coder</strong> – a blog created by
        developers, for developers. Whether you're just starting out or you're a
        seasoned coder, this space is dedicated to sharing practical tips,
        tutorials, and insights from the coding world. From web development to
        debugging nightmares, we cover it all with real-world examples and
        hands-on experiences.
      </p>

      <h2 className={styles.h2}>Our Mission</h2>
      <p>
        At Hunting Coder, our mission is to simplify complex tech topics and
        help fellow developers grow their skills and confidence. We aim to
        provide quality content that not only informs but inspires you to keep
        learning and building.
      </p>

      <h2 className={styles.h2}>Services Offered</h2>
      <p>We specialize in creating content and solutions related to:</p>
      <ul>
        <li>Full-stack Web Development (MERN, .NET, etc.)</li>
        <li>Project tutorials and walkthroughs</li>
        <li>Frontend technologies (React, Bootstrap, etc.)</li>
        <li>
          Backend architecture & APIs (Node.js, Express, MongoDB, SQL Server)
        </li>
        <li>Deployment strategies and performance optimization</li>
        <li>Authentication & Authorization (JWT, OAuth, etc.)</li>
        <li>Debugging and testing techniques</li>
        <li>Productivity tips and developer tools</li>
      </ul>

      <h2 className={styles.h2}>Contact Us</h2>
      <p>
        Have questions, suggestions, or collaboration ideas? We’d love to hear
        from you! Feel free to reach out through our <strong>Contact</strong>{" "}
        page or drop us an email at
        <a href="mailto:support@huntingcoder.com"> support@huntingcoder.com</a>.
        Let’s learn and grow together in this amazing journey of coding!
      </p>
    </div>
  );
};

export default About;

import React from 'react';

const Home = () => {
  return (
    <div>
      <section>
        <h1>Welcome to ReactAuthApp</h1>
        <p>
            Build secure, beautiful, and blazing-fast apps with modern tools. Login to explore your dashboard!
        </p>
        <img src="/assets/programming.jpg"/>
      </section>
      <section>
        {['Authentication', 'Routing', 'State Management', 'Reusable UI', 'Responsive Design', 'Clean Code'].map((title,i)=(
            <div key={i}>
                <h3>{title}</h3>
                <p>
                    Master {title.toLowerCase()} with real-world project structure using React, Tailwind, and best practices.
                </p>
            </div>
        ))}
      </section>
      <section>
        <div>
            <h2>Why Choose This App?</h2>
            <p>
                It's not just a template. It's a learning playground with protected routes, auth logic, and rich UI,
                you'll be building professional-grade apps in no time!
            </p>
            <button>Get Started</button>
        </div>
      </section>
    </div>
  )
}

export default Home;

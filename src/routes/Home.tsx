import React from "react";
import profile from "../assets/profile.jpg";

function Home() {
    return (
        <main>
            <header>
                <h1>Home</h1>
            </header>
            <article>
                <section>
                    <img src={profile} alt="Felix Le" />
                </section>
                <section>
                    <h2>Hi! I'm Felix Le.</h2>
                    <p>
                        I'm a software engineer with a focus on web development and a
                        passion for playing and making video games.
                    </p>
                </section>
            </article>
        </main>
    );
}

export default Home;
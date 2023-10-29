import React from "react";
import Header from "../components/Header";
import Recipes from "../components/Recipes";

const Home = () => {
  return (
    <main className="w-full flex flex-col">
      <Header
        title={
          <p>
            Taste the World with <br /> FlavorVerse!
          </p>
        }
        type="home"
      />
      <section>
        <Recipes />
      </section>
    </main>
  );
};

export default Home;

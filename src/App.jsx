import React from "react";
import Navbar from "./components/navbar";
import Navgation from "./components/navgation";
import CreateFlashCard from "./components/createFlashCard";
import Faq from "./components/faq";
import RelationFunction from "./components/relationfunction";

const App = () => {
  return (
    <div className="container m-auto px-10">
      <div className="mt-[px]">
        <Navbar />
      </div>
      <div className="mt-[px]">
        <Navgation />
      </div>
      <div className="mt-[px]">
        <RelationFunction />
      </div>
      <div className="mt-[px]">
        <CreateFlashCard />
      </div>
      <div className="mt-[px]">
        <Faq />
      </div>
    </div>
  );
};

export default App;

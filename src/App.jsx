import React from "react";
import {
  Cart,
  FlexContent,
  Footer,
  Hero,
  Navbar,
  Sales,
  Stories,
} from "./components";
import {
  heroapi,
  popularsales,
  toprateslaes,
  sneaker,
  highlight,
  story,
  footerAPI,
} from "./data/data";

const App = () => {
  return (
    <>
      <div className="flex flex-col gap-16 relative">
        <Navbar />
        <Cart />
        <Hero heroapi={heroapi} />
        <Sales endpoint={popularsales} ifExists={true} />
        <FlexContent sneaker={highlight} ifExists={true} />
        <Sales endpoint={toprateslaes} />
        <FlexContent sneaker={sneaker} />
        <Stories story={story} />
      </div>
      <Footer footerApi={footerAPI} />
    </>
  );
};

export default App;

import React from "react";
import "../css/bootstrap.css";

import { MoreProducts, Footer } from "../Components";
import { StandardHeader, MakeParagraphs } from "./ProductsComponents";

export default class Blind extends React.Component {
  Description = () => {
    const contents = [
      [
        "In order to construct a recommendation engine we first start with a classifier. Our basic task is to predict if the material will be usable for a blind student. Instead of predicting just the usability (1 or 0) we can predict the probability for the material to be usable (probability for class 1). We then rank materials according to their probability to be useful. Effectively we rephrase the question of which material is the most suitable into which material is the most likely to be suitable.",
        "So in order to construct a predictor we first have to construct a classifier. How does this classification take place? The documents characteristics deter- mine which features are relevant.Than we see the user preferences for those features; if the preferences are mostly negative the resource is classified as un- accessible. Otherwise the resource is classified as accessible.",
        "So in order to understand the student we just have to understand his/her preferences expressed as weights right? Not entirely - we give the estimates for parameters even if we now very little about the student. So it is also useful to understand how certain we are in our estimate.",
      ],
    ];
    return (
      <div className="bg-white p-128 maxer mx-auto">
        <div className="mx-lg-1 px-4">
          <h4 className="maxer-880 pb-128 mb-0 text-purple">
            Help visually impaired students learn faster and more efficiently by
            learning and presenting their preferences.
          </h4>
          <MakeParagraphs object={contents} />
        </div>
      </div>
    );
  };

  render() {
    const currentProduct = "Pythia";
    return (
      <div>
        <StandardHeader
          object={{
            product: currentProduct,
            description:
              "Recommendation engine, based on scalable, interpretable Bayesian Opposition based classifier.",
            button: {
              text: "Try Now",
              externalLink: "https://blind.x5gon.org",
            },
          }}
        />
        <this.Description />
        <MoreProducts current={currentProduct} padding />
        <Footer />
      </div>
    );
  }
}

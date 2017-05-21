// Import React
import React from "react";

// Import Spectacle Core tags
import { Deck, Heading, Slide, Text } from "spectacle";

// Import theme
import createTheme from "spectacle/lib/themes/default";

import AnimatedGraphQL from "./GraphQL";
import AnimatedApollo from "./Apollo";

// Require CSS
require("normalize.css");
require("spectacle/lib/themes/default/index.css");

const theme = createTheme(
  {
    primary: "#2C2D31",
    secondary: "#E10098",
    tertiary: "#03A9FC",
    quartenary: "#CECECE"
  },
  {
    primary: "Space Mono",
    secondary: "Space Mono"
  }
);

export default class Presentation extends React.Component {
  render() {
    return (
      <Deck transition={["fade"]} transitionDuration={500} theme={theme}>
        <Slide transition={["fade"]} bgColor="primary">
          <Heading size={1} fit caps lineHeight={1} textColor="secondary">
            GraphQL is dope 👌
          </Heading>
          <Text margin="10px 0 0" textColor="tertiary" size={1} fit bold>
            Checkout awesome GraphQL projects: hit your right arrow!
          </Text>
        </Slide>
        <Slide transition={["fade"]} bgColor="primary">
          <Heading size={3} lineHeight={1} textColor="secondary">
            GraphQL Spec
          </Heading>
          <Heading textColor="tertiary" size={5}>
            graphql.org
          </Heading>
          <AnimatedGraphQL />
        </Slide>
      </Deck>
    );
  }
}

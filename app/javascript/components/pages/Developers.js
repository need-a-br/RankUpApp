import React from "react";
import { Card, CardImg, CardGroup, CardTitle, CardBody, CardSubtitle, CardText, Button } from "reactstrap";

const Developers = () => {
  return (
    <>
      <h1>Meet the Developers</h1>
      <h6>
        Our team is composed of Cathrine Carreon, Samuel Scott, Clifford Roecker
        and Vanessa Bastien. When tasked with the job of meeting Kung Fu
        instructors’ need for a better way to track their students achievements
        and goals, the ideas started swirling! Steadily, this team worked
        through goals and blockers to create the finished product before you.
        Each member used their strengths and skills and gained a few new ones,
        too. They proudly present their work, and welcome comments and
        suggestions on improvements in the future.
      </h6>
      <CardGroup>
  <Card>
    <CardImg
      alt="Image of Vanessa"
      src="../photos/vanessa.jpeg"
      top
      width="100%"
    />
    <CardBody className="font">
      <CardTitle tag="h1">
        Vanessa
      </CardTitle>
      <CardSubtitle
        className="mb-2 text-muted"
      >
        Project-Manager
      </CardSubtitle>
      <CardText>
      Meet Vanessa, our project manager extraordinaire! She keeps us on track and on time. This marketer turned developer loves to make clothes and cake, often asks questions before realizing she knows the answer, and is irritatingly grateful
      </CardText>
      <Button className="button" href="https://vkathryn.github.io/">
        See Portfolio
      </Button>
    </CardBody>

  </Card>
  <Card>
    <CardImg
      alt="Image of Sam"
      src="../photos/sam.jpeg"
      top
      width="100%"
    />
    <CardBody className="font">
      <CardTitle tag="h1">
        Sam
      </CardTitle>
      <CardSubtitle
        className="mb-2 text-muted"
      >
        Product Manager
      </CardSubtitle>
      <CardText>
      Meet Sam, our product manager who keeps our app on track! An avid kung fu practitioner who practices and teaches kung fu on a daily basis, Sam collects Lego,like monkeys and hopes to live a secluded mountain life with his beloved girlfriend.
      </CardText>
      <Button className="button" href="https://sanjuel.netlify.app/index.html">
        See Portfolio
      </Button>
    </CardBody>
  </Card>

  <Card>
    <CardImg
      alt="Image of Clifford"
      src="../photos/cliff.jpeg"
      top
      width="100%"
    />
    <CardBody className="font">
      <CardTitle tag="h1">
        Clifford
      </CardTitle>
      <CardSubtitle
        className="mb-2 text-muted"
      >
        Tech Lead
      </CardSubtitle>
      <CardText>
      Meet Cliffie (boy, does he wish you would call him Ford!), our tech lead. When he’s not bossing us around, he loves jamming to Fergalicious, Brunch,Banana Bread and Seth Rogan. Ask him to tell you the story about jelly beans.
      </CardText>
      <Button className="button" href="http://www.4dwd.net/">
        See Portfolio
      </Button>
    </CardBody>
  </Card>

  <Card>
    <CardImg
      alt="Image of Cathrine"
      src="../photos/cathrine.jpeg"
      top
      width="100%"
    />
    <CardBody className="font">
      <CardTitle tag="h1">
        Cathrine
      </CardTitle>
      <CardSubtitle
        className="mb-2 text-muted"
      >
        Design Lead
      </CardSubtitle>
      <CardText>
      Meet Cathrine, our stellar design lead! Cathrine enjoys making fun of people, collecting erasers and doesn’t suffer fools gladly. Her zoom backgrounds are the stuff of legends.
      </CardText>
      <Button className="button" href="https://cjcarreon.com/">
        See Portfolio
      </Button>
    </CardBody>
  </Card>

</CardGroup>
    </>
  );
};

export default Developers;

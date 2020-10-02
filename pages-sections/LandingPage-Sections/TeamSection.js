import React from "react";
// nodejs library that concatenates classes
import classNames from "classnames";
// @material-ui/core components
import { makeStyles } from "@material-ui/core/styles";

// @material-ui/icons

// core components
import GridContainer from "components/Grid/GridContainer.js";
import GridItem from "components/Grid/GridItem.js";
import Button from "components/CustomButtons/Button.js";
import Card from "components/Card/Card.js";
import CardBody from "components/Card/CardBody.js";
import CardFooter from "components/Card/CardFooter.js";

import styles from "assets/jss/nextjs-material-kit/pages/landingPageSections/teamStyle.js";

import team1 from "assets/img/faces/avatar.jpg";
import team2 from "assets/img/faces/christian.jpg";
import team3 from "assets/img/faces/kendall.jpg";

const useStyles = makeStyles(styles);

export default function TeamSection() {
  const classes = useStyles();
  const imageClasses = classNames(
    classes.imgRaised,
    classes.imgRoundedCircle,
    classes.imgFluid
  );
  return (
    <div className={classes.section}>
      <h2 className={classes.title}>Here is our team</h2>
      <div>
        <GridContainer>
          <GridItem xs={12} sm={12} md={4}>
            <Card plain>
              <GridItem xs={12} sm={12} md={6} className={classes.itemGrid}>
                <img src={"https://media-exp1.licdn.com/dms/image/C5603AQE9r5xIi1qIrg/profile-displayphoto-shrink_800_800/0?e=1606953600&v=beta&t=HWG7QHs5MVQEi9PHiHrywVnoRHRv6pIprg92deSqu4w"} alt="..." className={imageClasses} />
              </GridItem>
              <h4 className={classes.cardTitle}>
                Eddie Atkinson
                <br />
                <small className={classes.smallTitle}>Software Engineering</small>
              </h4>
              <CardFooter className={classes.justifyCenter}>
              <Button
              href="https://www.linkedin.com/in/eddie-atkinson/"
                  justIcon
                  color="transparent"
                  className={classes.margin5}
                >
                  <i className={classes.socials + " fab fa-linkedin"} />
                </Button>
              </CardFooter>
            </Card>
          </GridItem>
          <GridItem xs={12} sm={12} md={4}>
            <Card plain>
              <GridItem xs={12} sm={12} md={6} className={classes.itemGrid}>
                <img src={"https://media-exp1.licdn.com/dms/image/C5603AQGwB6gP7Q6EbA/profile-displayphoto-shrink_200_200/0?e=1606953600&v=beta&t=Iarg_SuVGt7X9xGnaD6tOnrj9lhGMr2-Nszt_lfaSu4"} alt="..." className={imageClasses} />
              </GridItem>
              <h4 className={classes.cardTitle}>
                Frinze Lapuz
                <br />
                <small className={classes.smallTitle}>Software Engineering</small>
              </h4>
              <CardFooter className={classes.justifyCenter}>
                <Button
                href="https://www.linkedin.com/in/frinze-erin-lapuz/"
                  justIcon
                  color="transparent"
                  className={classes.margin5}
                >
                  <i className={classes.socials + " fab fa-linkedin"} />
                </Button>
              </CardFooter>
            </Card>
          </GridItem>
          <GridItem xs={12} sm={12} md={4}>
            <Card plain>
              <GridItem xs={12} sm={12} md={6} className={classes.itemGrid}>
                <img src={"https://media-exp1.licdn.com/dms/image/C5603AQH9sVsBO8xveQ/profile-displayphoto-shrink_800_800/0?e=1606953600&v=beta&t=BUVFdyYcmrPLaqWZo3YNYXlIpC1ZVa2v0VL7cdVdBR0"} alt="..." className={imageClasses} />
              </GridItem>
              <h4 className={classes.cardTitle}>
                Sophie Giraudo
                <br />
                <small className={classes.smallTitle}>Data Science</small>
              </h4>
              <CardFooter className={classes.justifyCenter}>
              <Button
              href="https://www.linkedin.com/in/sophie-giraudo/"
                  justIcon
                  color="transparent"
                  className={classes.margin5}
                >
                  <i className={classes.socials + " fab fa-linkedin"} />
                </Button>
              </CardFooter>
            </Card>
          </GridItem>
        </GridContainer>
      </div>
    </div>
  );
}

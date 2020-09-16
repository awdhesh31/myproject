/** @format */

import React from "react";
import { Card, CardContent, Typography, Grid } from "@material-ui/core";
import Countup from "react-countup";
import cx from "classnames";
import styles from "./Cards.module.css";
import { red } from "@material-ui/core/colors";

const Cards = ({ data: { confirmed, recovered, deaths, lastUpdate } }) => {
  if (!confirmed) {
    return "Loading...";
  }
  return (
    <div className={styles.container}>
      <Grid container spacing={3} justify='center'>
        <Grid
          item
          component={Card}
          className={cx(styles.card, styles.infected)}>
          <CardContent>
            <Typography color='textSecondary' gutterBottom>
              Infected
            </Typography>
            <Typography variant='h5'>
              <Countup
                start={0}
                end={confirmed.value}
                duration={2.5}
                separator=','
              />
            </Typography>
            <Typography color='textSecondary'>
              {new Date(lastUpdate).toDateString()}
            </Typography>
            <Typography variant='body2'>
              Number of Active Cases Covid-19
            </Typography>
          </CardContent>
        </Grid>
        <Grid
          item
          component={Card}
          className={cx(styles.card, styles.recovered)}>
          <CardContent>
            <Typography color='textSecondary' gutterBottom>
              Recovered
            </Typography>
            <Typography variant='h5'>
              <Countup
                start={0}
                end={recovered.value}
                duration={2.5}
                separator=','
              />
            </Typography>
            <Typography color='textSecondary'>
              {new Date(lastUpdate).toDateString()}
            </Typography>
            <Typography variant='body2'>
              Number of Recovered Cases Covid-19
            </Typography>
          </CardContent>
        </Grid>
        <Grid item component={Card} className={cx(styles.card, styles.deaths)}>
          <CardContent>
            <Typography color='textSecondary' gutterBottom>
              Death
            </Typography>
            <Typography variant='h5'>
              <Countup
                start={0}
                end={deaths.value}
                duration={2.5}
                separator=','
              />
            </Typography>
            <Typography color='textSecondary'>
              {new Date(lastUpdate).toDateString()}
            </Typography>
            <Typography variant='body2'>
              Number of Death Caused by Covid-19
            </Typography>
          </CardContent>
        </Grid>
      </Grid>
      <h5>Copyright@awdhesh</h5>
    </div>
  );
};
export default Cards;
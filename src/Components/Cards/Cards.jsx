import React from 'react'
import { Card, CardContent, Typography, Grid } from '@material-ui/core'
import styles from './Cards.module.css'
import cx from 'classnames'
import CountUp from 'react-countup'



const Cards = ({data: {confirmed, recovered, deaths, lastUpdate}}) => {
    
    const cardArrays = [
        {
            Heading: 'Infected',
            countEnd: confirmed,
            Footer: 'Number of active cases of covid19',
            style : styles.infected
        },
        {
            Heading: 'Recovered',
            countEnd: recovered,
            Footer: 'Number of Recoveries from covid19',
            style : styles.recovered
        },
        {
            Heading: 'Deaths',
            countEnd: deaths,
            Footer: 'Number of deaths caused by covid19',
            style: styles.deaths
        },
    ]

    if(!confirmed){
        return 'Loding...'
    }
    
    return (
       <div className={styles.container}>
          <Grid container spacing={3} justify="center">
          {cardArrays.map((cardArray) => (
             <Grid item component={Card} xs={12} md={3} className={cx(styles.card , cardArray.style)}>
                <CardContent>
                    <Typography color="textSecondary">{cardArray.Heading}</Typography>
                    <Typography variant="h5">
                    <CountUp
                        start={0}
                        end={cardArray.countEnd.value}
                        duration={2.5}
                        seperator=","
                    />
                    </Typography>
                    <Typography color="textSecondary">{new Date(lastUpdate).toDateString()}</Typography>
                    <Typography variant="body2">{cardArray.Footer}</Typography>
                </CardContent>
             </Grid>
             ))}
          </Grid>
       </div>
    )
}

export default Cards

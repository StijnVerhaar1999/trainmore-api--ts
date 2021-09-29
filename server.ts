import express, { Application, Request, Response, NextFunction } from 'express';
import axios from 'axios';

import getUpcommingDates from './Date';

const app: Application = express();

enum Trainmore {
    url = 'https://trainmore.nl/wp-json/trainmore/v1/lessons',
    clubNo = '388',
    lang = 'nl'
}

let allDates: string[] = getUpcommingDates()

allDates.forEach((date) => {
    console.log(date)
    axios.get(Trainmore.url, {
        params: {
            date: `${date}`,
            club: Trainmore.clubNo,
            lang: Trainmore.lang
        }
    })
        .then((response) => {
            response.data.forEach((data: { event_id: string, title: string, date: string, bookable: boolean, has_started: boolean, full: boolean, capacity: string }) => {

            })
        })
})



app.get('/', (req: Request, res: Response) => {
    res.send('hello sir');
});

app.listen(5000, () => console.log('Server running'));
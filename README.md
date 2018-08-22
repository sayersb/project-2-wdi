# World Cup Predictor : project-2-wdi

![image](https://ga-dash.s3.amazonaws.com/production/assets/logo-9f88ae6c9c3871690e33280fcf557f33.png)

## Intro

A full-stack Node App that includes information on key players and countries for the 2018 Fifa World Cup, leading to predictions being made by users (that are visible once logged in). We were given 6 days to devise an idea and build the application, utilising at least two models, user authentication, RESTful routes and a persistent database. This was my first full stack app, built with Express.js and Node.js amongst the other technologies shown in the table below : 


| JavaScript(ECMAScript6)        | HTML5           | CSS3  |
| ------------- |:-------------:| -----:|
| EJS      | Express.js | MongoDB |
| Mongoose      | Node.js      |   Yarn |
| Bulma |   method-override   |    Morgan |
| Session Authentication | bcrypt     |    body-parser |


The application has been deployed on [Heroku](https://worldcuppredictor.herokuapp.com/) 

*Please be aware that Heroku apps go to sleep after 30 mins of inactivity and may take a little time to load*

## Build Process 

After receiving the brief for a full stack RESTful app, and with the 2018 World Cup just around the corner, it seemed rude for me not to base my idea around the players and teams involved. I came up with the idea for a World Cup Predictor quickly, with two differing approaches as to how the app would be set out. The first idea was based on a programming bot site that I had seen, made using Express.js and EJS layouts to show yes/no questions that are buttons leading to the next page, dependant on results. I thought that I could use a similar layout to ask users which country they thought would win if given two countries in the same World Cup Group. 

The other idea was to just ask users who they thought would win the group, win the competition and win the golden boot, amongst other questions to be thought of later. I planned to then use the results collected from the users data (with MongoDB) to show the consensus for the winners of the questions asked. This idea seemed more enjoyable for the user, as well as the coding on my part due to the extra models needed, so I decided to take this route.

When I started writing the code for the project I had a clear idea about the models needed, which would be the user, the top ten ranked countries and the key players set to appear at the competition. I set up the app with Yarn, Express, EJS layouts, Node.js and MongoDB for the data, then planned my routes and cards to perform the CRUD actions on. After writing out my models it was apparent that a final model needed to be added (a 'best of the rest' to showcase some remaining countries as I discovered that England were somehow currently not amongst the elite according to Fifa rankings). At this stage I had reached the MVP that I set out in planning (being able to perform CRUD operations on the cards that showcased the players and countries information).

The registration, login and authentication was then implemented using express-sessions. This meant that users were only allowed to make predictions and see other users predictions once logged in. At this point the product was at the level where I just needed to fix some small bugs and sort the styling, which despite using Bulma took longer than expected due to all the pages now used. On the final day the app was deployed using GitHub and Heroku.

## Issues

  * Due to not knowing properly about seeds all of the time that I had spent inputting data for the players and countries was essentially wasted due to all of this data being lost when deployed on Heroku. 
  
  * I learnt that moving forward I needed to leave a bit more time for styling at the end of the project when creating a multi page app.

##  Other GA Project Repositories

  * 1st: [Chain Game](https://github.com/sayersb/project-1-wdi)

  * 3rd: [Hidden Gems App](https://github.com/sayersb/WDI34_PROJECT_3)

  * 4th: [ABC Events App](https://github.com/sayersb/WDI-PROJECT-4)









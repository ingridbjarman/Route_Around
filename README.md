# Route Around
A route planning app that takes you from A to A - for runners and walkers all over the UK. 

Trying to plan a walk or run at a specific distance, but not quite sure how far to go? Or maybe you're just getting tired of the same old running route every week? 

By entering a start location (or by using location services on your device) and a desired distance, a circular route will be drawn on the map for you to follow, that will take you right back to where you started. 


## Index
* [Installation](#Install)
* [Endpoints](#Endpoints)
* [User Stories](#User_Stories)
* [Usages](#Usages)
* [Tech Stack](#Tech_Stack)
* [Tests](#Jasmine)
* [Ceremonies](#Ceremonies)
* [Team](#Team)
* [Collaboration](#Collaboration)


## <a name="Install">Installation</a>
To install all dependencies, run
```
> npm install
```
To start the web server, run
```
> npm start
```

## <a name="Endpoints">Endpoints</a>
| Endpoint | Request Method | Example Payload | Description |
|---|---|---|---|
| `/heartbeat` | `GET` | n/a | For checking the status of the server. |
| `/generate-waypoint-coordinates` | `POST` | `{"coordinates":{"lat": 51.4947, "lng": 0.0774}, "distance": 5}` | Returns the Lat/Lng coordinates of the generated waypoints. Expects the Content-Type Header to be set to JSON. |

## <a name="User_Stories">User stories:</a>
|MVP |
| :--- |
| `As a leisure walker,`<br>`So I can go for a walk and come back home,`<br>`I want to be able to plan route to take me back home`|
| `As a leisure walker,`<br>`So I can make sure I get the exercise I need,`<br>`I want to be able to pick a distance.`|
| `As runner training for a race,`<br>`So that I know I'm running the correct distances,`<br>`I want to be able to see how long the route actually is`|


### <a name="Tech_Stack"> Tech Stack </a>
- JavaScript
- Node.js
- React
- Express
- Jasmine & Jest
- Google Maps API
- Travis CI
- Git
- Heroku


## <a name="Ceremonies">Ceremonies</a>

## Daily schedule

- Standup every morning at 9:30AM
- Group gathering after lunch every day
- Retro at 5PM 

All of the above where led by a scrum master who would be ranomdly picked each day. 

Pairs where rotated every day, to ensure we all worked with each other and got to work on all layers of the project. 


## <a name="Team"> Team:</a>

| <a href="http://fvcproductions.com" target="_blank">**Arjun**</a> | <a href="http://fvcproductions.com" target="_blank">**Ellie**</a> | <a href="http://fvcproductions.com" target="_blank">**Alex**</a> | <a href="http://fvcproductions.com" target="_blank">**Ingrid**</a> | <a href="http://fvcproductions.com" target="_blank">**Robert**</a> | <a href="http://fvcproductions.com" target="_blank">**Kehinde**</a> |
| :---: |:---:| :---:| :---:| :---:| :---:|
| [![Arjun](https://avatars3.githubusercontent.com/u/53835165?s=400&v=4)](http://fvcproductions.com)    | [![Ellie](https://avatars3.githubusercontent.com/u/52325980?s=400&v=4)](http://fvcproductions.com) | [![Alex](https://avatars2.githubusercontent.com/u/53951705?s=400&v=4)](http://fvcproductions.com)  | [![Ingrid](https://avatars2.githubusercontent.com/u/52801530?s=400&v=4)](http://fvcproductions.com)  | [![Robert](https://avatars1.githubusercontent.com/u/42300628?s=400&v=4)](http://fvcproductions.com)  | [![Kehinde](https://avatars3.githubusercontent.com/u/33905131?s=460&v=4)](http://fvcproductions.com)  |
| <a href="https://github.com/ac4059" target="_blank">`github.com/ac4059`</a> | <a href="https://github.com/eliseaston" target="_blank">`github.com/eliseaston`</a> | <a href="https://github.com/Clifford2910" target="_blank">`github.com/Clifford2910`</a> | <a href="https://github.com/ingridbjarman" target="_blank">`github.com/ingridbjarman`</a> | <a href="https://github.com/robertwoolley99" target="_blank">`github.com/robertwoolley99`</a> | <a href="https://github.com/KOlofinmoyin" target="_blank">`github.com/KOlofinmoyin`</a>

### Miscellaneous:
- Our Trello board can be found at: https://trello.com/b/m2WH1cSw/fantastic-makers-group-2-final-project
- Read blogposts of our adventures as a team at: https://medium.com/series/dac42574577d/edit

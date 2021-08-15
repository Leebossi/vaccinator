# vaccinator

live version on Heroku: https://hidden-bastion-27554.herokuapp.com/

## exercise

THL has ordered us to create a vaccination database which contains information about vaccine orders and vaccinations.

We have received files which contains the base data for the application

The Orders are in different files named by the manufacturer of a vaccine.

Injections must be used in 30 days after the arrival of the bottle.

[name].source "Zerpfy"|"Antiqua"|"SolarBuddhica"

The source file has one json item per line.

## how to run

`cd client && npm install && cd ../server && npm install`
`npm start` both client and server. Client runs on http://localhost:300 and the server on port 3001.

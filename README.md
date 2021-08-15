# Vaccinator

live version on Heroku: https://hidden-bastion-27554.herokuapp.com/

## The exercise

https://github.com/solita/vaccine-exercise-2021

THL has ordered us to create a vaccination database which contains information about vaccine orders and vaccinations.

We have received files which contains the base data for the application

The Orders are in different files named by the manufacturer of a vaccine.

Injections must be used in 30 days after the arrival of the bottle.

[name].source "Zerpfy"|"Antiqua"|"SolarBuddhica"

The source file has one json item per line.

## How to run locally

- install dependencies by running `npm install` on both client and server directories.
- `npm start` both client and server. Client runs on http://localhost:3000 and the server on port 3001.

## Improvements

- functionality to show expiring bottles and more data about the injections
- write tests
- more time more love

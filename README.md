# Afterschool Special

This web application was made as the capstone project for the Flatiron School for Fullstack Development bootcamp. Afterschool Special is intended for parents to find different afterschool programs for their children and to connect with other parents.

## Demo Video
https://www.loom.com/share/8f19f47968de42878c632dc30c27eeaa

## Hosted By Heroku
https://afterschool-special.herokuapp.com/

## Commands to Run on Local Environment
Assuming you have react and rails installed on your local environment, use the following commands:

``` 
    bundle install

    npm install --prefix client
    
    rails db:create db:migrate db:seed

    rails s
```

In a new terminal:
``` 
    npm start --prefix client
```

##User Stories

As a user I can...
- Navigate through the displayed database of all afterschool programs.
- Search for programs based name of program, or location (using zipcode or community).
- Browse programs through a selection of filters.
- Signup to create a profile, through a secured authenication process.
- Update their profile based on specific criteria.
- Add users to their "Connections" List.
- Enroll/Unenroll in a program.
- Message other friends.
- UI/UX formatted for both Web and mobile access.


## Schema
![schema](https://user-images.githubusercontent.com/100324379/194879712-e079439e-5e82-4215-afbe-35ea6b8f2b6e.png)



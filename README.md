# penny-for-your-thoughts

## Description
This application is the API for a social network web application where users can share their thoughts, react to friends' thoughts, and create a friend list.

## Table of Contents
* Installation
* Usage
* Technologies Used
* Video Submissions
* Questions

## Installation
Clone files from GitHub to your local machine. Run npm installation. 

## Usage
Once installed on your machine, you can use insomnia to perform CRUD operations on Users and Thoughts.

## Technologies Used
* Javascript
* Express.js
* MongoDB database
* Mongoose IDM



AS A social media startup
I WANT an API for my social network that uses a NoSQL database
SO THAT my website can handle large amounts of unstructured data

GIVEN a social network API
WHEN I enter the command to invoke the application
THEN my server is started and the Mongoose models are synced to the MongoDB database
WHEN I open API GET routes in Insomnia for users and thoughts
THEN the data for each of these routes is displayed in a formatted JSON
WHEN I test API POST, PUT, and DELETE routes in Insomnia
THEN I am able to successfully create, update, and delete users and thoughts in my database
WHEN I test API POST and DELETE routes in Insomnia
THEN I am able to successfully create and delete reactions to thoughts and add and remove friends to a user’s friend list

The following animation shows GET routes to return all users and all thoughts being tested in Insomnia:
The following animation shows GET routes to return a single user and a single thought being tested in Insomnia:
The following animation shows the POST, PUT, and DELETE routes for users being tested in Insomnia:
In addition to this, your walkthrough video should show the POST, PUT, and DELETE routes for thoughts being tested in Insomnia.
The following animation shows the POST and DELETE routes for a user’s friend list being tested in Insomnia:
In addition to this, your walkthrough video should show the POST and DELETE routes for reactions to thoughts being tested in Insomnia.

Use the following guidelines to set up your models and API routes:


    API Routes
/api/users

GET all users

GET a single user by its _id and populated thought and friend data

POST a new user:

// example data
{
  "username": "lernantino",
  "email": "lernantino@gmail.com"
}
PUT to update a user by its _id

DELETE to remove user by its _id

BONUS: Remove a user's associated thoughts when deleted.

/api/users/:userId/friends/:friendId

POST to add a new friend to a user's friend list

DELETE to remove a friend from a user's friend list

/api/thoughts

GET to get all thoughts

GET to get a single thought by its _id

POST to create a new thought (don't forget to push the created thought's _id to the associated user's thoughts array field)

// example data
{
  "thoughtText": "Here's a cool thought...",
  "username": "lernantino",
  "userId": "5edff358a0fcb779aa7b118b"
}
PUT to update a thought by its _id

DELETE to remove a thought by its _id

/api/thoughts/:thoughtId/reactions

POST to create a reaction stored in a single thought's reactions array field

DELETE to pull and remove a reaction by the reaction's reactionId value
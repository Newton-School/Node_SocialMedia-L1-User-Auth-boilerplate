const mongoose = require("mongoose");
const bcrypt = require("bcrypt");

/*
Sample Object: 
{
  "_id": "614dd61e8d48c238f9dca5f1",
  "username": "johndoe",
  "email": "johndoe@example.com",
  "password": "password123",
  "profilePicture": "https://example.com/profile-picture.jpg",
  "bio": "Web developer, coffee addict, and fitness enthusiast",
  "location": "San Francisco, CA",
  "website": "https://johndoe.com",
  "socialMediaHandles": {
    "twitter": "johndoe",
    "instagram": "johndoe",
    "linkedin": "johndoe"
  },
  "interests": ["web development", "fitness", "coffee"],
  "privacySettings": {
    "isProfilePublic": true
  },
  "createdAt": "2021-09-25T12:00:00.000Z",
  "updatedAt": "2021-09-25T12:30:00.000Z",
}

/*
Build a User Model to store the user data for a social media application, it should contain:

username: A required string field to store the unique username of the user.

email: A required string field to store the unique email address of the user.

password: A required string field to store the password of the user. The field should have a validator to check that the password is at least 8 characters long. The password should be hashed using bcrypt before being saved to the database.

profilePicture: A string field to store the URL of the profile picture of the user. It should have a default value of "https://example.com/default-profile-picture.jpg".

bio: A string field to store the bio of the user. It should have a default value of "".

location: A string field to store the location of the user. It should have a default value of "".

website: A string field to store the website of the user. It should have a default value of "".

socialMediaHandles: An object field to store the social media handles of the user. It should have two fields:

twitter: A string field to store the Twitter handle of the user. It should have a default value of "".

linkedin: A string field to store the LinkedIn handle of the user. It should have a default value of "".

interests: An array field to store the interests of the user. Each element in the array should be a string.

privacySettings: An object field to store the privacy settings of the user. It should have one field:

isProfilePublic: A boolean field to indicate whether the user's profile is public or not. It should have a default value of true.
The user model should also have a pre-save hook to hash the password before saving it to the database. The model should use mongoose.Schema to define the schema and include a timestamps option to automatically add createdAt and updatedAt fields to the schema.
*/


// Write your code here:

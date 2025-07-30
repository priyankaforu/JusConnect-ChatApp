![GitHub forks](https://img.shields.io/github/forks/priyankaforu/JusConnect-ChatApp?style=flat-square&logoColor=violet&logoSize=auto)
![GitHub forks](https://img.shields.io/github/stars/priyankaforu/JusConnect-ChatApp?style=flat&logoColor=blue&logoSize=auto&labelColor=gray&color=blue)


# A Real time Chat Application

## Description
This application is very similar to any real time chat application that we use in our daily lives, you can it as a clone. But If you aspire to do such applications like intending to establish 
communication between two users , then you can fork this repository and use it for yourself to decode the files.

### Why is this important to any beginner ?
Let me explain this in layman terms , so that anyone who is yet to start their development journey can understand everything
- Building this, someone can learn and implement, password encryptions, Database to store users data, Authenticating users using tokens like (jwt).
- To understand - uploading images in "Cloudinary" which is useful when users share images with each other.
- Learn Websockets, by installing socket.io which is extremely important for implementing real time conversations (no need to refresh the page , to get the changes/new messages).


## TechStack

### Backend
- Node.js
- Express
- Mongo DB
- Cloudinary { to store images in the form of URL }
- You can install "bcrypt" and "jsonwebtokens" as well

### Frontend
- React JS, Vite
- Tailwind CSS
- Daisy UI { used for components and themes }
- Zustand
- You can install Axios { this is much better to use in the place of "fetch" }


## How To Install and Run The Project ?
First "Fork" this repository into your local machine. Then follow these commands/instructions
### Backend
- Navigate to the backend folder using command ```cd backend```
- Then use this command ```npm init -y```
- Then install all the techs from Techstack mentioned above ```npm i express mongoose cloudinary bcrypty jsonwebtokens```
- Then type ```npm run dev``` in your terminal.
- Note : Type all these commands in your terminal after opening the folder
### Frontend
- Navigate to the frontend folder using command ```cd frontend```
- Then install the vite using ```npm create vite@latest .```
- You can install all the frontend libraries and other techstack mentioned above here followint the command ```npm i zustand axios```
- For tailwind CSS please refer this to understand the installation and configuration process https://v3.tailwindcss.com/
- Then run the frontend by using ```npm run dev```
- Note: If you want to have a look at the whole application you must open : Two terminal windows, one for backend and other for frontend and run these commands ```npm run dev```
  in both the windows

### The dotenv file
There is one more file, which no one can see in my repo, I want to give the format of how it looks,

```
  PORT = ...
  JWT_SECRET = ...
  CLOUDINARY_CLOUD_NAME = ...
  CLOUDINARY_API_KEY = ...
  CLOUDINARY_API_SECRET = ...
  NODE_ENV = ...
  MONGO_URI = ...
```


<h2 style="color: #0066cc;">CREDITS</h2>
I am a beginner, still learning how to develop the real time apps and if you are someone like me , I genuinely suggest you to take this course. I owe the rights to tutor of this web app. Follow this link to understand this project in detailed
https://www.udemy.com/share/10cMgf3@GR41khYCzW1IAg9YgmMdh8uoZty1sh2kJBeYVgqxptHqsFysXdAClPwKoDQMhtRbHw==/

### The Deployed version of this App, I used Render
There are still tiny bugs, but I will fix those in my upcoming learnings...
https://jusconnect-chatapp.onrender.com

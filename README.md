# Installation Instructions

## Prerequesites:
Have nodeJS installed
Have Docker installed

## Step 1: Download the files
## Step 2: Setup Docker
1. Open Docker
2. Open a terminal
3. In the terminal, cd into the project folder
4. Run "docker-compose up --build" in the terminal
5. In Docker, click on containers on the left sidebar, then stop production-code

## Step 3: Install Packages and Perform Database Migration
1. Have Docker open
2. In Docker, run postgres
3. Open a terminal
4. cd into the server folder
6. Run “npm install”
7. Run "npm install axios"
8. Run "npm install typeorm"
9. Run "npm run typeorm:run-migration"
10. Run “cd ../client”
11. Run “npm install”
12. Run “npm start”

## Step 4: Run Project
1. Open Docker
2. In Docker, run postgres
3. Open a terminal
4. cd into the server folder
5. Run "npm run start:dev"
6. Open a new terminal
7. cd into the client folder
8. Run "npm start"
9. If postres is running, you should be prompted to change your port, type "y".  

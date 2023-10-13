# marketplace

## Angular installation
1. For angular and node: https://angular.io/guide/setup-local
2. Clone the repository: https://docs.github.com/en/repositories/creating-and-managing-repositories/cloning-a-repository


## Backend server
1. Change the credentials `user`, `password`, and `DB` in `nodejs_backend/app/config/db.config.js` via vscode: https://code.visualstudio.com/
1. cd `nodejs_backend/app.js` to enter the backend folder
2. `npm install` to install the packages
3. `node app.js` to start the backend server, it will listen for HTTP requests on port 3000 by default.

## Frontend
1. open a new terminal
2. First time: Run `cd angular_frontend;npm install` to install the packages
3. Run `cd angular_frontend;ng serve` for a dev server. Navigate to `http://localhost:4200/`. The app will automatically reload if you change any of the source files.

## Select Business Models

1. Create a new platform company by altering the companyName in the `angular_frontend/src/app/services/company.service.ts`
2. Navigate to `http://localhost:4200/taxonomy` to select the business model properties 



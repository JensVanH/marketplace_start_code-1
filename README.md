# marketplace

## Angular installation
1. For angular and node: https://angular.io/guide/setup-local
2. Clone the repository: https://docs.github.com/en/repositories/creating-and-managing-repositories/cloning-a-repository


## Backend server
1. Change the credentials `user`, `password`, and `DB` in `nodejs_backend/app/config/db.config.js` via vscode: https://code.visualstudio.com/
2. Open a terminal in VS code and run cd `nodejs_backend` to enter the backend folder
3. `npm install` to install the packages
4. If you use a Database on the ugmarket.ugent.be server, connect with VPN to vpn_ugent using Cisco AnyConnect
5. `node app.js` to start the backend server, it will listen for HTTP requests on port 3000 by default.

## Frontend
1. open a second terminal and run cd `cd angular_frontend` to enter the frondend folder
2. `npm install` to install the packages
3. `ng serve` to start the frondend server. Navigate to `http://localhost:4200/`. The app will automatically reload if you change any of the source files.

## Select Business Models

1. Create a new platform company by altering the companyName in the `angular_frontend/src/app/services/company.service.ts`
2. Navigate to `http://localhost:4200/taxonomy` to select the business model properties 



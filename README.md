# MEDI_ALERT

Project Name: Medi-Alert 
Description:
The Medi-Alert mobile application is specifically created to address users' concerns regarding accessing reliable information on medications, vitamins, and potential interactions between different medications.

## Table of Contents
- [Features](#features)
- [Installation](#installation)
- [Usage](#usage)
- [Contributing](#contributing)
- [License](#license)

## Features
Medicine Search  - Enables users to effortlessly locate medications by typing medicine names into the medicine search bar, eliminating extraneous information, and displaying only the desired results like medicine description, dosage and frequency, prescription and overdosage.

Vitamins Cheat Sheet - Shows information about vitamins from vitamin A to K.

Medicine Interaction Checker - A functionality within the application that permits users to choose two distinct medications and provides information on their potential interactions when taken concurrently.

## Visual Code Installation
Step 1- Install or extract the following 
1. Download the Zip file of the Medi-Alert Mobile App backend and frontend located in Github and extract them.
2. Download and Install Navicat - https://navicat.com/en/products
3. Download the Visual Studio Community and install - https://visualstudio.microsoft.com/vs/community/

Step 2: Set up and connect
1. Open the Visual 
2. Launch Navicat and set a connection profile in the backend database.
3. Import data into the database

### Set up the Application
Step 1 - Run the Command for Frontend
1. Open the Visual Studio Code
2. Run codes for FrontEnd
```bash
npx expo start

```
Step 2 - Run the Command for Backend
1. Open the Visual Studio 2022 'Run as administrator'
2. Open Local Folder
3. Select the codes for Backend
4. Click the MedicineApp.sln > Select Restore Nuget Packages
5. Go to 'C# Program.cs' and change the server (must be the same in the SQLExpress Server)
6. Click Tools in the Visual Studio 22 > Nuget Package Manager > Package Manager Console
7. In Package Manager Console type 'Update-Database'
```bash
update-database

```

### Navicat GUI Set up and Connection
Step 1 - Set up and connect
1. Open the Navicut GUI
2. Connection > SQL Server
3. Set up a new connection (SQL Server).
4. Type any string in the 'Connection Name:'
5. Copy the Host from the SQLExpress and enter in the 'Host:'
6. Double Click the MedicineAppApi > Tables > Select any database > Import Wizard
7. Select 'Text file (*.txt)' and then Add File > Open

### Run the Application
Step 1 - Run the Application
1. Click run the Codes for backend in the Visual Studio 2022

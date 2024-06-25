# Ringo Telerik Reporting

This project, RingoTelerikWebApi, is designed to provide users with a robust API for managing and interacting with a PostgreSQL database. It includes features such as data retrieval and manipulation, user authentication, and more.

## Prerequisites

Before you begin, ensure you have the following installed:
- **PostgreSQL**: Ensure it's installed with a preloaded database dump.
- **.NET SDK and Runtime Environment**: Required to build and run the .NET projects.
- **IDE or Editor**: Any IDE or editor capable of handling .NET projects, like Visual Studio.
  
Also, ensure:
* You have installed the latest version of [ASP.NET Core](https://dotnet.microsoft.com/download)
* You have a Windows/Linux/Mac machine capable of running .NET applications.
* You have a basic understanding of C# and .NET.


## Installation

Follow these steps to get the project up and running on your local machine:

### 1. Clone the project to your local machine
### 2. Update the Connection String in appsettings.json. Make sure PostgreSQL is installed and the database 'ringo' is set up. Update the connection string if you use a different database name.

```json
{
  "ConnectionStrings": {
    "DefaultConnection": "Host=localhost;Port=5432;Database=yourdatabasename;Username=yourdatabaseusername;Password=yourpassword"
  }
}
```

### 3. Install all the Dependencies (NuGet)
### 4. Run the Application 
By default, the application should be accessible at the following URLs:

    HTTPS: https://localhost:7196
    HTTP: http://localhost:5053

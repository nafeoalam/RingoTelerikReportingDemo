# RingoTelerikWebApi

This project, RingoTelerikWebApi, is designed to provide users with a robust API for managing and interacting with a PostgreSQL database. It includes features such as data retrieval and manipulation, user authentication, and more.

## Prerequisites

Before you begin, ensure you have the following installed:
- PostgreSQL with a preloaded database dump
- .NET SDK and runtime environment
- An IDE or editor capable of handling .NET projects

## Installation

Follow these steps to get the project up and running on your local machine:

### 1. Clone the project to your local machine
### 2. Update the Connection String in appsettings.json. Make sure PostgreSQL is installed and the database 'ringo' is set up. Update the connection string if you use a different database name.

```json
{
  "ConnectionStrings": {
    "DefaultConnection": "Host=localhost;Port=5432;Database=yourdatabasename;Username=postgres;Password=yourpassword"
  }
}
```

### 3. Install all the Dependencies (NuGet)
### 4. Run the Application 
By default, the application should be accessible at the following URLs:

    HTTPS: https://localhost:7196
    HTTP: http://localhost:5053

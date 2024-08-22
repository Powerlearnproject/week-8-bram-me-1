CREATE DATABASE IF NOT EXISTS expense_trackers;
USE expense_trackers;

CREATE TABLE Users (
    User_ID INT AUTO_INCREMENT PRIMARY KEY,
    Name VARCHAR(255) NOT NULL,
    Email VARCHAR(255) NOT NULL UNIQUE,
    Password VARCHAR(255) NOT NULL
);

CREATE TABLE Categories (
    Category_ID INT AUTO_INCREMENT PRIMARY KEY,
    Category_Name VARCHAR(255) NOT NULL
);

CREATE TABLE Expenses (
    Expense_ID INT AUTO_INCREMENT PRIMARY KEY,
    User_ID INT,
    Category_ID INT,
    Amount DECIMAL(10, 2) NOT NULL,
    Date DATE NOT NULL,
    Description TEXT,
    FOREIGN KEY (User_ID) REFERENCES Users(User_ID),
    FOREIGN KEY (Category_ID) REFERENCES Categories(Category_ID)
);

CREATE TABLE Income (
    Income_ID INT AUTO_INCREMENT PRIMARY KEY,
    User_ID INT,
    Amount DECIMAL(10, 2) NOT NULL,
    Date DATE NOT NULL,
    Source VARCHAR(255),
    FOREIGN KEY (User_ID) REFERENCES Users(User_ID)
);

CREATE TABLE Financial_Goals (
    Goal_ID INT AUTO_INCREMENT PRIMARY KEY,
    User_ID INT,
    Goal_Description TEXT,
    Target_Amount DECIMAL(10, 2) NOT NULL,
    Deadline_Date DATE NOT NULL,
    Achieved BOOLEAN NOT NULL,
    FOREIGN KEY (User_ID) REFERENCES Users(User_ID)
);

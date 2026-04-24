-- Create database
CREATE DATABASE job_portal;

USE job_portal;

-- Create jobs table
CREATE TABLE jobs (
  id INT PRIMARY KEY AUTO_INCREMENT,
  title VARCHAR(255),
  company VARCHAR(255),
  location VARCHAR(255),
  salary VARCHAR(100)
);

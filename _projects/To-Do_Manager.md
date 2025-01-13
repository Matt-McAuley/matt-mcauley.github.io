---
layout: page
title: To-Do Manager
description: A website for managing your to-do list
img: assets/img/To-Do_Manager/home.png
importance: 3
category: ' '
---

## GitHub Repository
[To-Do Manager](https://github.com/Matt-McAuley/To-Do-Manager)

<div class="small-space"></div>

## Contents

- [Summary](#summary)
- [Online Hosting](#online-hosting)
- [Images](#images--videos)
- [Running Locally](#running-locally)
- [Authors](#authors)

<div class="small-space"></div>

## Summary

This is a personal project where I created a website to manage 'To-Dos' which are
contained within projects. Each 'To-Do' has a title, description, due date, and priority and
each project has a title. To-Dos can be expanded to view a popup of all their information. Both
To-Dos and Projects can be edited or deleted. Clicking the add buttons creates a popup form for the user
to input the information for whichever they are creating. To-Dos are sorted by due date and projects are sorted
alphabetically. 

The frontend for the project was developed using React and Typescript, and the components and structure
are listed under the src/ directory. @emotion/styled CSS in TS was used to keep the CSS and its respective component contained together neatly.
I utilized React Router to created client side routing between sign up, login, and home pages. Users can create an account
on these pages and log in to view or edit their Projects and To-Dos.

The backend API for persisting user data and logging in is done with Flask and the database is SQLAlchemy which is all contained under the backend/ directory. 
User accounts are encrypted and stored in the database and JWTs are used to authenticate users, with tokens being stored in HTTPOnly cookies. 
I then created a Dockerfile to containerize the project and allow for easy deployment on an OCI instance.

This project taught me about Typescript, using React and JS libraries, creating an API with flask, using SQL and an ORM database, 
SSR, CSR, fetching data, authentication, full-stack software development, containerization, and cloud computing. It was
very rewarding to develop this website iteratively over the course of many months, integrating new things that I learned and being able
to produce a full-stack website that is aesthetically pleasing and functional.

<div class="small-space"></div>

## Online Hosting
The website is hosted on an [OCI Instance](http://150.136.36.76/).

Email: test@gmail.com

Password: password

<div class="small-space"></div>

## Images & Videos

<div class="small-space"></div>

#### Login Page
<img src="https://matt-mcauley.github.io/assets/img/To-Do_Manager/login.png" alt="Login Page Image" style="width: 1000px">

<div class="small-space"></div>

#### Home Page
<img src="https://matt-mcauley.github.io/assets/img/To-Do_Manager/home.png" alt="Home Page Image" style="width: 1000px">

<div class="small-space"></div>

#### Video Demo

<div style="text-align: left;">
  <video width="1000" height="563" controls>
    <source src="https://matt-mcauley.github.io/assets/img/To-Do_Manager/video.mp4" type="video/mp4">
    Your browser does not support the video tag.
  </video>
</div>

<div class="small-space"></div>

## Running locally

<div class="small-space"></div>

#### Step 1: Download the source code
Clone or download a zip file of the source code onto your device

<div class="small-space"></div>

#### Step 2: Set up a virtual environment
Create a virtual environment in Python (or using conda if more familiar):

Run `python -m venv <virtual_env_name>` in your project directory to create a new virtual environment, remember to change <virtual_env_name> to your preferred environment name.

<div class="small-space"></div>

#### Step 3: Install dependencies
You need to install dependencies by running `python -m pip install -r requirements.txt` in the backend folder.

<div class="small-space"></div>

#### Step 4: Command to run project locally:
```python backend/app.py```

<div class="small-space"></div>

## Authors

<table style="border-collapse: collapse; border:none;">
  <tr  style="border:none;">
    <td style="border:none;"><strong>Matthew McAuley</strong></td>
  </tr>
  <tr style="border:none;">
    <td style="border:none;">mwm223@cornell.edu</td>
  </tr>
</table>
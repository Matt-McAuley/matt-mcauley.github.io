---
layout: page
title: Exercise Engine
description: Information retrieval system for exercises
img: assets/img/Exercise_Engine/home.png
importance: 1
category: ' '
related_publications: false
---

## Contents

- [Summary](#summary)
- [Images](#images--videos)
- [Running Locally](#running-locally)
- [Online Hosting](#online-hosting)
- [Authors](#authors)

## Summary

This is a project for **CS/INFO 4300 class at Cornell University**, where we worked
in a 5-person software development team to build an information retrieval system of our
choosing. We decided to return the most similar exercises given an exercise queried either
chosen from the dropdown or given freeform. Our website uses HTML, JS, and CSS to make
backend requests and display the results in an aesthetically pleasing way. We allow for
filtering based on muscle group, difficulty, and equipment used and display the reviews
taken from [bodybuilding.com](https://bodybuilding.com), the exercise description, the muscle 
groups and equipment used, the most relevant YouTube search, and the similarity score. The backend 
is a python app built using the Flask framework which takes in our Selenium-web scraped dataset 
and performs SVD text-mining on it. It then uses cosine similarity on the embeddings to return the top 5 most similar 
results that fit within the filters. This project taught us lots about utilizing agile development 
within a large software development team to build a product. We discovered how to webscrape data, 
build an appealing frontend, and utilize the methods learned in class to produce an IR system on the backend.

I then individually forked this repository to host it on an AWS EC2 instance to learn about containerization, cloud computing, and DevOps.

## Images & Videos

#### Home Page
![Home Page Image](https://matt-mcauley.github.io/assets/img/Exercise_Engine/home.png)

#### Results Page
![Results Page Image](https://matt-mcauley.github.io/assets/img/Exercise_Engine/results.png)

#### Video Demo
https://matt-mcauley.github.io/assets/img/Exercise_Engine/video.mp4

<div style="text-align: center;">
  <video width="640" height="360" controls>
    <source src="https://matt-mcauley.github.io/assets/img/Exercise_Engine/video.mp4" type="video/mp4">
    Your browser does not support the video tag.
  </video>
</div>

## Running locally

#### Step 1: Download the source code
Clone or download a zip file of the source code onto your device


#### Step 2: Set up a virtual environment
Create a virtual environment in Python (or using conda if more familiar):

Run `python -m venv <virtual_env_name>` in your project directory to create a new virtual environment, remember to change <virtual_env_name> to your preferred environment name.

#### Step 3: Install dependencies
You need to install dependencies by running `python -m pip install -r requirements.txt` in the backend folder.

#### Step 4: Command to run project locally:
```python backend/app.py```

## Online Hosting
The website is hosted on an [AWS Server](http://18.218.132.35).

## Authors

#### Matthew McAuley
mwm223@cornell.edu

#### Sharanya Dabas
sd699@cornell.edu

#### Eman Abdu
ema88@cornell.edu

#### Alex Kushnirsky
ask256@cornell.edu

#### RJ Powers
rgp58@cornell.edu
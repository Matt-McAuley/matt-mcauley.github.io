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
- [Online Hosting](#online-hosting)
- [Images](#images--videos)
- [Running Locally](#running-locally)
- [Authors](#authors)

<div class="small-space"></div>

## Summary

This is a project for **CS/INFO 4300 at Cornell University**, where we worked
in a 5-person software development team to build an information retrieval system of our
choosing. We decided to return the most similar exercises given an exercise queried by the user. The exercise could be either
chosen from the dropdown or given freeform. Our website uses HTML, JS, and CSS to make
backend requests, apply filters, and display the results in an aesthetically pleasing way. We allow for
filtering based on muscle group, difficulty, and equipment used. The reviews displayed are
taken from [bodybuilding.com](https://bodybuilding.com) where users can rate exercises on a scale from 0-10. We also show the exercise description, muscle 
groups, equipment used, most relevant YouTube search, and similarity score. The backend 
is a python app built using the Flask framework. It loads our Selenium-webscraped dataset 
and performs SVD text-mining on it. It then uses cosine similarity on the embeddings to return the top 5 most similar 
results that fit within the filters. This project gave me insight into utilizing agile development 
within a sizeable software development team to build a product. I learned about webscraping data, 
building an appealing frontend with static HTML, CSS, and JS, and utilizing the methods learned in class to produce an IR system on the backend.

I then individually forked this repository and created a Dockerfile to host it on an AWS EC2 instance to learn about containerization, cloud computing, and DevOps.

<div class="small-space"></div>

## Online Hosting
The website is hosted on an [AWS Instance](http://18.218.132.35).

<div class="small-space"></div>

## Images & Videos

<div class="small-space"></div>

#### Home Page
<img src="https://matt-mcauley.github.io/assets/img/Exercise_Engine/home.png" alt="Home Page Image" style="width: 1000px">

<div class="small-space"></div>

#### Results Page
<img src="https://matt-mcauley.github.io/assets/img/Exercise_Engine/results.png" alt="Results Page Image" style="width: 1000px">

<div class="small-space"></div>

#### Video Demo

<div style="text-align: left;">
  <video width="1000" height="563" controls>
    <source src="https://matt-mcauley.github.io/assets/img/Exercise_Engine/video.mp4" type="video/mp4">
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
    <td style="border:none;"><strong>Sharanya Dabas</strong></td>
    <td style="border:none;"><strong>Eman Abdu</strong></td>
    <td style="border:none;"><strong>Alex Kushnirsky</strong></td>
    <td style="border:none;"><strong>RJ Powers</strong></td>
  </tr>
  <tr style="border:none;">
    <td style="border:none;">mwm223@cornell.edu</td>
    <td style="border:none;">sd699@cornell.edu</td>
    <td style="border:none;">ema88@cornell.edu</td>
    <td style="border:none;">ask256@cornell.edu</td>
    <td style="border:none;">rgp58@cornell.edu</td>
  </tr>
</table>
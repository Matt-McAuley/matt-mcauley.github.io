---
layout: page
title: Exercise Engine
description: Information retrieval system for exercises
img: assets/img/12.jpg
importance: 1
category: ' '
related_publications: false
---

# Exercise Engine
## Contents

- [Summary](#summary)
- [Images](#images)
- [Running Locally](#running-locally)
- [Online Hosting](#online-hosting)
- [Authors](#authors)

## Summary

This is a project for **"CS/INFO 4300 class at Cornell University"**, where we worked
in a 5 person software development team to build an information retrieval system of our
choosing. We decided to return the most similar exercises given an exercise queried either
chosen from the dropdown or given freeform. Our website uses HTML, JS, and CSS to make
backend requests and display the results in a aesthetically pleasing way. We allow for
filtering based on muscle group, difficulty, and equipment used and display the reviews
taken from [bodybuilding.com](https://bodybuilding.com), the exercise description, the muscle groups and equimpent used, the most relevant youtube search, and the similarity score. The backend is a python app built using the Flask framework which takes in our Selenium-webscraped dataset and performs SVD text-mining on it. It then uses the embeddings to return the top 5 most similar results that fit within the filters. This project taught us lots about utilizing agile development within a large software development team to build a product. We discovered how to webscrape data, build an appealing frontend, and utilize the methods learned in class to produce an IR system on the backend.

I then individually forked this repository to host it on an AWS EC2 instance to learn about containerization, cloud computing, and DevOps.

## Images

### Home Page
![Home Page Image](/backend/static/images/Home%20Page.png)

### Results Page
![Results Page Image](/backend/static/images/Results%20Page.png)

## Running locally

### Step 1: Download the source code
Clone or download a zip file of the source code onto your device


### Step 2: Set up a virtual environment
Create a virtual environment in Python (or using conda if more familiar):

Run `python -m venv <virtual_env_name>` in your project directory to create a new virtual environment, remember to change <virtual_env_name> to your preferred environment name.

### Step 3: Install dependencies
You need to install dependencies by running `python -m pip install -r requirements.txt` in the backend folder.

## Command to run project locally (in backend folder):
```flask run --host=0.0.0.0 --port=5000```

## Online Hosting
The website is hosted on an [AWS Server](http://18.218.132.35).

## Authors

### Matthew McAuley
mwm223@cornell.edu

### Sharanya Dabas
sd699@cornell.edu

### Eman Abdu
ema88@cornell.edu

### Alex Kushnirsky
ask256@cornell.edu

### RJ Powers
rgp58@cornell.edu

Every project has a beautiful feature showcase page.
It's easy to include images in a flexible 3-column grid format.
Make your photos 1/3, 2/3, or full width.

To give your project a background in the portfolio page, just add the img tag to the front matter like so:

    ---
    layout: page
    title: project
    description: a project with a background image
    img: /assets/img/12.jpg
    ---

<div class="row">
    <div class="col-sm mt-3 mt-md-0">
        {% include figure.liquid loading="eager" path="assets/img/1.jpg" title="example image" class="img-fluid rounded z-depth-1" %}
    </div>
    <div class="col-sm mt-3 mt-md-0">
        {% include figure.liquid loading="eager" path="assets/img/3.jpg" title="example image" class="img-fluid rounded z-depth-1" %}
    </div>
    <div class="col-sm mt-3 mt-md-0">
        {% include figure.liquid loading="eager" path="assets/img/5.jpg" title="example image" class="img-fluid rounded z-depth-1" %}
    </div>
</div>
<div class="caption">
    Caption photos easily. On the left, a road goes through a tunnel. Middle, leaves artistically fall in a hipster photoshoot. Right, in another hipster photoshoot, a lumberjack grasps a handful of pine needles.
</div>
<div class="row">
    <div class="col-sm mt-3 mt-md-0">
        {% include figure.liquid loading="eager" path="assets/img/5.jpg" title="example image" class="img-fluid rounded z-depth-1" %}
    </div>
</div>
<div class="caption">
    This image can also have a caption. It's like magic.
</div>

You can also put regular text between your rows of images, even citations {% cite einstein1950meaning %}.
Say you wanted to write a bit about your project before you posted the rest of the images.
You describe how you toiled, sweated, _bled_ for your project, and then... you reveal its glory in the next row of images.

<div class="row justify-content-sm-center">
    <div class="col-sm-8 mt-3 mt-md-0">
        {% include figure.liquid path="assets/img/6.jpg" title="example image" class="img-fluid rounded z-depth-1" %}
    </div>
    <div class="col-sm-4 mt-3 mt-md-0">
        {% include figure.liquid path="assets/img/11.jpg" title="example image" class="img-fluid rounded z-depth-1" %}
    </div>
</div>
<div class="caption">
    You can also have artistically styled 2/3 + 1/3 images, like these.
</div>

The code is simple.
Just wrap your images with `<div class="col-sm">` and place them inside `<div class="row">` (read more about the <a href="https://getbootstrap.com/docs/4.4/layout/grid/">Bootstrap Grid</a> system).
To make images responsive, add `img-fluid` class to each; for rounded corners and shadows use `rounded` and `z-depth-1` classes.
Here's the code for the last row of images above:

{% raw %}

```html
<div class="row justify-content-sm-center">
  <div class="col-sm-8 mt-3 mt-md-0">
    {% include figure.liquid path="assets/img/6.jpg" title="example image" class="img-fluid rounded z-depth-1" %}
  </div>
  <div class="col-sm-4 mt-3 mt-md-0">
    {% include figure.liquid path="assets/img/11.jpg" title="example image" class="img-fluid rounded z-depth-1" %}
  </div>
</div>
```

{% endraw %}

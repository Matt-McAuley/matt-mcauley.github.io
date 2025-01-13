---
layout: page
title: Caml Capital
description: Terminal recreation of Monopoly done in OCaml
img: assets/img/Caml_Capital/start.png
importance: 4
category: ' '
---


## GitHub Repository
[Caml Capital](https://github.com/Matt-McAuley/Caml-Capital)

<div class="small-space"></div>

## Contents

- [Summary](#summary)
- [Images & Videos](#images--videos)
- [Running Locally](#running-locally)
- [Authors](#authors)

<div class="small-space"></div>

## Summary

This is a project for **CS 3110 at Cornell University**, where we
worked in a team of 3 to develop any software of our choosing over the course of the semester.
We chose to make an OCaml terminal recreation of the board game Monopoly. Our code is mostly functional
with small imperative features to control property rent. We have most of our game logic within
bin/main.ml where the game loop resides and the code determines what should happen on each player's turn.
We have compilation units within lib to represent Property and Player data types. Our data for the information
on each property is stored within a CSV file in data/ along with different ASCII artworks. Our compilation
units were tested with an OUnit test suite and the rest of our code was tested manually by playing our game. We completed
the project in multiple sprints where we had to develop working prototypes that provided client value. We then continued
to iterate and improve until we had a product that met our standards at the end of the semester. We learned about working
in an agile software development team, functional programming, game design, version control, and proper code testing which were
all necessary to make this project successful.

<div class="small-space"></div>

## Images & Videos

<div class="small-space"></div>

#### Start Screen
<img src="https://matt-mcauley.github.io/assets/img/Caml_Capital/start.png" alt="Start Screen Image" style="width: 1000px">

<div class="small-space"></div>

#### Mid Game Screen
<img src="https://matt-mcauley.github.io/assets/img/Caml_Capital/midgame.png" alt="Mid Game Screen Image" style="width: 1000px">

<div class="small-space"></div>

#### Video Demo

<div style="text-align: left;">
  <video width="1000" height="563" controls>
    <source src="https://matt-mcauley.github.io/assets/img/Caml_Capital/gameplay.mp4" type="video/mp4">
    Your browser does not support the video tag.
  </video>
</div>

<div class="small-space"></div>

## Running locally (requires dune and opam)

<div class="small-space"></div>

#### Step 1: Download the source code
Clone or download a zip file of the source code onto your device

<div class="small-space"></div>

#### Step 2: Install Dependencies
Follow the instructions in INSTALL.txt

<div class="small-space"></div>

#### Step 3: Command to run project locally:
```dune exec bin/main.exe```

<div class="small-space"></div>

## Authors

<table style="border-collapse: collapse; border:none;">
  <tr  style="border:none;">
    <td style="border:none;"><strong>Matthew McAuley</strong></td>
    <td style="border:none;"><strong>Sharanya Dabas</strong></td>
    <td style="border:none;"><strong>Erdis Brahimi</strong></td>
  </tr>
  <tr style="border:none;">
    <td style="border:none;">mwm223@cornell.edu</td>
    <td style="border:none;">sd699@cornell.edu</td>
    <td style="border:none;">eb697@cornell.edu</td>
  </tr>
</table>
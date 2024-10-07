---
title: "Packing and Cracking (2020)"
cover: "8.jpg"
date: "2020-10-24"
categories:
    - software-development
tags:
    - live-performance
work-type:
    - lab-work
client:
    - museum
application:
    - web
    - video-conference
tech:
    - vanilla-javascript
    - php
posttype: 'design'
featuredImage: '../post_images/packingandcracking_square.png'
---

# Cue System for Browser-Based Performance

<cover-img>

<img src="../post_images/packingandcracking/game10_screenshot1.png" />

</cover-img>

<design-meta>

### WHAT

Participatory, civics-education performance

### WHEN

September, October 2020

### MY ROLE

UI Design\
Front-End Development in HTML/CSS/Javascript\
'Board Op'

### TEAM

Joseph Amodei\
Rachel Gita Karp\
Rory Kulz

</design-meta>

<grid-container>

# OVERVIEW

## What is Packing and Cracking?

<quote>

"Do we choose our politicians, or do our politicians choose us?

Packing and Cracking is an interactive mapmaking event about <a href="https://www.youtube.com/watch?v=Mky11UJb9AY&ab_channel=CGPGrey">gerrymandering</a>: the pervasive practice of politicians choosing their voters rather than the other way around.

Through participatory drawing and map-drawing games, Packing and Cracking uses critical cartography, gerrymandering history, and interviews with politicians and reformers today to show how easy and disenfranchising gerrymandering can be and ask what, if anything, we should do about it."

</quote>

- from the online [documentation of the performance](https://www.packingandcracking.com/)

<br><br>

# PRODUCT

## A Browser-Based Game Page

For the online performances of Packing and Cracking, I helped develop a browser-based cue system and a collaborative drawing app.

We defined and triggered changes to a custom "game page" that audience members viewed alongside the performance in Zoom.

<figure>
<img src="../post_images/packingandcracking/game4_screenshot2.png" />
<figcaption>Desktop screenshot of a rehearsal. On the left, the Zoom call with an aggie.io drawing canvas screen-shared. On the right, our game page.</figcaption>
</figure>

<br><br>

This custom software was used in Packing and Cracking's presentation through the Philadelphia Fringe Festival in September 2020, and through University of North Carolina-Chapel Hill’s Process Series in October 2020.

<!-- [Find the full documentation on Github.](https://github.com/joshuakery/PackingAndCrackingCueSystem) -->

# DOCUMENTATION

Watch the full-length documentation of Packing and Cracking at University of North Carolina-Chapel Hill’s Process Series, October 2020:

`youtube: https://youtu.be/gb2MUFC6qlA`

<text-pair>

<h4>

In the event, audiences participated in a series of interactive games, where they drew, responded to quizzes, explored maps, and watched interviews with local politicans and activists talking about gerrymandering.

</h4>

<img src="../post_images/packingandcracking/game1-rain.gif" />
<img src="../post_images/packingandcracking/game6-responses.png" />
<img src="../post_images/packingandcracking/game10-flags.png" />

</text-pair>


<br><br>

# COLLABORATIVE DRAWING TOOLS

## A Show About Maps

Audience members draw personal maps at the beginning of the performance:

<img src="../post_images/packingandcracking/game4_screenshot1_detail.png" />

<img src="../post_images/packingandcracking/game4_screenshot2_detail.png" />

These personal maps help challenge the authority of the maps we see all around us.

## A Custom Drawing Tool

For the October performance, I developed a drawing tool with glitch.me to reduce the learning curve for drawing online:

<img src="../post_images/packingandcracking/custom_drawing.png" />

I adapted the drawing tool for its three uses in the performance:

<img-pair>

<img src="../post_images/packingandcracking/game3.png" />

<h4>

Game 3, in which audience members collaborate on a flag for their assigned team,

</h4>

</img-pair>



<text-pair>

<h4>

Game 8, in which audience members draw their own gerrymandering lines,

</h4>

<img src="../post_images/packingandcracking/game8_detail.png" />

</text-pair>



<img-pair>

<img src="../post_images/packingandcracking/game9_detail.png" />

<h4>

And Game 9, in which audience members draw what they think the heavily gerrymandered districts of their state look like.

</h4>

</img-pair>

Using our own platform allowed us to more easily gather audience members' drawings to share back out with them throughout the performance.

The drawings below come from Game 9, when facilitators and audience members draw on top of the heavily gerrymandered districts in their state.

<img src="../post_images/packingandcracking/district_drawings.png" />

<br><br>

# TECHNOLOGY USED

## Maps APIs

Audience members explored maps through our use of the Google Maps API and Mapbox.

<full-width-image>

<img src="../post_images/packingandcracking/game10_screenshot1.png" />

</full-width-image>

Above, audience members submitted locations of their choice that we geocoded and plotted on a map of North Carolina's congressional districts, highlighting the hidden ways these district lines split up the state.

We incorporated both the Google Maps API and Mapbox SDK into the performance.

<img-pair>

<img src="../post_images/packingandcracking/game5.png" />

<h4>

Audience members submitted their locations for the above map in Game 5. On the back-end, we used the Google APIs to do the geocoding and plotting.

</h4>

</img-pair>

<text-pair>

<h4>

In Game 12, we used Mapbox to let audience members explore the current U.S. Congressional Districts.

</h4>

<img src="../post_images/packingandcracking/game12.png" />

</text-pair>

<img-pair>

<img src="../post_images/packingandcracking/game12_detail.png" />

<h4>

On the back-end, we used the Google Civics API to get the Congressional District of any user-submitted address, and the name of the representative:

</h4>

</img-pair>


<br><br>

# TECHNOLOGY DEVELOPED

## Theatrical Cue System

The custom webpage was controlled by a cue system that we developed in PHP and Javascript.

A "board-op" moved the performance through its pre-defined cues using a webpage side by side with the virtual performance:

<img src="../post_images/packingandcracking/game2_admin_overview.png" />

Assigning audience members into groups increases their motivation to participate and to learn from the performance.

As such, we developed the admin page to allow us to assign them to different teams:

<img src="../post_images/packingandcracking/different_teams.png" />

This system let us better curate our audience's attention and improve the performance's accessibility.

</grid-container>
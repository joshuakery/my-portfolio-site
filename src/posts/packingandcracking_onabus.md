---
title: "Packing and Cracking: On a Bus"
cover: "8.jpg"
date: "2021-10-11"
categories:
    - experience-design
    - software-development
tags:
    - featured
work-type:
    - commissioned
client:
    - university
application:
    - web
tech:
    - react
    - firebase
posttype: 'design'
featuredImage: '../post_images/packingandcracking_onabus.jpg'
---

# A Mobile & Mobile Performance Party About Gerrymandering

<cover-img>

<img src="../post_images/packingandcracking_onabus/packingandcracking_cover.jpg" alt="Parking lot with chalk drawings by audience, depicting a salamander and the words 'We Are One District'" title="Audience members were invited to react to the performance with chalk drawings at the main stop of our bus trip: an apartment complex split into separate voting districts.">

</cover-img>

<design-meta>

### WHAT

Responsive Web App for Live Performance

### WHEN

October 2021

### MY ROLE

Game & Experience Design\
Technical Design for Hardware\
Developed Audience-Ready Software

### TOOLS

React\
Firebase\
p5\
Web Sockets

</design-meta>

<grid-container>

# OVERVIEW

## Packing and Cracking?

<quote>

Do we choose our politicians, or do our politicians choose us?

Packing and Cracking is a mapmaking party about gerrymandering: the pervasive practice of politicians choosing their voters rather than the other way around.

Through drawing and map-drawing games, Packing and Cracking uses critical cartography, gerrymandering history, and interviews with politicians and reformers today to show how easy and disenfranchising gerrymandering can be and ask what we should do about it.

</quote>

- from [packingandcracking.com](https://www.packingandcracking.com/)

<br>

For Packing and Cracking's 2021 run, I revamped its [digital experience](/posts/packingandcracking) with a new mobile app for a newly mobile audience.

We were bringing the audience to real sites of gerrymandering, by bus!


# AUDIENCE EXPERIENCE

## A Drive to a District Split

To make real and visible how voting district lines can manipulate communities, we brought our audience on a bus route along PA State House district lines to a site of a divided apartment complex.

<bespoke-container title="Outside onboarding at Chatham University; on-board games as we traced the general shape of State House district lines in Pittsburgh; our main stop at the site of a divided apartment complex.">
<img src="../post_images/packingandcracking_onabus/journey.svg" alt="Graphic of abstracted bus route, with images of audience members and performers in the show along the way." title=" "/>
</bespoke-container>

<br><br>

## Mobile Games on a Mobile Bus

Packing and Cracking teaches audiences about gerrymandering with a series of mini-games and prompts for reflection.

<img src="../post_images/packingandcracking_onabus/phone-use.jpg" alt="Audience member holds out their phone, which shows the district-drawing game." title="An audience member holds out their phone featuring a game of dividing an electorate into districts."/>

<br><br>

<multi-mobile-container title="Mobile Stills. Left: A simple district-drawing exercise using a p5 canvas. Right: A text input allowing audiences to reflect on what they value most in their government.">
<mobile-container>
<img src="../post_images/packingandcracking_onabus/phone_drawing.jpg" style="width:100%" />
</mobile-container>
<mobile-container>
<img src="../post_images/packingandcracking_onabus//phone_text.jpg" style="width:100%" />
</mobile-container>
</multi-mobile-container>

<br><br>

Audience members input responses on their smartphones and a large monitor mounted at the front of the bus showed answers and a scoreboard.

<div style="width: 100%; display: flex; margin-bottom: 30px">
<mobile-container>
<img src="../post_images/packingandcracking_onabus/phone_quiz.jpg" style="width:100%" />
</mobile-container>
</div>
<div style="padding: 10px; border: 5px solid white; border-radius: 10px; width: 100%">
<img src="../post_images/packingandcracking_onabus/monitor_quiz.jpg" alt="Screenshot of quiz results on large public display." title=" "/>
</div>
<figcaption>Top: Mobile quiz input. Bottom: Common display showing the results of the audience's input; in this example, all responses for the Green Team were for answer (a) state politicans.</figcaption>

# EXPERIENCE DESIGN PROCESS

## Site-Specific Research

We traced by car the lines of the 2011 Pennsylvania State House districts in search of a strong metaphor for the manipulative drawing of district lines.

<figure>
<iframe width='100%' height='400px' src="https://api.mapbox.com/styles/v1/joshuakery/ckt3czxm806up17o62cf5zt1y.html?title=false&access_token=pk.eyJ1Ijoiam9zaHVha2VyeSIsImEiOiJjanUwaTZweWQyeXY1NDRxdW1sNWR5cmtjIn0.cW4oEV9tM0PGv8EhMUww4Q&zoomwheel=false#13.64/40.49414/-79.8829" title="Packing and Cracking Research:Lines of Interest" style="border:none; margin-bottom:0"></iframe>
<figcaption>This map shows the 2011 Pennsylvania State House districts, overlaid with three townships divided across multiple districts that we visited on our research trip. I prepared a version of this map in advance of our journey, so that we could reference real geographic data while we drove around Allegheny County.</figcaption>
</figure>

Our journey took us around District 21's protrusion into O'Hara Township, down the 38-39 split of South Park, and to the cliffside boundaries of Clairton.

We settled on a split dividing an apartment complex in O'Hara Township as the destination for our bus route in the show.

<img src="../post_images/packingandcracking_onabus/split.jpg" alt="Graphic overlay of State House districts dividing an apartment complex in O'Hara Township, PA." title="The line for 2011 State House districts 30 & 32 runs down the middle of this apartment building at 302 Fox Chapel Rd."/>

<img src="../post_images/packingandcracking_onabus/split-map.jpg" alt="Graphic map of State House districts dividing an apartment complex in O'Hara Township, PA." title="Because of this line, the buildings at 300 & 302 Fox Chapel Rd, which otherwise belong to the same development, fall into two separate State House districts."/>

<br><br>

## Game Design Ideation

As a team, we brainstormed how best to adapt Packing and Cracking's [prior](/posts/packingandcracking) [formats](https://www.packingandcracking.com/in-person) to a show on a moving bus.

<img src="../post_images/packingandcracking_onabus/game-dez.jpg" alt="Post-it notes planning the game design for the experience." title="Post-its from our collaborative experience-design session."/>

<div style="display: flex">

<div style="width: 48%; margin-right: auto">
<img src="../post_images/packingandcracking_onabus/game-dez-drawthelines.jpg" alt="Draw the Lines PA Educational flashcard with our game design ideation markup." title="Draw the Lines PA created these educational flashcards for teaching folks about gerrymandering. We marked up these as part of our ideation process, translating the competing interests in district drawing into game mechanics."/>
</div>
<div style="width: 48%; margin-left: auto">
<img src="../post_images/packingandcracking_onabus/game-dez-drawthelines1.jpg" alt="Draw the Lines PA Educational flashcard with our game design ideation markup." title="Draw the Lines PA Educational flashcard with our game design ideation markup."/>
</div>

</div>

# TECHNICAL HIGHLIGHTS

## On Board Wi-fi

We brought a set of mobile web games into the hands of each audience member on a moving vehicle.

To avoid Internet outages while in transit, we hosted an offline network on the bus and served the web app from a laptop on board.

<bespoke-container title="Network diagram of the experience. We ran a wireless router on the bus and asked audience members connect to its wi-fi network during the show. The web app was served from a Macbook Pro on the network, which also output a video signal to a hardware mixer connected to a large monitor on the bus.">
<img src="../post_images/packingandcracking_onabus/tech.svg" alt="Graphic of a bus with a network diagram inside, featuring a wireless router connected to laptop and several smartphones, as well as a large monitor connected via HDMI to the laptop" title=" "/>
</bespoke-container>

I used Firebase's [Local Emulator](https://firebase.google.com/docs/emulator-suite) and a React app's dev mode to serve the webapp entirely offline.

<br><br>

## Admin Control

Audience members sign-on to one of two teams.

Behind the scenes, as show tech I controlled our games using a [custom cue-system](/posts/cue-system) admin page.

<browser-container>
<img src="../post_images/cue-system/admin.jpg">
</browser-container>

With a button click, I changed which games audience members saw on their phones. Changes were saved in our Firebase instance and passed to the audience's smartphone clients via web sockets.


# SHOW DETAILS

Audience members were split into two teams, Orange and Green, each with their own team leader in corresponding costume.

<img src="../post_images/packingandcracking_onabus/costumes0.jpg" alt="Performer in orange cowboy hat looks back from their seat on a coach bus." title="The Orange Team leader calls back to their team at the back of the bus."/>

Additionally, three performers inspired by CPG Grey's [Gerrymandering Explained](https://youtu.be/Mky11UJb9AY?si=vMcGO9sivEYR17LP)—the Bear, Cat, and Weasel—facilitated the show.

<img src="../post_images/packingandcracking_onabus/bus_disembark.jpg" alt="Performer hands audience members chalk as they disembark from a bus." title="The Cat hands audience members chalk as they disembark at the site of a community split by voting district lines."/>

The bus route ended at a parking lot for a community of two apartment buildings split into 2011 Pennsylvania House Districts 30 and 32.

Audience members used chalk to write their responses to this division.

<img src="../post_images/packingandcracking_onabus/packingandcracking_cover.jpg" alt="Parking lot with chalk drawings by audience, depicting a salamander and the words 'We Are One District'" title="Audience members were invited to react to the performance with chalk drawings at the site."/>

<div>
<button-link href="https://www.packingandcracking.com/" target="_blank">LEARN MORE ABOUT PACKING AND CRACKING</button-link>
</div>

</grid-container>
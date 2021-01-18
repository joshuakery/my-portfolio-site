---
title: "Kidspool"
cover: "8.jpg"
date: "2019-12-12"
categories:
    - uxui
    - design
tags:
    - ux
posttype: 'design'
featuredImage: '../post_images/kidspool_square.png'
---

#Responsive Web Design Study

<cover-img>

<img src="../post_images/kidspool/kidspool_responsive_mockup.jpg">

</cover-img>

<design-meta>

###MEDIUM

Responsive Web App

###WHEN

December, 2019

###MY ROLE

Research, Design

###TEAM

Aaron Bishop\
Missy Chen\
Gautham Sajith

###GOAL

Reduce overhead for carpooling student athletes

###TOOLS

Figma

</design-meta>

<grid-container>

#OVERVIEW

##It's a common surprise in youth sports: The *parents* are committing almost as much time to the sport as the kids.

##Nowhere is this time commitment more strongly felt than when driving their athletes to practices and games.

##We designed Kidspool, a web app for organizing youth athlete carpools, to free up more time for parents by improving the existing carpool structure — making it more flexible, accessible, and fair.

#FINAL PRODUCT

The following GIFs showcase our final design solution. Our main focus in these prototypes is to have a **simplified, straightforward interface**.

###Requesting a Ride

<img-pair>

<img src="../post_images/kidspool/kidspool_prototype1.gif">

<h4>

Users can tap a card for which there is no ride arranged to either offer a ride or request a ride.

**Need met:** Parents act as both drivers and ride-requesters, and our UI needs to serve both those needs.

The ride requesting flow allows parents to specify pickup location, number of seats, type of trip, and driver selection.

</h4>

</img-pair>

###A Driver Has Responded to Your Ride & Viewing the Leaderboard

<text-pair>

<h4>

Tapping on the header shows the driver leaderboard, which displays token counts for parents on your team.

**Need met:** The token system is an in-app currency to **encourage equal contribution to carpooling**.

Giving rides earns tokens, and requesting rides costs tokens. Tokens help parents avoid awkward conversations by providing automatic indirect feedback to under-contributing parents.

</h4>

<img src="../post_images/kidspool/kidspool_prototype2.gif">

</text-pair>

###Tracking a Driver On Their Way to Practice

<img-pair>

<img src="../post_images/kidspool/kidspool_prototype3.gif">

<h4>

Tapping on an active event-details page shows the driver’s route status and a live tracking dot for the ride. There are also affordances to contact the driver.

**Need met:** Children’s safety is a primary concern with this platform, and the live tracking and driver contact give parents peace of mind.

</h4>

</img-pair>

###Picking up Athletes in the Carpool

<text-pair>

<h4>

Tapping on an event that you’re driving for shows pickup information, incoming ride requests, and turn-by-turn navigation.

**Need met:** Parent drivers don’t need to leave the application to navigate to their pickups. They can respond to incoming requests from within the app.

</h4>

<img src="../post_images/kidspool/kidspool_prototype4.gif">

</text-pair>

###We’re featuring the Kidspool onboarding flow on a desktop/tablet screen. The desktop view offers more real-estate for parents to fill out an input-heavy form.

<full-width-image>

<img src="../post_images/kidspool/onboarding.png">

</full-width-image>

Parents will be given a link by their coach to join their team’s Kidspool community. Parents create an account, fill in their contact information, and most importantly, fill in their driving availability (bottom-right in the image).

Presenting this in the onboarding also establishes a **precedent that parents are all expected to drive** in addition to requesting rides.

###We also created the desktop version of the ride-tracking interface. 

<full-width-image>

<img src="../post_images/kidspool/desktop_driving.png">

</full-width-image>

Since safety is a primary concern for parents, we take advantage of the bigger screen size to give parents a **more comprehensive map**. Yet the design is still consistent with the user interactions and elements of the mobile application to **ensure learnability**.

#BACKGROUND

##For this design study, we took on youth athletics as a focus area that might benefit from a responsive web app.

#RESEARCH

##We conducted guerilla research with three stakeholder groups: parents, coaches, and club & league administrators.

We developed personas for these stakeholder groups, which would later inform our design process:

<img src="../post_images/kidspool/kidspool_parentpersona.png">

<text-pair>

<h4>

By analyzing these interviews through affinity diagraming, we generated several key insights:

1. Parents and coaches are both frustrated with the time commitment of youth sports.
2. Some youth athletes miss chances to play on certain teams because their parents lack the social connections with other players' parents.
3. Athletes and parents rely on coaches for organizational information and logistics.

</h4>

<img src="../post_images/kidspool/affinity_diagram.jpg">

</text-pair>

###From this research, we also developed a detailed journey map for parents and coaches:

<full-width-image>

<img src="../post_images/kidspool/journeymap.png">

</full-width-image>

Some of the lowest points in parents' emotional journeys involve the **time commitment** of getting their kids to practices and games.

Conversely, *coaches* are most frustrated with **time spent on planning and logistics, communication with parents, and player absence.**

#PROCESS

##With an understanding of these design opportunities, we iterated through several solutions via rapid storyboarding.

<full-width-image>

<img src="../post_images/kidspool/storyboards.png">

</full-width-image>

By speed-dating our storyboards, we identified a common need among parents and coaches: **To spend less time getting their kids to practice and games.**

We decided that a responsive web app would best meet this need by improving the **existing carpool network.** Carpooling already reduced parents' drive times and fostered community. Yet, from our research, we knew that even with carpools, parents still struggled with the time commitment of their children's sports.

###How might we improve the system so that they feel like it's working better for them?

We identified opportunities in three areas:

1. To efficiently accomodate **last minute requests**, so that the carpool is flexible right up to the last possible minute.
2. to **ease newcomers into the carpool**, to give them access with strong ties to the community, but also to grow that community.
3. To encourage **fair and equal contribution** to the team from all parents, so that the volunteer-nature of the carpool feels sustainable across seasons.

#SOLUTION

##Based on our research and storyboarding sessions, we began outlining user flow and rudimentary wireframes for our application.

We implemented a **mobile-first** approach, since we knew a majority of our key interactions would take place on the phone.

###As a group, we brainstormed wireframes for the main user flow on mobile.

<img-pair>

<img src="../post_images/kidspool/whiteboard_wireframes.png">

<h4>

In this step, our goal was to realize our vision onto a whiteboard so that **we were all on the same page** before we proceeded to the low-fi prototyping stage.

We were able to identify several key screens we needed to build next, such as:

- Home page with list of events
- Details screen for each event
- Map view with pickup route
- List of drivers to pick up from when requesting a ride

</h4>

</img-pair>

###Next, we entered a diverging phase in our design process. We individually created low-fidelity prototypes based on our initial wireframes.

<img src="../post_images/kidspool/lowfi.png">

Reconvening, we looked at our different prototypes and selected screens that **best conveyed the mental model** parents have about carpooling for sports practices.

We decided to focus our home screen on an **event-based model** rather than a request-based model. Each upcoming practice, game, or other team event will be an “event card” on the home screen. Each card will have a status (“matched”, “pending”, “driving”, etc.) and parents can tap the card to see more details.

<img-pair>

<img src="../post_images/kidspool/lowfi_flow_short.png">

<h4>

This led us to three natural flows from each event card:

1. Tap a card for an event you’ve been matched with a driver for to see trip details and a live tracking of the ride
2. Tap a card for an event that you’re driving for to see your pickup details and driving instructions
3. Tap a card which is not either of the above to either:
4. Request a ride, or
5. Offer a ride

</h4>

</img-pair>

###Once our low-fidelity prototype was finalized, we diverged once again to determine high-fidelity guidelines with which to build our high-fi prototype.

<img src="../post_images/kidspool/different_design_screenshots.png">

At this stage, we each built a screen in high fidelity in our individual design styles.

<img src="../post_images/kidspool/style_guide.png">

We arrived at this style guide for the rest of our app.

###We submitted this initial high-fidelity prototype for critique:

<img src="../post_images/kidspool/desktop_home_mobile_combined.png">

We received feedback that the UI and colors felt **hectic and overloaded.** We also received feedback that the event name (“Soccer practice”) felt more emphasized than it needed to be, and that the actual useful information (i.e. event statuses) felt secondary. Next, we focused on **reducing the amount of data presented** and **emphasizing event statuses.**

#REFLECTION

##We encountered several challenges in this open-ended project:

1. Finding the right level of formality during guerilla research - we wanted to come across as professional researchers, but not intimidate people
2. We were given freedom to select which problem to solve, but this can lead to a tyranny of choices. It was difficult to arrive at an appropriately small problem to solve
3. Determining how to adapt our mobile-first design to take full advantage of larger displays (e.g., PC displays) was difficult

###Throughout the project, we learned a great deal. Several key lessons include:

1. Investing in quality research tools (e.g., personas) can inform current-state analysis and pinpointing the right problem to solve
2. Adding an emotional dimension to our pitch helps listeners to empathize and relate to our message
3. Removing design elements can clarify and improve our design

*This image shows our development across our hi-fi prototypes:*

<img src="../post_images/kidspool/progress.png">

We learned a great deal about youth sports and its positive impact on the Pittsburgh community. Based on the positive feedback our design received, we believe that it has real potential to improve carpooling and, by extension, youth sports in real world settings.

</grid-container>
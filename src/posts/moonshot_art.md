---
title: "Design a Mission Patch"
cover: "8.jpg"
date: "2022-10-03"
categories:
    - software-development
tags:
    - featured
work-type:
    - commissioned
client:
    - museum
application:
    - kiosk
tech:
    - unity
    - opencv
posttype: 'design'
featuredImage: '../post_images/moonshot_art_square.gif'
---

# Dynamic Background Removal Interactive

<cover-img>

<img src="../post_images/moonshot_art/moonshot_art_experience0.jpg"
    alt="A child drawing at a table. Behind them is a mobile kiosk with a touch screen featuring the Moonshot: Design a Mission Patch software."
    title="A visitor using the Design a Mission Patch interactive at the Moonshot Museum."
    >

</cover-img>


<design-meta>

### WHAT

Museum Interactive

### WHEN

October 2022

### MY ROLE

Prototyped Background Removal\
Developed Visitor-Ready Software

### TOOLS

Python\
Unity\
OpenCV

</design-meta>

<grid-container>

# OVERVIEW

## Sharing Hand-Drawn Designs

Visitors create the visual identity for their moon mission by drawing their own mission patch, "scanning" it into the software, and previewing it on a mural of a colonized lunar landscape.

<!-- video here -->
<video-container title="Experience Mockup">

`vimeo: https://vimeo.com/1010622662`

</video-container>

# VISITOR EXPERIENCE

All visitors draw at a moveable table before inputting their images into the software.

<img src="../post_images/moonshot_art/moonshot_art_experience2.jpg" alt="Visitors sit around drawing table at Moonshot Museum. Among them is an instructor speaking with three small children drawing." title="Drawing Area. Photo courtesy of Luci Creative.">

<bespoke-container title="Scanning Screen">
<div style="border: 2px gray solid; border-radius: 20px; padding: 28px"><!-- blue border -->
<div style="border: 2px #4ba4e7 solid"><!-- gray border -->
<img src="../post_images/moonshot_art/moonshot_art_scanning.jpg" alt="Image of scanning screen from interactive."/>
</div><!-- blue border -->
</div><!-- gray border -->
</bespoke-container>

<br><br>

Like the other Moonshot Museum interactives, this one features two visitor modes:

<ol>
<li>Mission   - designed for school groups to break out into small teams, and</li>
<li>Space Now - an ambient experience for the museum's daily visitor flow.</li>
</ol>

<br>

<table style="width: 100%">
<tr>

<td style="width: 40%; padding-right: 10px">

<bespoke-container title="This welcome screen introduces the interactive to small teams in 'Mission' mode.">
<div style="border: 1px gray solid; border-radius: 10px; padding: 12px"><!-- blue border -->
<div style="border: 1px #4ba4e7 solid"><!-- gray border -->
<img src="../post_images/moonshot_art/moonshot_art_welcome.jpg" alt="Image of welcome screen from interactive."/>
</div><!-- blue border -->
</div><!-- gray border -->
</bespoke-container>

</td>

<td style="width: 40%; padding-right: 10px">

<bespoke-container title="This conclusion screen points teams to the next interactive in the Moonshot experience.">
<div style="border: 1px gray solid; border-radius: 10px; padding: 12px"><!-- blue border -->
<div style="border: 1px #4ba4e7 solid"><!-- gray border -->
<img src="../post_images/moonshot_art/moonshot_art_ending.jpg" alt="Image of ending screen from interactive."/>
</div><!-- blue border -->
</div><!-- gray border -->
</bespoke-container>

</td>

</tr>
</table>

<br><br>

In addition to sharing badge drawings, "Mission" teams also choose a legendary historical or mythological figure as the namesake for their moon base via a selection of brand key words.

<bespoke-container title="Word Picker Screen">
<div style="border: 2px gray solid; border-radius: 20px; padding: 28px"><!-- blue border -->
<div style="border: 2px #4ba4e7 solid"><!-- gray border -->
<img src="../post_images/moonshot_art/moonshot_art_word_picker.jpg" alt="Image of word picker screen from interactive."/>
</div><!-- blue border -->
</div><!-- gray border -->
</bespoke-container>

<bespoke-container title="Name Result Screen">
<div style="border: 2px gray solid; border-radius: 20px; padding: 28px"><!-- blue border -->
<div style="border: 2px #4ba4e7 solid"><!-- gray border -->
<img src="../post_images/moonshot_art/moonshot_art_name_result.jpg" alt="Image of name result screen from interactive."/>
</div><!-- blue border -->
</div><!-- gray border -->
</bespoke-container>

# TECHNICAL HIGHLIGHTS

## Background removal prototype and calibration

I developed in Python an initial prototype as a proof of concept for the automatic background removal this experience.

<bespoke-container title="Background removal algorithm comparison">
<div style="border: 2px gray dashed; border-radius: 20px; padding: 28px"><!-- blue border -->
<div style="border: 2px #4ba4e7 dashed"><!-- gray border -->
<img src="../post_images/moonshot_art/moonshot_art_prototype_testing.jpg" alt="Image of prototype comparing the background removal results of three different algorithms."/>
</div><!-- blue border -->
</div><!-- gray border -->
</bespoke-container>

<bespoke-container title="Background removal prototype demo">
<div style="border: 2px gray dashed; border-radius: 20px; padding: 28px"><!-- blue border -->
<div style="border: 2px #4ba4e7 dashed"><!-- gray border -->
<video-container title="Background removal prototype demo.">

`vimeo: https://vimeo.com/1017204262`

</video-container>
</div><!-- blue border -->
</div><!-- gray border -->
</bespoke-container>

<br><br>

The interactive features a debug menu used for calibrating the image scanning after changes in lighting.

<bespoke-container title="Background removal prototype demo">
<div style="border: 2px gray solid; border-radius: 20px; padding: 28px"><!-- blue border -->
<div style="border: 2px #4ba4e7 solid"><!-- gray border -->
<video-container title="Debug Menu for calibrating the interactive's image scanning.">

`vimeo: https://vimeo.com/1017200255`

</video-container>
</div><!-- blue border -->
</div><!-- gray border -->
</bespoke-container>



<br><br>

## Networked experience across five interactives

This interactive is networked to the other four Moonshot activities in order to sync the activity timers and pass teams' results back to the experience's server.


<img src="../post_images/moonshot_art/moonshot_networking_illustration.jpg" alt="Network diagram showing five interactives connected to a server." title=" "/>
<figcaption>
<span>
Moonshot network illustration calling out the three interactives I developed: Space Debates (top), Lunar Lost and Found (center), and Design a Mission Patch (bottom). Server by Chunk Icons from <a href="https://thenounproject.com/browse/icons/term/server/" target="_blank" title="Server Icons">Noun Project</a> (CC BY 3.0)
</span>
<figcaption>

I developed [Space Debates](/posts/moonshot_charter), [Design a Mission Patch](/posts/moonshot_art), and Lunar Lost and Found as clients for this server.


</grid-container>
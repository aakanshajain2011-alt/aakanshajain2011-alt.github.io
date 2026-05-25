---
layout: default
permalink: /publications/
title: research
description:
nav: true
nav_order: 2
---

<div class="publications">

<h2 class="category">Job Market Paper</h2>
{% bibliography -q @*[type=1. Job Market Paper]* %}

<h2 class="category">Publications</h2>
{% bibliography -q @*[type=2. Publications]* %}

<h2 class="category">Working Papers</h2>
{% bibliography -q @*[type=3. Working Papers]* %}

<h2 class="category">Works in Progress</h2>
{% bibliography -q @*[type=4. Works in Progress]* %}

<h2 class="category">Policy Reports and Public Engagement</h2>
{% bibliography -q @*[type=5. Policy Reports and Public Engagement]* %}

</div>

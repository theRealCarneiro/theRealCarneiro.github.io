---
title: Publications
layout: default
permalink: /publications/
---

<div class="is-flex flex-direction-column mx-6 mt-5">
    <input class="input is-flex-grow-0" type="text" id="inputSearch" onkeyup="searchArticle();" placeholder="Search...">
</div>
<br>

<div id="article" class="mx-6">
  <!-- {% bibliography -q @*[year >= {{2021}}]* %} -->
  {% bibliography %}

  <!-- <h1 class="title is-bold">Pré ALICE</h1> -->

  <!-- {% bibliography -q @*[year <= {{2014}}]* %} -->
</div>

---
title: Education
permalink: /education/
layout: default
---

<div class="education">
  {%- if page.title -%}
    <h1 class="page-heading">{{ page.title }}</h1>
  {%- endif -%}

	{%- if site.education.size > 0 -%}
	{%- assign education = site.education | sort: 'year' -%}

        <hr class='block-separator'>

        {%- for degree in education reversed -%}

            <div class="list-container">

                <div class="container-left">
                    <h2 id='{{degree.title | slugify }}-institution' class="list-title">{{ degree.institution }}</h2>
                    <p id='{{ degree.title | slugify }}-title'><b>{{ degree.title }}</b></p>
                    {%- if degree.program -%} <p id='{{ degree.title | slugify }}-program'>{{ degree.program }}</p> {%- endif -%}
                    <p id='{{ degree.title | slugify }}-year'>{{ degree.year }}</p>
                </div>

                <div class="container-right">
                    <p id='{{degree.title | slugify }}-description' class="quote">{{ degree.description }}</p>
                </div>

            </div>

            <hr class='block-separator'>

        {%- endfor -%}
	{%- endif -%}

</div>

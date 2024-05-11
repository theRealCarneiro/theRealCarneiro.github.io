---
title: Education
layout: default
permalink: /education/
---

<div class="education">
  <!-- {%- if page.title -%} -->
  <!--   <h1 class="page-heading">{{ page.title }}</h1> -->
  <!-- {%- endif -%} -->

	{%- if site.education.size > 0 -%}
	{%- assign education = site.education | sort: 'name' -%}
		<h2 class="education-list-heading">{{ page.list_title | base: "Repositories" }}</h2>
		<ul class="education-list">
            <hr class='block-separator'>
            {%- for degree in education reversed -%}
                <div class="degree">
                    <h5>
                        {{ degree.institution | escape }}
                    </h5>

                    <h5> {{ degree.title | escape }} </h5>

                    {%- if degree.program -%}
                        <p>{{ degree.program }}</p>
                    {%- endif -%}

                    <p>{{ degree.start_year }} - {{ degree.end_year }}</p>


                <div class="degree">
                <hr class='block-separator'>
			{%- endfor -%}
	{%- endif -%}

</div>


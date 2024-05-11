---
title: Repos
layout: default
permalink: /repos/
---

<div class="repos">
  <!-- {%- if page.title -%} -->
  <!--   <h1 class="page-heading">{{ page.title }}</h1> -->
  <!-- {%- endif -%} -->

	{%- if site.repos.size > 0 -%}
	{%- assign repos = site.repos | sort: 'name' -%}
		<h2 class="repo-list-heading">{{ page.list_title | base: "Repositories" }}</h2>
		<ul class="repo-list">
            <hr class='block-separator'>
			{%- for repo in repos -%}
					<h3>
						<a class="repo-link" href="{{ repo.url }}">
							{{ repo.title | escape }}
						</a>
					</h3>
					<p>{{ repo.description }}</p>
                <hr class='block-separator'>
			{%- endfor -%}
		</ul>
	{%- endif -%}

</div>


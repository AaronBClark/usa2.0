---
layout: default
title: USA 2.0
---

{% include hero.html %}

<section class="orientation container">
  <p>{{ site.data.homepage.orientation }}</p>
</section>

<section class="vision" id="vision">
  <div class="container vision-inner">
    <div class="section-intro vision-intro">
      <h2>The Vision</h2>
      <p>{{ site.data.homepage.vision_intro }}</p>
    </div>

    <div class="vision-copy">
      {% for paragraph in site.data.homepage.vision_paragraphs %}
        <p>{{ paragraph }}</p>
      {% endfor %}
    </div>
  </div>
</section>

<section class="platform container" id="platform">
  <div class="section-intro">
    <h2>The Platform</h2>
    <p>Scan the headers for the big picture. Open sections for immediate, legislative, and structural priorities.</p>
  </div>

  {% assign sorted_sections = site.sections | sort: "order" %}
  {% for section in sorted_sections %}
    {% include section-card.html section=section %}
  {% endfor %}
</section>

{% include cta.html %}

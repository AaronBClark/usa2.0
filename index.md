---
layout: default
title: USA 2.0
---

{% include hero.html %}

<section class="orientation container">
  <p>{{ site.data.homepage.orientation }}</p>
</section>

<section class="vision container" id="vision">
  <div class="section-intro">
    <h2>The Vision</h2>
    <p>A country where power is constrained, corruption is difficult, and the people share in the nation’s success.</p>
  </div>
  <ul class="vision-list">
    {% for item in site.data.homepage.vision %}
      <li>{{ item }}</li>
    {% endfor %}
  </ul>
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

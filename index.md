---
layout: default
title: USA 2.0
---

{% include hero.html %}

<section class="orientation container">
  <p>{{ site.data.homepage.orientation }}</p>
</section>

<section class="destination container" id="destination">
  <div class="section-intro">
    <h2>The destination</h2>
    <p>A practical upgrade to preserve and strengthen the republic for all.</p>
    <p>A vision for a country that works - and brings people back together.</p>
  </div>
  <ul class="destination-list">
    {% for item in site.data.homepage.destination %}
      <li>{{ item }}</li>
    {% endfor %}
  </ul>
</section>

<section class="platform container" id="platform">
  <div class="section-intro">
    <h2>The platform</h2>
    <p>Scan the headers for the big picture. Open sections for immediate, legislative, and structural priorities.</p>
  </div>

  {% assign sorted_sections = site.sections | sort: "order" %}
  {% for section in sorted_sections %}
    {% include section-card.html section=section %}
  {% endfor %}
</section>

{% include cta.html %}

# USA 2.5 - Jekyll Starter

A minimal Jekyll starter for a scan-first, expandable single-page homepage with future-ready section pages.

## Local setup

1. Install Ruby and Bundler.
2. From this folder, run:
   ```bash
   bundle install
   bundle exec jekyll serve
   ```
3. Open the local server URL Jekyll prints in the terminal.

## Structure

- `index.md` - homepage
- `_sections/` - main section content, also outputs standalone pages
- `_includes/` - reusable homepage components
- `_layouts/` - site layouts
- `_data/homepage.yml` - hero, destination, and CTA content
- `assets/` - CSS and JS

## Content workflow

- Edit `_data/homepage.yml` for homepage copy
- Edit files in `_sections/` for section titles, summaries, and bullets
- Later, expand each section page with deeper content and link to it from the homepage

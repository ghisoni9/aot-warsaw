# Astronomy on Tap Warsaw — website

Static website for Astronomy on Tap Warsaw. Plain HTML and CSS: no build step, no
framework. Published with GitHub Pages.

## Files

```
index.html          Home: what the night is, next event, photos
events.html         Every event, with speakers, talks and posters
team.html           Roles and who holds them
get-involved.html   Give a talk, volunteer, host or support us
sponsors.html       Venues, institutes and supporters
history.html        Astronomy on Tap worldwide, and the Warsaw story
assets/css/style.css   All the styling
assets/img/         Logo, event posters, photos
```

## Things still to fill in

Every placeholder is marked with `class="todo"` and shows as a dashed amber box on
the page. To find them all:

```bash
grep -rn "todo" --include=*.html .
```

They cover: the next event, the speakers of event #2 (5 Feb 2026), the team names,
the links to your speaker and volunteer forms, the partner institutes, and the
social-media links in every footer.

## Editing

Open any `.html` file in a text editor and change the text. To add an event, copy
an `<article class="event">` block in `events.html`, change the text, and put the
poster in `assets/img/posters/`. Keep posters around 700 px wide as JPEGs so the
site stays fast.

## Publishing on GitHub Pages

1. Create a new repository on github.com, for example `aot-warsaw`. Leave it empty:
   no README, no .gitignore.
2. In this folder:

   ```bash
   git remote add origin https://github.com/<your-username>/aot-warsaw.git
   git branch -M main
   git push -u origin main
   ```

3. On GitHub: **Settings → Pages**. Under "Build and deployment", set Source to
   **Deploy from a branch**, branch **main**, folder **/ (root)**. Save.
4. After a minute the site is live at
   `https://<your-username>.github.io/aot-warsaw/`.

Every later `git push` updates the live site within a minute or so.

## Updating the site later

```bash
git add -A
git commit -m "Add event #7"
git push
```

## Custom domain (optional)

If you buy a domain such as `astronomyontap.pl`, add it under Settings → Pages →
Custom domain, and create a `CNAME` file in this folder containing just the domain.
Your domain registrar needs DNS records pointing at GitHub Pages.

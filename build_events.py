#!/usr/bin/env python3
"""Write the next event's structured data into events.html, and check it.

Google cannot read "Monday 9 November 2026, Pardon To Tu, 19:00, free entry"
as an event; it reads it as a paragraph. This emits the same facts as
schema.org Event JSON-LD, which makes the page eligible for Google's event
results (date, venue and "Free" shown in search and Maps).

The visible HTML stays hand-written on purpose: the language switcher matches
whole English strings, so every generated date would need fresh Polish,
Italian and Catalan by hand. Instead of generating the page, this verifies it
-- if the markup and the visible text ever disagree, the build fails rather
than quietly publishing a lie to Google.

    python3 build_events.py          # rewrite and verify
    python3 build_events.py --check  # verify only, change nothing
"""

import datetime
import json
import pathlib
import re
import sys

ROOT = pathlib.Path(__file__).parent
EVENTS_PAGE = ROOT / "events.html"
START = "<!-- event-ld:start -->"
END = "<!-- event-ld:end -->"

MONTHS = ["January", "February", "March", "April", "May", "June", "July",
          "August", "September", "October", "November", "December"]


def build_ld(ev):
    d = datetime.date.fromisoformat(ev["date"])
    venue = ev["venue"]
    name = "Astronomy on Tap Warsaw #%d" % ev["number"]
    speakers = ", ".join(ev["speakers"])
    ld = {
        "@context": "https://schema.org",
        "@type": "Event",
        "name": name,
        "description": ("A free evening of astronomy in Warsaw: two short talks "
                        "by researchers (%s), a quiz with prizes, and the chance "
                        "to meet scientists over a drink. In English, no ticket "
                        "needed." % speakers),
        "startDate": "%sT%s:00%s" % (ev["date"], ev["start"], ev["utc_offset"]),
        "endDate": "%sT%s:00%s" % (ev["date"], ev["end"], ev["utc_offset"]),
        "eventStatus": "https://schema.org/EventScheduled",
        "eventAttendanceMode": "https://schema.org/OfflineEventAttendanceMode",
        "location": {
            "@type": "Place",
            "name": venue["name"],
            "address": {
                "@type": "PostalAddress",
                "streetAddress": venue["street"],
                "addressLocality": venue["city"],
                "addressCountry": venue["country"],
            },
        },
        "image": ["https://aotwarsaw.com/assets/img/share-card.jpg"],
        "url": ev["page"],
        "inLanguage": "en",
        "isAccessibleForFree": bool(ev["free"]),
        "organizer": {
            "@type": "Organization",
            "name": "Astronomy on Tap Warsaw",
            "url": "https://aotwarsaw.com/",
        },
        "performer": [{"@type": "Person", "name": s} for s in ev["speakers"]],
    }
    if ev["free"]:
        ld["offers"] = {
            "@type": "Offer",
            "price": "0",
            "priceCurrency": "PLN",
            "availability": "https://schema.org/InStock",
            "url": ev["page"],
            "validFrom": "%sT00:00:00%s" % (
                (d - datetime.timedelta(days=60)).isoformat(), ev["utc_offset"]),
        }
    return ld, d


def visible_text(html):
    """Rough text of the page, for checking the markup against what people see."""
    html = re.sub(r"<script.*?</script>", " ", html, flags=re.S)
    html = re.sub(r"<style.*?</style>", " ", html, flags=re.S)
    html = re.sub(r"<svg.*?</svg>", " ", html, flags=re.S)
    html = re.sub(r"<[^>]+>", " ", html)
    html = html.replace("&amp;", "&").replace("&middot;", "·").replace("&nbsp;", " ")
    return re.sub(r"\s+", " ", html)


def check(html, ev, d):
    """Every fact in the markup has to be on the page a visitor actually reads."""
    text = visible_text(html)
    human_date = "%s %d %s %d" % (d.strftime("%A"), d.day, MONTHS[d.month - 1], d.year)
    wanted = [human_date, ev["start"], ev["venue"]["name"], ev["venue"]["street"]]
    wanted += ev["speakers"]
    missing = [w for w in wanted if w not in text]
    return human_date, missing


def main():
    check_only = "--check" in sys.argv
    ev = json.loads((ROOT / "events.json").read_text(encoding="utf-8"))["next"]
    ld, d = build_ld(ev)
    html = EVENTS_PAGE.read_text(encoding="utf-8")

    if START not in html or END not in html:
        sys.exit("markers %s / %s not found in events.html" % (START, END))

    if not check_only:
        block = (START + "\n<script type=\"application/ld+json\">\n"
                 + json.dumps(ld, indent=2, ensure_ascii=False)
                 + "\n</script>\n" + END)
        html = re.sub(re.escape(START) + r".*?" + re.escape(END), lambda m: block,
                      html, flags=re.S)
        EVENTS_PAGE.write_text(html, encoding="utf-8")
        print("wrote Event structured data for #%d into events.html" % ev["number"])

    human_date, missing = check(html, ev, d)
    if missing:
        sys.exit("MISMATCH - these facts are in the markup but not visible on the "
                 "page:\n  " + "\n  ".join(missing))
    print("verified: page and markup agree on %s, %s, %s, %s"
          % (human_date, ev["start"], ev["venue"]["name"], ", ".join(ev["speakers"])))

    if d < datetime.date.today():
        sys.exit("WARNING: %s is in the past - update events.json" % ev["date"])


if __name__ == "__main__":
    main()

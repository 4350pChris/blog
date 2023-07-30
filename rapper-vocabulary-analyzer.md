# Rapper Vocab Analyzer

[[toc]]

## Ideas

- Fan Out Architecture
- DDD
- unit testing
- That vocab analyzer site (screenshot)
- Services used (AWS Lambda, SQS, Serverless) contrast with k8s
- TLS cert? Kinda hard to do with serverless
- Automating deployment was kinda hard
- Response times due to warmup

## Introduction

<iframe style="border-radius:12px" src="https://open.spotify.com/embed/track/7fXPWrFoxtEGnoxu67ZjQa?utm_source=generator&theme=0" width="100%" height="152" frameBorder="0" allowfullscreen="" allow="autoplay; clipboard-write; encrypted-media; fullscreen; picture-in-picture" loading="lazy"></iframe>

There exists a peculiar link between Hip Hop music and me starting my journey as a programmer which I would like to expand on before getting into the gritty details of the project resulting from a chain of events that were set in motion more than a decade ago.
I've been a big fan of Hip Hop music ever since discovering Eminem when I was around 10 years old.
I still remember listening to his first albums on my CD player while diligently reading the lyrics to every song until I had memorized entire albums by heart - a habit I still have to this day.
At the time, I was far from being a proficient English speaker, so I had to look up a lot of the words and even knew some only by their phonetics.
I don't quite know what it was, but something had sparked my interest in both the English language and lyrics in general. Some years later, after having finished school, after having discovered plentiful other artists and after having gone through the same process of obsessing over their work, I found a [website](https://pudding.cool/projects/vocabulary/index.html) ranking rappers by their vocabulary.

![Screenshot of the rapper ranking website](./assets/ranking.png)

Lo and behold, my favorite rapper at the time, Aesop Rock, was at the top of the list with a whopping 7,879 unique words used throughout his songs. However, some of the artists I was listening to at the time didn't appear at all.
Consequently, I did the only thing any reasonable person with a little too much time on their hands would do: I started to learn Python, the goal being to write a [script](https://github.com/4350pChris/LyricAnalyzer) to scrape the lyrics of artists I was listening to and run the same analysis on them.
And that is how I revealed another passion of mine: programming.

The project I will be talking about henceforth is my attempt at rewriting the aforementioned script in a more modern fashion, using the tools I have learned over the past few years.
Who would've guessed that a simple 100 LoC script could be blown up to a 4,500 LoC project involving multiple cloud services?

![Screenshot of cloc counting the lines of code](./assets/cloc.png)

Well, I did. So that's exactly what I did. Now let's get to it.

# Front End Technical Challenge

## Introduction

Welcome to the Frontend Challenge!

This application allows users to view a "Models Inventory" with a comprehensive list of all their models, and to view an Analysis data visualization of these models.

The following set of tasks is designed to resemble a simplified example of the challenges we tackle, simplified for time efficiency. The data, resembling real-world data, may require parsing and transformation for effective use.

`Tailwind CSS` and `Material UI - JOY` are included for your convenience. Feel free to utilize these or install your preferred tools.

We encourage you to write your best, production-quality, reusable, scalable, and maintainable code. Good luck!

## Tasks

### Inventory Page

The backend team has implemented a new endpoint `/models`, and you have recently added the `getModels` function in `src/api/getModels.ts`. Your tasks are as follows:

1. Display a list of cards, each representing a model from the response.
   a. Hovering over a card should display a blue border around it.
   b. Each card should link to `/analysis/{MODEL_NAME}`.
   c. Display the model's name on the left side of the card and its type (Classification or Regression) on the right.

### Analysis Page

1. Create a new Analysis page accessible via the route `/analysis/${MODEL_NAME}`.
2. Display the model's name prominently at the top of the page.
3. Incorporate a card that presents a NIVO bar chart with data from `getAnalysis` in `src/api/getAnalysis.ts`.
   a. The bars in the chart should be oriented horizontally.
   b. The bars should be grouped by origin (not stacked) with label values shown as percentages.
   c. Ensure the card does not exceed the height and width of the screen.
   d. The card should be responsive and scale appropriately on smaller screens, with scrolling enabled inside the card for screens that are too short or narrow.


   rm -rf node_modules
   rm package-lock.json   # or yarn.lock for Yarn
   npm install            # or yarn install

   We are:
   A stealth startup 🥷
   Building a complex risk/data vis dashboard
   Using React, NIVO, Typescript
   Working remotely

You are:
All levels!
A react front end or full stack developer, with experience or strong interest in D3/NIVO and data vis
Able to work in the US (If extremely talented, can try to work around this)
Capable of working in a large codebase, shipping production-ready code, ensuring best practices for maintainability and scalability
Someone who tests their own code and takes ownership
Has experience or is strongly interested in writing automated tests (unit, integration, e2e)
Loves to work hard & ship fast
Looking to grow your skills
Looking for a great working culture
Love the startup life
Machine learning or data science background is welcome but not required

Salary is based on experience and is only an estimate!
Please let me know if you know anyone who would be interested!

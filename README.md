# special-collections-visualizations

## Philadelphia 1847 Census Project - Introduction
The special collections visualization project was proposed by **Celia Caust-Ellenbogen** and **Jordan Landes** of the [Friends Historical Library](https://www.swarthmore.edu/friends-historical-library) at Swarthmore College as part of the 2019 Swarthmore Projects for Educational Exploration & Development ([SPEED](https://www.swarthmore.edu/its/swarthmore-projects-educational-exploration-and-development-speed-program)) Program. The project is led by **Nabil Kashyap** of Swarthmore College, as well as **Alice Huang** ('22), **Bilal Soukouna** ('22), **Helen Huh** ('21), and **Katie Knox** ('21).

The Friends Historical Library collects and preserves a large number of documents connected to the Religious Society of Friends (Quakers) from the mid-seventeenth century to the present. One of these documents is the original manuscript of a census of the 1847 African-American population in Philadelphia, collected by a committee of Quakers. The census contains 43 data points for over 4,000 families, offering a rich resource for researchers to better understand individuals' lives during this time. In 2002, the Friends Historical Library created an online exhibit to display the data contained in the census. 

## Motivation
The special collections visualization project aims to revitalize the original online exhibit for the Philadelphia 1847 Census data. The new site presents the data in a streamlined, accessible setting where researchers or students can explore the stories of these individuals easily. Additionally, the site houses a number of data visualizations that add interactivity to the census data.

## Goals
1. Minimum Viable Product
  * A clean dataset - the original census data, digitized in the form of a csv file, contains many errors, typos, and inconsistencies that require additional changes to be comprehensible and useful 
  * A visualization - inspired by W.E.B. Du Bois' colorful data visualizations, Celia and Jordan hoped to bring some aspect of the census data to life
2. Extensions
  * A new website - update the 2002 online exhibit so the data is more accessible and user-friendly
  * A geocoding component - some feature to relate the old addresses from the census data to current street names in Philadelphia

## Process Overview & Tools
We began focusing our energy on the special collections project later on in the 9-week SPEED internship, hoping that the skills we acquired from working on other projects would help us with this one. 
* **Week 1** - Training/Research 
  * HTML/CSS, SASS, JavaScript, Bootstrap, UX/Accessibility, D3.js, OpenRefine, Tufte readings on data visualization, Johanna Drucker article responding to Tufte
  * Meet with Celia and Jordan to learn about the census and their vision for the project
* **Weeks 2-5** - Implement other SPEED projects
  * Master the use of D3.js and JavaScript by working on another visualization project
  * Work through Nabil's [Tidy Data Tutorial](https://github.com/tri-cods/tidy-data) and practice cleaning datasets using OpenRefine
* **Weeks 6-7** - Data Cleaning
  * Use OpenRefine, Python, & Excel to clean NAME, OCCUPATION, and RESIDENCE columns of the census csv - *separate out compensation that was combined into the occupation column*
  * Nabil helped us deduplicate the csv, taking out around 30 rows 
* **Week 8** - Prototyping Visualizations
  * We were running low on time, so we decided to explore other visualization libraries besides D3.js (C3.js, Vega-Lite). We decided to use C3.js, which was relatively easy to learn after working with D3.js. C3.js makes it really easy to build basic charts.
  * Meanwhile, Katie built a skeleton for the website using HTML/CSS and Bootstrap
  * Helen explored the geocoding extension, looking into the Mapbox API which we were using for another project 
* **Week 9** - Polish Website, Accessibility/Documentation, Implement Feedback
  * Add all components to the site and streamline the design
  * Address screen reader and keyboard usability for site pages, visualizations, map, menus, etc.
  * Make changes to visualization prototypes, site components 

## Research & Key Decision-Making

## End Product

## Future Extensions

## Accessibility

## Acknowledgements

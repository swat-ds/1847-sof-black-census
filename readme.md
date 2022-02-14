# special-collections-visualizations
Philadelphia 1847 Census Project as created by SPEED in 2019. The live version of the site (as of February 2022), reflecting edits done since 2019, is at [paac-jekyll](https://github.com/swat-ds/paac-jekyll).

## Introduction
The special collections visualization project was proposed by **Celia Caust-Ellenbogen** and **Jordan Landes** of the Friends Historical Library at Swarthmore College as part of the 2019 Swarthmore Projects for Educational Exploration & Development ([SPEED](https://www.swarthmore.edu/its/swarthmore-projects-educational-exploration-and-development-speed-program)) Program. The project is led by **Nabil Kashyap** of Swarthmore College, as well as **Alice Huang ('22)**, **Bilal Soukouna ('22)**, **Helen Huh ('21)**, and **Katie Knox ('21)**.

The [Friends Historical Library](https://www.swarthmore.edu/friends-historical-library) collects and preserves a large number of documents connected to the Religious Society of Friends (Quakers) from the mid-seventeenth century to the present. One of these documents is the original manuscript of a census of the 1847 African-American population in Philadelphia, collected by a committee of Quakers. The census contains 43 data points for over 4,000 families, offering a rich resource for researchers to better understand individuals' lives during this time. In 2002, the Friends Historical Library created an online exhibit to display the data contained in the census. 

## Motivation
The special collections visualization project aims to revitalize the original online exhibit for the Philadelphia 1847 Census data. The new site presents the data in a streamlined, accessible setting where researchers or students can explore the stories of these individuals easily. Additionally, the site houses a number of data visualizations that add interactivity to the census data.

## Goals
1. **Minimum Viable Product**
  * A clean dataset - the original census data, digitized in the form of a csv file, contains many errors, typos, and inconsistencies that require additional changes to be comprehensible and useful 
  * A visualization - inspired by W.E.B. Du Bois' colorful data visualizations, Celia and Jordan hoped to bring some aspect of the census data to life
2. **Extensions**
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
  * **The data cleaning was one of the most time-consuming and challenging aspects of the project because of the vast amount of households surveyed and data fields collected about each household, but also because the data had so many inconsistencies.** For example, some occupation entries read *1 laborer 2 bakers $5.00wee* while others read *whitewasher 4y* or *eating house*. The data still isn't perfect but considerably more normalized.
  
* **Week 8** - Prototyping Visualizations
  * We were running low on time, so we decided to explore other visualization libraries besides D3.js (C3.js, Vega-Lite). We decided to use C3.js, which was relatively easy to learn after working with D3.js. C3.js makes it really easy to build basic charts.
  * Meanwhile, Katie built a skeleton for the website using HTML/CSS and Bootstrap
  * Helen explored the geocoding extension, looking into the Mapbox API which we were using for another project 
  
* **Week 9** - Polish Website, Accessibility/Documentation, Implement Feedback
  * Add all components to the site and streamline the design
  * Address screen reader and keyboard usability for site pages, visualizations, map, menus, etc.
  * Make changes to visualization prototypes, site components 

## Research & Key Decision-Making
* **Re: The Tools**
  * We decided to use [C3.js](https://c3js.org/) and a little bit of [D3.js](https://d3js.org/) because we were familiar with JavaScript and both of these libraries are great for making very visually appealing, interactive data visualizations. We potentially would have used D3.js only if we had had more time, as we found C3.js to be pretty limited in its features and not very customizable.
  * [OpenRefine](http://openrefine.org/) is a very popular tool for data cleaning and we found it to be very useful for tidying up the census data. In particular, the *add a column based on this column*, *split column by separator*, *filtering by text facets*, *clustering and merging*, and *GREL functionality* tools were very useful.
  
* **Re: The Visualizations**
  * Celia and Jordan were particularly interested in the occupation data that the census committee collected, so we decided to focus on that for the visualizations. We also felt there were many possibilities for this data field that could lead to a better understanding of the time period in which the census was collected and the individuals it describes. 
  * VIZ #1: We wanted to create a broad overview of the occupation data, so we made a simple bar chart that depicts the top occupations that were common to males and females. This gives a sense of the spread of occupations, as well as how male occupations differed from females'. 
  * VIZ #2: We also wanted to emphasize that the census data describes details about *individuals*, so we tried to depict the abundance of data points that we had. We utilized a scatter plot, plotting occupation on the x axis and ID on the y axis. We added the ability to toggle between displaying the male data points only, female data points only, and both. We liked this prototype because it showed that each common occupation represented many individuals. It was also very clear which occupations were more common, among either gender. However, after hearing Celia and Jordan's feedback, we ultimately decided not to incorporate this prototype because graphing using ID numbers was not logical. We would have liked to find some other way of graphing two categorical variables or perhaps indexing the individuals by alphabetical order, but we decided that would fall into the scope of a future extension.
  * VIZ #3: Finally, we wanted to create a visualization that would provide more detail than the first visualization, but still present it in a clear way. We settled on another bar graph, but this time splitting the occupations up into 8 categories that can be toggled with a dropdown menu. Initially we struggled to categorize the data and did so somewhat arbitrarily, but Celia and Jordan helped us refine this process using the US Census Bureau's [occupation categories](https://www2.census.gov/library/publications/decennial/1900/occupations/occupations-part-3.pdf).
  
* **Re: The Map**
  * We thought a geocoding extension would be a unique way to connect the 1847 residence addresses to what we know as Philadelphia today. Initially we considered adding pins to a map to represent each household, but ultimately we decided that would be potentially less interesting than an aggregate look at residences.
  * Instead, we utilized [Mapbox](https://www.mapbox.com/) to create colored polygon shapes for each ward/region in Philadelphia. Using the *source* column from the census data csv, we categorized the households accordingly. We also decided to clean a few more numerical columns in the csv to add as aggregate data to the map. 
  * To incoporate our initial idea of "mapping" old streets to new ones, we added an opacity slider that layers an 1847 map onto the present-day one. 
  
* **Re: The Website**
  * We wanted the website to be simple and accessible and to highlight the visualizations and the data. We tried to use a clean, consistent style across the pages. Some styling elements were inspired by Swarthmore College's [styling guide](https://www.swarthmore.edu/sites/default/files/assets/documents/communications-office/Swarthmore_style%20guide_17.7.pdf). 

## End Product
We exceeded our initial minimum viable product, adding a website and a geocoding component to the project. 
Check out the website here! --> (https://github.swarthmore.edu/pages/SPEED/special-collections-visualizations/website/)
The website is mostly accessible, though there is definitely room for improvement in the future. The project features two visualizations of the occupation data from the census, as well as an interactive map with additional statistics and a searchable/filterable data table with all the clean data. We also provide the clean data as a csv file for downloading.

## Future Extensions
* **More Visualizations** - there are endless possibilities on this front, using the clean data as is or by further cleaning the other census categories. We would love to incorporate some kind of visualization that plots each individual's occupation. Celia and Jordan also felt that the compensation and literacy data could be particularly interesting.
* **Refining Usability of Data** - perhaps providing more data tables and better toggles to interact with the data. It could be interesting to create a dynamic visualization where the user can see different portions of the data represented visually.
* **Mobile-Friendly** - look into how the visualizations and data might perform on a smaller screen.

## Accessibility
We are excited about the accessibility of the site overall: users can easily tab through the pages and interact with the drop-down menus (which we initially struggled to label correctly). We found Bootstrap to be very useful in providing input patterns and aria labels. There were a number of accessibility concerns we didn't get a chance to address, but are definitely doable in the future: 
1. Providing visualization data in tabular form
  * We want to ensure that people can still see what the visualizations convey without interacting with the graph itself. We would like to add data tables for all the data used in both visualizations, as well as the map.
2. Color contrast
  * The navigation bar could be difficult to read.
3. Tabbing into tables
  * Right now, tabbing skips over the tables, but it could be useful to be able to tab through them as if hovering with a mouse.
  
## Acknowledgements
We would like to thank Celia and Jordan for proposing the special collections visualization project to make this valuable census more accessible to researchers and students alike. Their attention to detail and dedication to the project have inspired us to be more diligent in thinking about and visualizing data.

We are incredibly grateful to our project supervisor, Nabil Kashyap, and our SPEED program supervisor, Doug Willen, for their constant support and incredible insight. Nabil provided us endless encouragement and expertise as we learned to tackle OpenRefine and D3.js. Thank you also to the Swarthmore College Librarians and ITS for all their support behind the scenes through the whole process.

This project was funded by the Swarthmore Projects for Educational Exploration and Development (SPEED) Program at Swarthmore College.

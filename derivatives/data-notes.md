# 1847 Society of Friends African American Census Data

## 2021-02-08

- Yolanda's further cleaning
- Found new entries
- Augmented with page numbers
- Celia's questions about paleography
- New entry IDs?

TODO:
- Update note about raw export
- Update sofaac transcribed with new entries
- Update sofaac names
- Update sofaac normalized
- Update sofaac-occupations x2
- Update sofaace-freq x2
- Add Yolanda to 'About the Data credits'

## 2020-09-02

TODO:

- 001,Last,First,Number,Street → use as 001 key/identifier and append all of the other data from the raw set
- 001,“1700 7th St”,”Jackson, Abel”,”washer,ragpiccer”,
- 001,[Last,First,Number,Street],[Cleaned Columns]

## 2020-10-28

- `cp derivatives/name-res.csv dist/sofaac-names.csv`
-  `cp derivatives/1847census-filemaker-export.csv dist/sofaac-raw-export.csv`
-  `cp derivatives/1847-deduped.csv dist/sofaac-transcribed.csv` 
-  `cp derivatives/MALE_OCC_DATA2.csv dist/sofaac-male-occupations-freq.csv`
-  `cp derivatives/FEMALE_OCC_DATA2.csv dist/sofaac-female-occupations-freq.csv`
-  `cp derivatives/name-female-occ.csv dist/sofaac-female-occupations.csv`
-  `cp derivatives/name-male-occ.csv dist/sofaac-male-occupations.csv`
-  `cp site/data/allClean.csv dist/sofaac-normalized.csv` 

## 2019-07

- Deduplication from 4308 to 4284
- Separated out fields in order to facilitate data cleanup
- name-res.csv IDs, name components, address components
- map-data-clean.csv, Males intemperate,Females intemperate,Can read,Can write,Born slaves,Bought freedom,Attend religious meetings,Not attend religious meetings,Belong to temperance societies,Source
- femaleFinal.csv, maleFinal.csv, IDS, separated out array of occupations into different fields
- name-famale-occ.csv, name-male-occ.csv, IDS,  separate occupation observations
- female_occ_data.csv, occupation and frequency
- allClean.csv, HOUSEHOLD ID,LAST NAME,FIRST NAME,RESIDENCE STREET NUMBER,RESIDENCE STREET NAME,MALE OCCUPATION 1,MALE COUNT 1,MALE OCCUPATION 2,MALE COUNT 2,MALE OCCUPATION 3,MALE COUNT 3,MALE OCCUPATION 4,MALE COUNT 4,FEMALE OCCUPATION 1,FEMALE COUNT 1,FEMALE OCCUPATION 2,FEMALE COUNT 2,FEMALE OCCUPATION 3,FEMALE COUNT 3,MALES INTEMPERATE,FEMALES INTEMPERATE,CAN READ,CAN WRITE,BORN SLAVES,BOUGHT FREEDOM,ATTEND RELIGIOUS MEETINGS,NOT ATTEND RELIGIOUS MEETINGS,BELONG TO TEMPERANCE SOCIETIES,REGION

## 2019 SPEED Notes
    
- Use OpenRefine, Python, & Excel to clean NAME, OCCUPATION, and RESIDENCE columns of the census csv - separate out compensation that was combined into the occupation column
- Nabil helped us deduplicate the csv, taking out around 30 rows
- The data cleaning was one of the most time-consuming and challenging aspects of the project because of the vast amount of households surveyed and data fields collected about each household, but also because the data had so many inconsistencies. For example, some occupation entries read 1 laborer 2 bakers $5.00wee while others read whitewasher 4y or eating house. The data still isn't perfect but considerably more normalized.

## Provenance Note

Related resources 

-   [Github documentation](https://github.com/swat-ds/datasets/tree/master/1847census)
-   [Old site](http://www.swarthmore.edu/Library/friends/paac1847/main.html)
-   [Finding Aid: Collection](http://archives.tricolib.brynmawr.edu/repositories/9/resources/5742)
-   [Finding Aid: File](http://archives.tricolib.brynmawr.edu/repositories/9/archival_objects/345747)
-   [Finding Aid: Related Census Ledger](http://archives.tricolib.brynmawr.edu/repositories/9/archival_objects/345748)
-   [Report (pdf)](www.swarthmore.edu/Library/friends/paac1847/censusreport.pdf)
-   [Map](www.swarthmore.edu/Library/friends/paac1847/mapofphiladelphiaexpanded.html)
-   [SPEED Summer Project](https://github.swarthmore.edu/SPEED/special-collections-visualizations)

"The manuscript 1847 census, containing forty-three elements of information for each of more than five thousand households in Philadelphia, was used to prepare *A Statistical Inquiry into the Condition of the People of Colour of the City and Districts of Philadelphia (1849), a report of forty-four pages. This is aggregated data-—the raw data of the census manipulated in particular ways for a particular purpose. The existence of the raw data allows modern researchers to reaggregate the data—to ask new questions and not be bound by the conceptions of social scientists of 160 years past." (from Chris Densmore's introductory note)

Census conducted late 1847, which was used to support the 1849  publication, **A Statistical Inquiry into the Conditions of People of Color, of the City and Districts of Philadelphia**. Data from the census itself collected in the ledger in our collection.

-   "Three competent persons were employed to take the enumeration"
-   "The enumeration thus taken does not include the coloured persons residing in white families as domestics."
-   "In order to arrive at the number of these [domestics], an abstract of the returns of the Marshal in 1820 was obtained, and the original returns of the census of 1840, were carefully examined." [and linear growth assumed]
-   "If we take the number in the Eastern Penitentiary, 83, in Moyamensing Prison, 66, in the Alms-house, 277, and in the Shelter for Coloured Orphans, 56, amounting in all to 482, we shall find the actual population, as far as this enumeration can he relied on, to he 20,240."

-   2002: Ledger entered into a Filemaker database
-   2002: Public facing website
-   2017: Celia exported csv from Filemaker server
-   2019: SPEED summer project

-   **Name:** Lennox, Basil
-   **Residence:** 144 N. Water
-   **Number in Family:** 3
-   **Males:** 1
-   **Females:** 2
-   **Under 5 Years:** 
-   **Under 15 Years:** 1
-   **Under 50 Years:** 
-   **Over 50 Years:** 
-   **Natives of State:** 2
-   **Not Natives of State:** 1
-   **Males Intemperate:** 
-   **Females Intemperate:** 
-   **Number Insane:** 
-   **Helpless:** 
-   **Receive Public Aid:** 
-   **Orphans** 
-   **Not Taken Care of By Parents:** 
-   **Can Read:** 1
-   **Can Write:** 1
-   **At Service:** 
-   **Not at Service:** 3
-   **Occupation of Males Compensation:** Watchman
-   **Occupation of Females Compensation:** Washer
-   **Children Under 20 Years Employed:** days work
-   **Number at School:** 
-   **Schools Attended:** 
-   **Number Occupying a Room:** 3
-   **Size of Room:** 14
-   **Value of Real Estate:** 
-   **Incumberance:** 
-   **Whole Number in House When Rooms Are Occupied:** 
-   **Personal Property:** 30
-   **Rent of House Room:** 7.50q
-   **Water Rent:** 
-   **Tax:** 
-   **Born Slaves:** 1
-   **Bought Freedom:** 
-   **Amount Paid for Freedom:** 
-   **By Whom Manumitted:** By Master
-   **Members of Beneficial Societies:** 1
-   **Attend Religious Meetings:** 3
-   **Not Attend Religious Meetings:**
-   **Belong to Temperance Societies:** 
-   **Source:** Vol. 1 City
-   **Remarks:** the attendance on public worship is occational


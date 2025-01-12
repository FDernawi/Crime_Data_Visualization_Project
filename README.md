## Project Summary

This project analyzes 2020 crime data in Washington, DC, alongside 
educational attainment and demographic data from the same year, to 
identify key factors influencing crime rates. By examining the 
interplay between education, demographics, and crime, we aim to 
uncover patterns and relationships that can provide actionable 
insights for policymakers and community stakeholders.

The project begins with data collection and cleaning, ensuring 
accurate and reliable datasets for analysis. Using Python tools 
like Pandas and REGEX, we handle missing values, inconsistencies, 
and data integration challenges. Merging crime data with 
educational and demographic datasets allows us to conduct a unified 
analysis, including variables such as education levels, income, 
and geographic location.

Exploratory Data Analysis (EDA) plays a critical role in uncovering 
trends and relationships. Using Matplotlib, we visualize these 
patterns, and with D3.js, we create interactive visualizations to 
highlight geographic and statistical insights. The analysis 
investigates correlations and potential links, focusing on how 
education levels and demographic factors may influence crime rates.

The project culminates in an interactive dashboard that visually 
presents our findings. Through statistical analysis and 
visualization, we deliver insights to guide strategies for crime 
prevention and community development in Washington, DC. This 
comprehensive approach fosters informed decision-making and aims 
to address systemic issues affecting crime and social outcomes.



Exploring the Relationship Between Crime, Education, and Demographics in Washington, DC: A Data-Driven Approach

Date
December 19, 2024 – January 10, 2025
Affiliation
The George Washington University – Data Analytics 

Executive Summary
Crime is a complex societal issue influenced by numerous factors, including education and demographic characteristics. This project aims to explore the relationship between crime rates, educational attainment, and demographics in Washington, DC, using datasets from 2020. By analyzing these connections, we seek to identify key factors contributing to crime and offer insights for policymakers and community leaders.
Through data cleaning, exploratory analysis, and visualization, we have uncovered patterns suggesting that crime rates correlate with specific educational and demographic factors. The findings are presented using statistical analyses and interactive dashboards, enabling stakeholders to make data-driven decisions aimed at reducing crime and improving community outcomes.
Introduction
Problem Statement
Crime continues to impact urban areas, often disproportionately affecting communities with lower educational attainment and economic disadvantages. Understanding the factors contributing to crime can help address systemic issues and allocate resources effectively.

Purpose
This project seeks to answer the following questions:
    •    What factors most strongly correlate with crime rates in Washington, DC?
    •    Are there significant relationships between educational attainment and crime?
    •    How do demographic characteristics influence crime patterns?

Scope
The analysis is limited to Washington, DC, and uses data from the year 2020. The focus is on violent and property crimes, educational attainment levels, and demographic characteristics such as income, age, and population distribution.
Data and Methodology
Data Sources
Crime Data: A dataset containing detailed crime reports from Washington, DC, in 2020, including location, type of crime, and date.
Educational Attainment Data: A dataset summarizing education levels across neighborhoods in Washington, DC.
Demographic Data: Population-level data, including income, age distribution, and other relevant demographic variables.

Data Cleaning
Removed missing and inconsistent entries using Python and Pandas.
Used REGEX to standardize text fields, such as location names and categorical variables.
Combined datasets using common geographic identifiers via SQL  to enable cross-analysis.

Analysis Methods
Exploratory Data Analysis (EDA):
Used Matplotlib to visualize trends in crime rates by education levels and demographic factors.
Identified outliers and trends through histograms, box plots, and heatmaps.
Data Visualization:
Created interactive maps and charts using D3.js to display geographic patterns and relationships dynamically.
Statistical Analysis:
Applied regression models to determine the strength and significance of correlations between education, demographics, and crime.

Results
Our analysis of the relationship between educational attainment, demographics, and crime in Washington, DC, revealed nuanced findings. While higher educational attainment generally correlates with lower crime rates, the relationship varies by crime type. The interplay of education, crime, and demographics offers insights into potential interventions and policies.
Key Findings
Inverse Relationship with Violent Crimes:
Areas with higher percentages of college graduates report significantly lower violent crime rates, such as assaults and robberies.
Conversely, areas with lower educational attainment, particularly where individuals lack high school education, experience higher violent crime rates.
Increase in Non-Violent Financial Crimes:
Higher educational attainment correlates with an increase in certain non-violent crimes, such as fraud, embezzlement, and financial crimes.
These areas exhibit lower physical criminal activities but higher occurrences of sophisticated white-collar crimes.


Policy Recommendations
Expand Access to Quality Education:
Increase funding for public schools in underserved areas.
Provide scholarships and financial aid to encourage higher education enrollment.
Develop vocational training programs to equip individuals with employable skills.
Integrate Ethics and Responsibility:
Introduce courses on ethics, financial literacy, and civic responsibility at all educational levels.
Promote community-based initiatives to reinforce these values.
Collaborate Across Sectors:
Partner with local governments, businesses, and non-profits to create mentorship and internship opportunities for students in high-crime areas.
Establish public-private partnerships to fund education-focused crime prevention programs.
Implications
The findings from this analysis extend beyond Washington, DC, highlighting the importance of education as a tool for crime prevention nationwide. By prioritizing educational equity and access, policymakers can address the root causes of crime, fostering safer, more prosperous communities. Future research should explore longitudinal data to assess the long-term impact of educational interventions on crime rates and examine how similar strategies can be adapted for other urban and rural areas.
Limitations
The analysis is limited to 2020 data and may not account for trends in other years.
Demographic data may contain biases due to underreporting or inaccuracies.

Conclusion
Our findings show that education plays an important role in shaping crime patterns in Washington, DC. Areas with lower levels of education tend to have higher rates of violent crimes, while neighborhoods with more college graduates see fewer violent crimes but a rise in non-violent crimes like fraud. This suggests that improving access to education, especially in areas with fewer resources, could help lower overall crime rates. Investing in better schools and education programs could give people more opportunities and reduce the factors that lead to criminal behavior. These results highlight how important it is to focus on education to build safer and more supportive communities.
Appendix


Interactive Map Application Instructions

Prerequisites:
    1.    Ensure the necessary files are in place, including:
    •    The GeoJSON file for census tracts.
    •    The merged CSV file containing the census, crime, and educational attainment data.
    •    The JavaScript, Python, and HTML files provided.
    2.    Verify the file paths in your application, particularly in the app.py script and the JavaScript code, to ensure the data is correctly loaded.

Running the Application:
    1.    Open a terminal and navigate to the directory containing the app.py file.
    2.    Run the command: python3 app.py
    3.    The application will start, and you will see a URL in the terminal, typically http://127.0.0.1:5000.
    4.    Open the URL in your preferred web browser.

Using the Application:
    1.    Upon loading the map, hover over a tract to see it highlighted in dark blue. The highlight will revert to light blue when the cursor moves away.
    2.    Click on any tract to bring up a selection window.
    3.    In the selection window, choose one of the following:
    •    “Crime Data” to view crime-related statistics such as arson, burglary, and more.
    •    “Census Data” to explore demographic details like total population and racial distribution.
    •    “Educational Attainment” to examine education levels among different racial groups.
    4.    After selecting an option, the corresponding information will be displayed in a pop-up window.
    5.    The selected tract will change color:
    •    Red for crime data.
    •    Blue for census data.
    •    Green for educational attainment.
    6.    Close the pop-up window by clicking the “Close” button or select another tract to update the information.

Note:
    •    Ensure all file paths in the app.py and JavaScript files are correctly set before running the application.
    •    If the application fails to start due to a port conflict, try stopping other services or running the app on a different port.

Enjoy exploring the data!


/*Create TABLE crime_data(
tract int,
offense VARCHAR (30),
lat FLOAT,
long FLOAT
);*/


/* the table colum name all was changed to "total" for the sake of word reservation and error */
/* Create TABLE total_pop_data(
a_column int,
tract int,
total int,
total_no int,
total_hs int,
total_col int,
white int,
white_no int,
white_hs int,
white_col int,
black int,
black_no int,
black_hs int,
black_col int,
aian int,
aian_no int,
aian_hs int,
aian_col int,
asian int,
asian_no int,
asian_hs int,
asian_col int,
nhpi int,
nhpi_no int,
nhpi_hs int,
nhpi_col int,
other int,
other_no int,
other_hs int,
other_col int,
multi int,
multi_no int,
multi_hs int,
multi_col int,
hisp int,
hisp_no int,
hisp_hs int,
hisp_col int
); */


/* created a new column to match the index of the dataset */
/* dropped the table due to index mismatch, this create a new table and match index accordingly */
/* further dropped replicated column "a_column" due to redundency:
alter table total_pop_data
DROP COLUMN a_column; */

/* Create TABLE total_pop_data(
a_column int,
tract int,
total int,
total_no int,
total_hs int,
total_col int,
white int,
white_no int,
white_hs int,
white_col int,
black int,
black_no int,
black_hs int,
black_col int,
aian int,
aian_no int,
aian_hs int,
aian_col int,
asian int,
asian_no int,
asian_hs int,
asian_col int,
nhpi int,
nhpi_no int,
nhpi_hs int,
nhpi_col int,
other int,
other_no int,
other_hs int,
other_col int,
multi int,
multi_no int,
multi_hs int,
multi_col int,
hisp int,
hisp_no int,
hisp_hs int,
hisp_col int
); */


/* Create TABLE male_pop_data(
tract int,
total int,
total_no int,
total_hs int,
total_col int,
white int,
white_no int,
white_hs int,
white_col int,
black int,
black_no int,
black_hs int,
black_col int,
aian int,
aian_no int,
aian_hs int,
aian_col int,
asian int,
asian_no int,
asian_hs int,
asian_col int,
nhpi int,
nhpi_no int,
nhpi_hs int,
nhpi_col int,
other int,
other_no int,
other_hs int,
other_col int,
multi int,
multi_no int,
multi_hs int,
multi_col int,
hisp int,
hisp_no int,
hisp_hs int,
hisp_col int
); */

/* Create TABLE female_pop_data(
tract int,
total int,
total_no int,
total_hs int,
total_col int,
white int,
white_no int,
white_hs int,
white_col int,
black int,
black_no int,
black_hs int,
black_col int,
aian int,
aian_no int,
aian_hs int,
aian_col int,
asian int,
asian_no int,
asian_hs int,
asian_col int,
nhpi int,
nhpi_no int,
nhpi_hs int,
nhpi_col int,
other int,
other_no int,
other_hs int,
other_col int,
multi int,
multi_no int,
multi_hs int,
multi_col int,
hisp int,
hisp_no int,
hisp_hs int,
hisp_col int
); */

/* after creating the tables and updating the header values, information was imported through the finalized CSV files */


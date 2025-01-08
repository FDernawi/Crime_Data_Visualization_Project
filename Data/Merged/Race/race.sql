SELECT 
    c.tract,
    t.white,
    t.black,
    t.aian,
    t.asian,
    t.nhpi,
    t.other,
    t.multi,
    t.hisp
FROM crime_data c
LEFT JOIN total_pop_data t ON c.tract = t.tract;
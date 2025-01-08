SELECT 
    c.tract,
    c.offense,
    COALESCE(t.white, 0) AS white,
    COALESCE(t.black, 0) AS black,
    COALESCE(t.aian, 0) AS aian,
    COALESCE(t.asian, 0) AS asian,
    COALESCE(t.nhpi, 0) AS nhpi,
    COALESCE(t.other, 0) AS other,
    COALESCE(t.multi, 0) AS multi,
    COALESCE(t.hisp, 0) AS hisp
FROM crime_data c
LEFT JOIN total_pop_data t ON c.tract = t.tract
ORDER BY c.tract, c.offense;
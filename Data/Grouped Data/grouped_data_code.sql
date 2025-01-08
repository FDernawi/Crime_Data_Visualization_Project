SELECT 
    COALESCE(c.tract, t.tract) AS tract,
    COUNT(c.offense) AS crime_count,
    MAX(COALESCE(t.total, 0)) AS total_pop,
    MAX(COALESCE(t.white, 0)) AS white_pop,
    MAX(COALESCE(t.black, 0)) AS black_pop,
    MAX(COALESCE(t.asian, 0)) AS asian_pop,
    MAX(COALESCE(t.hisp, 0)) AS hisp_pop,
    MAX(COALESCE(t.total_no, 0)) AS no_hs,
    MAX(COALESCE(t.total_hs, 0)) AS hs_graduate,
    MAX(COALESCE(t.total_col, 0)) AS college_graduate
FROM crime_data c
FULL JOIN total_pop_data t 
ON c.tract = t.tract
GROUP BY COALESCE(c.tract, t.tract)
ORDER BY COALESCE(c.tract, t.tract);
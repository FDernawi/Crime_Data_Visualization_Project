SELECT 
    c.tract,
    c.offense,
    c.lat,
    c.long,
    COALESCE(f.total, 0) AS female_pop,
    COALESCE(m.total, 0) AS male_pop,
    COALESCE(t.total, 0) AS total_pop,
    COALESCE(t.total_no, 0) AS total_no,
    COALESCE(t.total_hs, 0) AS total_hs,
    COALESCE(t.total_col, 0) AS total_col,
    COALESCE(t.white, 0) AS white,
    COALESCE(t.white_no, 0) AS white_no,
    COALESCE(t.white_hs, 0) AS white_hs,
    COALESCE(t.white_col, 0) AS white_col,
    COALESCE(t.black, 0) AS black,
    COALESCE(t.black_no, 0) AS black_no,
    COALESCE(t.black_hs, 0) AS black_hs,
    COALESCE(t.black_col, 0) AS black_col,
    COALESCE(t.aian, 0) AS aian,
    COALESCE(t.aian_no, 0) AS aian_no,
    COALESCE(t.aian_hs, 0) AS aian_hs,
    COALESCE(t.aian_col, 0) AS aian_col,
    COALESCE(t.asian, 0) AS asian,
    COALESCE(t.asian_no, 0) AS asian_no,
    COALESCE(t.asian_hs, 0) AS asian_hs,
    COALESCE(t.asian_col, 0) AS asian_col,
    COALESCE(t.nhpi, 0) AS nhpi,
    COALESCE(t.nhpi_no, 0) AS nhpi_no,
    COALESCE(t.nhpi_hs, 0) AS nhpi_hs,
    COALESCE(t.nhpi_col, 0) AS nhpi_col,
    COALESCE(t.other, 0) AS other,
    COALESCE(t.other_no, 0) AS other_no,
    COALESCE(t.other_hs, 0) AS other_hs,
    COALESCE(t.other_col, 0) AS other_col,
    COALESCE(t.multi, 0) AS multi,
    COALESCE(t.multi_no, 0) AS multi_no,
    COALESCE(t.multi_hs, 0) AS multi_hs,
    COALESCE(t.multi_col, 0) AS multi_col,
    COALESCE(t.hisp, 0) AS hisp,
    COALESCE(t.hisp_no, 0) AS hisp_no,
    COALESCE(t.hisp_hs, 0) AS hisp_hs,
    COALESCE(t.hisp_col, 0) AS hisp_col
FROM crime_data c
LEFT JOIN female_pop_data f ON c.tract = f.tract
LEFT JOIN male_pop_data m ON c.tract = m.tract
LEFT JOIN total_pop_data t ON c.tract = t.tract;
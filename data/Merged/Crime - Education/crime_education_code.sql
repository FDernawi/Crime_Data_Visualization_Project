SELECT 
    c.tract,
    c.offense,
    c.lat,
    c.long,
    COALESCE(f.total_no, 0) AS female_pop,
    COALESCE(m.total_no, 0) AS male_pop,
    COALESCE(t.total_no, 0) AS total_pop,
	COALESCE(f.total_hs, 0) AS female_pop,
    COALESCE(m.total_hs, 0) AS male_pop,
    COALESCE(t.total_hs, 0) AS total_pop,
	COALESCE(f.total_col, 0) AS female_pop,
    COALESCE(m.total_col, 0) AS male_pop,
    COALESCE(t.total_col, 0) AS total_pop
FROM crime_data c
LEFT JOIN female_pop_data f ON c.tract = f.tract
LEFT JOIN male_pop_data m ON c.tract = m.tract
LEFT JOIN total_pop_data t ON c.tract = t.tract;
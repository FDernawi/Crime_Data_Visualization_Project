SELECT 
    tract,
    Max(COALESCE(white, 0)) AS white_pop,
    Max(COALESCE(black, 0)) AS black_pop,
    Max(COALESCE(asian, 0)) AS asian_pop,
    Max(COALESCE(hisp, 0)) AS hisp_pop,
    Max(COALESCE(aian, 0)) AS aian_pop,
    Max(COALESCE(nhpi, 0)) AS nhpi_pop,
    Max(COALESCE(other, 0)) AS other_pop,
    Max(COALESCE(multi, 0)) AS multi_pop
FROM total_pop_data
GROUP BY tract
ORDER BY tract;
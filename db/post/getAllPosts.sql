SELECT * FROM posts p
INNER JOIN users u
ON p.user_id = u.user_id;
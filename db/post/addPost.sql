INSERT INTO posts
(title, img, content, user_id)
VALUES ($1, $2, $3, $4);

SELECT * FROM posts p
INNER JOIN users u
ON p.user_id = u.user_id;

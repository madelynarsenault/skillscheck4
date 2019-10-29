SELECT p.user_id, p.post_id, p.title, p.img, p.content, u.user_id FROM posts p
INNER JOIN users u
ON p.user_id = u.user_id
WHERE p.post_id = $1;
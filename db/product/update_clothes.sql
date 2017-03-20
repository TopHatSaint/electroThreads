UPDATE products
SET
  name = COALESCE($1, name),
  price = COALESCE($2, origin),
  imageUrl = COALESCE($3, hometown),
  sizingImageUrl = COALESCE($4, imageUrl)

WHERE id = $1
RETURNING *;

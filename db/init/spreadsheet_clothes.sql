CREATE TABLE IF NOT EXISTS users (
  id SERIAL PRIMARY KEY,
  name text,
  email text UNIQUE
);

CREATE TABLE IF NOT EXISTS orders (
  id SERIAL PRIMARY KEY,
  user_id int,
  completed_date text,
  fulfilled text
);
---ADD WISHLIST TABLE AS NON-MVP IF THERES TIME---
CREATE TABLE IF NOT EXISTS products_in_order (
  id SERIAL PRIMARY KEY,
  order_id int,
  product_id int,
  qty int
);

CREATE TABLE IF NOT EXISTS products(
   name           VARCHAR(41) NOT NULL
  ,price          VARCHAR(11) NOT NULL
  ,imageUrl       VARCHAR(98) NOT NULL
  ,sizingImageUrl VARCHAR(60)
  ,id             SERIAL PRIMARY KEY
);
-- INSERT INTO products(name,price,imageUrl,sizingImageUrl) VALUES ('MEDITATING RAFIKI UNISEX HOODIE','$74.95 USD','./Electro Threads Images/Hoodies/Meditating Rafiki Unisex Pullover Hoodie/image (1).JPG','./Electro Threads Images/Hoodies/PulloverHoodieSizeChart.JPG');
-- INSERT INTO products(name,price,imageUrl,sizingImageUrl) VALUES ('LUNAR LION UNISEX HOODIE','$74.95 USD','./Electro Threads Images/Hoodies/Lunar Lion Unisex Pullover Hoodie/image.JPG','./Electro Threads Images/Hoodies/PulloverHoodieSizeChart.JPG');
-- INSERT INTO products(name,price,imageUrl,sizingImageUrl) VALUES ('GOLD BOHO UNISEX HOODIE','$74.95 USD','./Electro Threads Images/Hoodies/Gold Boho Unisex Hoodie/image (1).JPG','./Electro Threads Images/Hoodies/PulloverHoodieSizeChart.JPG');
-- INSERT INTO products(name,price,imageUrl,sizingImageUrl) VALUES ('LIFE AND DEATH UNISEX HOODIE','$74.95 USD','./Electro Threads Images/Hoodies/Life and Death Unisex Hoodie/image (1).JPG','./Electro Threads Images/Hoodies/PulloverHoodieSizeChart.JPG');
-- INSERT INTO products(name,price,imageUrl,sizingImageUrl) VALUES ('GALAXY WOLF TAPESTRY','$34.95 USD','./Electro Threads Images/Tapestries/Galaxy Wolf Tapestry/image.PNG',NULL);
-- INSERT INTO products(name,price,imageUrl,sizingImageUrl) VALUES ('MEDITATING RAFIKI TAPESTRY','$34.95 USD','./Electro Threads Images/Tapestries/Meditating Rafiki Tapestry/image.PNG',NULL);
-- -- INSERT INTO products(name,price,imageUrl,sizingImageUrl) VALUES ('FIRE WALKER TAPESTRY','$34.95 USD','./Electro Threads Images/Tapestries/Fire Walker Tapestry/image.PNG',NULL);
-- -- INSERT INTO products(name,price,imageUrl,sizingImageUrl) VALUES ('DAY AND NIGHT WALL TAPESTRY','$34.95 USD','./Electro Threads Images/Tapestries/Day and Night Tapestry/image.PNG',NULL);
-- INSERT INTO products(name,price,imageUrl,sizingImageUrl) VALUES ('KING OF LIONS BLANKET','$49.95 USD','./Electro Threads Images/Blankets/King of Lions Blanket/image.JPG',NULL);
-- INSERT INTO products(name,price,imageUrl,sizingImageUrl) VALUES ('HIPPIE LION BLANKET','$49.95 USD','./Electro Threads Images/Blankets/Hippie Lion Blanket/image.JPG',NULL);
-- INSERT INTO products(name,price,imageUrl,sizingImageUrl) VALUES ('ELEPHANT LOVE BLANKET','$49.95 USD','./Electro Threads Images/Blankets/Elepahnt Love Blanket/image.JPG',NULL);
-- INSERT INTO products(name,price,imageUrl,sizingImageUrl) VALUES ('GOOD VIBES BLANKET','$37.95 USD','./Electro Threads Images/Blankets/Good Vibes Blanket/image.JPG',NULL);
-- INSERT INTO products(name,price,imageUrl,sizingImageUrl) VALUES ('SACRED KING FLOWY RACERBACK TANK','$24.95 USD','./Electro Threads Images/Tank/Sacred King Flowy Racerback/image.JPG','./Electro Threads Images/T-Shirt/image.PNG');
-- INSERT INTO products(name,price,imageUrl,sizingImageUrl) VALUES ('BLOOMING SKULLS RACERBACK TANK','$34.95 USD','./Electro Threads Images/Tank/Blooming Skulls Racerback/image.JPG','./Electro Threads Images/T-Shirt/image.PNG');
-- INSERT INTO products(name,price,imageUrl,sizingImageUrl) VALUES ('FIRE AND ICE UNISEX CREW','$34.95 USD','./Electro Threads Images/T-Shirt/Fire and Ice Unisex Crew/image.JPG','./Electro Threads Images/T-Shirt/image.PNG');
-- INSERT INTO products(name,price,imageUrl,sizingImageUrl) VALUES ('FIRE WALKER UNISEX CREW','$34.95 USD','./Electro Threads Images/T-Shirt/Fire Walker Unisex Crew/image.JPG','./Electro Threads Images/T-Shirt/image.PNG');
-- INSERT INTO products(name,price,imageUrl,sizingImageUrl) VALUES ('BROTHERHOOD UNISEX CREW','$34.95 USD','./Electro Threads Images/T-Shirt/Brotherhood Unisex Crew/image.JPG','./Electro Threads Images/T-Shirt/image.PNG');
-- INSERT INTO products(name,price,imageUrl,sizingImageUrl) VALUES ('KING OF LIONS PREMIUM FLOWY OFF SHOULDER','$34.95 USD','./Electro Threads Images/T-Shirt/Premium Shirts/King of Lions Premium Flowy Off Shoulder/image.PNG','./Electro Threads Images/T-Shirt/flowyShirtSizeing.JPG');
-- INSERT INTO products(name,price,imageUrl,sizingImageUrl) VALUES ('SLOTH LIFE UNISEX HOODIE','$74.95 USD','./Electro Threads Images/Hoodies/Sloth Life Unisex Hoodie/image.JPG','./Electro Threads Images/Hoodies/PulloverHoodieSizeChart.JPG');
-- INSERT INTO products(name,price,imageUrl,sizingImageUrl) VALUES ('TOTEM UNISEX HOODIE','$74.95 USD','./Electro Threads Images/Hoodies/Totem Unisex Hoodie/image.JPG','./Electro Threads Images/Hoodies/PulloverHoodieSizeChart.JPG');
-- INSERT INTO products(name,price,imageUrl,sizingImageUrl) VALUES ('MEDITATING RAFIKI BLANKET','$54.95 USD','./Electro Threads Images/Blankets/Mediating Rafiki Blanket/image.JPG',NULL);
-- INSERT INTO products(name,price,imageUrl,sizingImageUrl) VALUES ('HIPPIE LION FLOWY OFF SHOULDER','$29.95 USD','./Electro Threads Images/T-Shirt/Hippie Lion Flowy Off Shoulder/image.JPG','./Electro Threads Images/T-Shirt/flowyShirtSizeing.JPG');
-- INSERT INTO products(name,price,imageUrl,sizingImageUrl) VALUES ('GALAXY 2.0 ADULT ONESIE','$114.95 USD','./Electro Threads Images/Onesies/Galaxy 2.0 Adult Onesie/image.JPG',NULL);
-- INSERT INTO products(name,price,imageUrl,sizingImageUrl) VALUES ('ELEPHANT LOVE FLOWY OFF SHOULDER','$29.95 USD','./Electro Threads Images/T-Shirt/Elephant Love Flowy Off Shoulder/image.JPG','./Electro Threads Images/T-Shirt/flowyShirtSizeing.JPG');
-- INSERT INTO products(name,price,imageUrl,sizingImageUrl) VALUES ('GOOD VIBES FLOWY OFF SHOULDER','$29.95 USD','./Electro Threads Images/T-Shirt/Good Vibes Off Shoulder/image.JPG','./Electro Threads Images/T-Shirt/flowyShirtSizeing.JPG');
-- INSERT INTO products(name,price,imageUrl,sizingImageUrl) VALUES ('FIND BALANCE','$27.95 USD','./Electro Threads Images/T-Shirt/Find Balance Unisex Crew/image.JPG','./Electro Threads Images/T-Shirt/image.PNG');
-- INSERT INTO products(name,price,imageUrl,sizingImageUrl) VALUES ('OWL ZENTANGLE MENS BASEBALL TEE','$47.95 USD','./Electro Threads Images/T-Shirt/Owl Zentangle Mens Baseball Tee/image.JPG','./Electro Threads Images/T-Shirt/image.PNG');
-- INSERT INTO products(name,price,imageUrl,sizingImageUrl) VALUES ('RADIATE POSITIVE VIBES FLOWY OFF SHOULDER','$29.95 USD','./Electro Threads Images/T-Shirt/Radiate Positive Vibes Flowy Off Shoulder/image.JPG','./Electro Threads Images/T-Shirt/flowyShirtSizeing.JPG');
-- INSERT INTO products(name,price,imageUrl,sizingImageUrl) VALUES ('ALIGN UNISEX CREW','$27.95 USD','./Electro Threads Images/T-Shirt/Align Unisex Crew/image.JPG','./Electro Threads Images/T-Shirt/image.PNG');
-- INSERT INTO products(name,price,imageUrl,sizingImageUrl) VALUES ('SKULL OFF SHOULDER LONG SLEEVE','$29.95 USD','./Electro Threads Images/T-Shirt/Skull Off Shoulder Long Sleeve/image.JPG','./Electro Threads Images/T-Shirt/image.PNG');
-- INSERT INTO products(name,price,imageUrl,sizingImageUrl) VALUES ('GOOD VIBES UNISEX CREW','$19.95 USD','./Electro Threads Images/T-Shirt/Good Vibes Unisex Crew/image.JPG','./Electro Threads Images/T-Shirt/image.PNG');
-- INSERT INTO products(name,price,imageUrl,sizingImageUrl) VALUES ('SUN AND MOON UNISEX CREW','$19.95 USD','./Electro Threads Images/T-Shirt/Sun and Moon Unisex/image.JPG','./Electro Threads Images/T-Shirt/image.PNG');
-- INSERT INTO products(name,price,imageUrl,sizingImageUrl) VALUES ('HAMSA VIBES UNISEX CREW','$27.95 USD','./Electro Threads Images/T-Shirt/Hamsa Crew Unisex/image.JPG','./Electro Threads Images/T-Shirt/image.PNG');
-- INSERT INTO products(name,price,imageUrl,sizingImageUrl) VALUES ('# BLESSED FLOWY OFF SHOULDER','$29.95 USD','./Electro Threads Images/T-Shirt/Blessed Flowy Off Shoulder/image.JPG','./Electro Threads Images/T-Shirt/flowyShirtSizeing.JPG');
-- INSERT INTO products(name,price,imageUrl,sizingImageUrl) VALUES ('HIPPIE LION BLACK UNISEX','$29.95 USD','./Electro Threads Images/T-Shirt/Hippie Lion Black Unisex Crew/image.JPG','./Electro Threads Images/T-Shirt/image.PNG');
-- INSERT INTO products(name,price,imageUrl,sizingImageUrl) VALUES ('HIGHER TREES UNISEX HOODIE','$74.95 USD','./Electro Threads Images/Hoodies/Higher Trees Unisex Hoodie/image.JPG','./Electro Threads Images/Hoodies/PulloverHoodieSizeChart.JPG');
-- INSERT INTO products(name,price,imageUrl,sizingImageUrl) VALUES ('MEDITATING RAFIKI UNISEX HOODIE','$47.95 USD','./Electro Threads images/Hoodies/Meditating Rafiki Unisex Pullover Hoodie/image.JPG','./Electro Threads Images/Hoodies/PulloverHoodieSizeChart.JPG');
-- INSERT INTO products(name,price,imageUrl,sizingImageUrl) VALUES ('VIBE TRIBE FLOWY TEE','$29.95 USD','./Electro Threads Images/T-Shirt/Vibe Tribe Flowy Tee/image.JPG','./Electro Threads Images/T-Shirt/flowyShirtSizeing.JPG');
-- INSERT INTO products(name,price,imageUrl,sizingImageUrl) VALUES ('VIBE WITH ME UNISEX CREW','$27.95 USD','./Electro Threads Images/T-Shirt/Vibe With Me Unisex Crew/image.JPG','./Electro Threads Images/T-Shirt/image.PNG');
-- INSERT INTO products(name,price,imageUrl,sizingImageUrl) VALUES ('MAD HATTER UNISEX HOODIE','$74.95 USD','./Electro Threads images/Hoodies/Mad Hatter Unisex Hoodie/image.JPG','./Electro Threads Images/Hoodies/PulloverHoodieSizeChart.JPG');
-- INSERT INTO products(name,price,imageUrl,sizingImageUrl) VALUES ('HAMSA WORD ART FLOWY TEE','$37.95 USD','./Electro Threads Images/T-Shirt/Premium Shirts/Hamsa Word Art Flowy Tee Premium/image.JPG','./Electro Threads Images/T-Shirt/flowyShirtSizeing.JPG');
-- INSERT INTO products(name,price,imageUrl,sizingImageUrl) VALUES ('YIN TO MY YANG FLOWY TEE','$29.95 USD','./Electro Threads Images/T-Shirt/Premium Shirts/Yin To My Yang Flowy Tee Premium/image.JPG','./Electro Threads Images/T-Shirt/flowyShirtSizeing.JPG');
-- INSERT INTO products(name,price,imageUrl,sizingImageUrl) VALUES ('GALAXY 2.0 UNISEX HOODIE','$74.95 USD','./Electro Threads images/Hoodies/Galaxy 2.0 Unisex Hoodie/image.JPG','./Electro Threads Images/Hoodies/PulloverHoodieSizeChart.JPG');
-- INSERT INTO products(name,price,imageUrl,sizingImageUrl) VALUES ('GANESHA UNISEX HOODIE','$74.95 USD','./Electro Threads images/Hoodies/Ganesh Unisex Hoodie/image.JPG','./Electro Threads Images/Hoodies/PulloverHoodieSizeChart.JPG');
-- -- INSERT INTO products(name,price,imageUrl,sizingImageUrl) VALUES ('AURORA OWL UNISEX HOODIE','$49.95 USD','./Electro Threads images/Hoodies/Aurora Owl Hoodie/image (2).JPEG','./Electro Threads Images/Hoodies/PulloverHoodieSizeChart.JPG');
-- -- INSERT INTO products(name,price,imageUrl,sizingImageUrl) VALUES ('KING OF LIONS HOODIE','$49.95 USD','./Electro Threads images/Hoodies/King Of Lions Unisex Hoodie/image.JPG','./Electro Threads Images/Hoodies/PulloverHoodieSizeChart.JPG');
-- INSERT INTO products(name,price,imageUrl,sizingImageUrl) VALUES ('POSITIVE VIBRATIONS PREMIUM OFF SHOULDER','$37.95 USD','./Electro Threads Images/T-Shirt/Premium Shirts/Positive Vibrations Premium Off Shoulder/image.JPG','./Electro Threads Images/T-Shirt/flowyShirtSizeing.JPG');
-- INSERT INTO products(name,price,imageUrl,sizingImageUrl) VALUES ('LUNAR LION FLOWY OFF SHOULDER','$47.95 USD','./Electro Threads Images/T-Shirt/Premium Shirts/Lunar Lion Flowy Off Shoulder/image.JPG','./Electro Threads Images/T-Shirt/flowyShirtSizeing.JPG');
-- -- INSERT INTO products(name,price,imageUrl,sizingImageUrl) VALUES ('DARK WOLF UNISEX CREW','$27.95 USD','./Electro Threads Images/T-Shirt/Dark Wolf Unisex Crew/image.JPG','./Electro Threads Images/T-Shirt/image.PNG');
-- -- INSERT INTO products(name,price,imageUrl,sizingImageUrl) VALUES ('GALAXY VIBE WITH ME UNISEX CREW','$27.95 USD','./Electro Threads Images/T-Shirt/Galaxy Vibe With Me Crew/image.JPG','./Electro Threads Images/T-Shirt/image.PNG');

CREATE EXTENSION IF NOT EXISTS "uuid-ossp";

CREATE TABLE list_items (
  item_id uuid PRIMARY KEY DEFAULT uuid_generate_v4(),
  name VARCHAR(255) NOT NULL,
  category VARCHAR(128) NOT NULL,
  quantity INT(5) NOT NULL
)

SELECT * FROM list_items

INSERT INTO list_items (name, category, quantity)
VALUES ('PepsiCo', 'Drinks', 6) RETURNING *


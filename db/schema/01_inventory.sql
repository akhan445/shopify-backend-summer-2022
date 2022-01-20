DROP TABLE IF EXISTS inventory CASCADE;

CREATE TABLE inventory(
  id SERIAL PRIMARY KEY NOT NULL,
  name VARCHAR(255) NOT NULL,
  upc_number VARCHAR(255) NOT NULL,
  category VARCHAR(255),
  quantity INTEGER,
  unit_price_cents INTEGER CHECK (unit_price_cents > 0)
)
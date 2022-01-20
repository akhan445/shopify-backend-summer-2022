module.exports = (db) => {

  const getInventory = () => {
    const query = {
      text: 'SELECT * FROM inventory;'
    };

    return db
        .query(query)
        .then(result => result.rows)
        .catch(err => err);
  };

  const getInventoryById = (id) => {
    const query = {
      text: `SELECT * FROM inventory WHERE id = $1;`,
      values = [id]
    };

    return db
        .query(query)
        .then(result => result.rows[0])
        .catch(err => err);
  };

  const addNewInventory = (name, upc_number, category, quantity, unit_price_cents) => {
    const query = {
      text: `INSERT INTO inventory(name, upc_number, category, quantity, unit_price_cents)
              VALUES ($1, $2, $3, $4, $5) RETURNING *;`,
      values: [name, upc_number, category, quantity, unit_price_cents]
    }

    return db
        .query(query)
        .then(result => result.rows[0])
        .catch(err => err);
  }

  return {

  };
};
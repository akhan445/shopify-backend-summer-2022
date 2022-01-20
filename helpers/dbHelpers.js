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

  const getInventoryById = (inventoryId) => {
    const query = {
      text: `SELECT * FROM inventory WHERE id = $1;`,
      values: [inventoryId]
    };

    return db
        .query(query)
        .then(result => result.rows[0])
        .catch(err => err);
  };

  const addNewInventoryItem = (name, upc_number, category, quantity, unit_price_cents) => {
    const query = {
      text: `INSERT INTO inventory(name, upc_number, category, quantity, unit_price_cents)
              VALUES ($1, $2, $3, $4, $5) RETURNING *;`,
      values: [name, upc_number, category, quantity, unit_price_cents]
    }

    return db
        .query(query)
        .then(result => result.rows[0])
        .catch(err => err);
  };

  const updateInventoryItem = (name, upc_number, category, quantity, unit_price_cents, inventoryId) => {
    const query = {
      text: `UPDATE inventory 
              SET name = $1,
              upc_number = $2,
              category = $3,
              quantity = $4,
              unit_price_cents = $5 WHERE id = $6 RETURNING *;`,
      values: [name, upc_number, category, quantity, unit_price_cents, inventoryId]
    }

    return db
        .query(query)
        .then(result => result.rows[0])
        .catch(err => err);
  };

  const deleteInventoryItem = (inventoryId) => {
    const query = {
      text: `DELETE FROM inventory WHERE id = $1 RETURNING *;`,
      values: [inventoryId]
    };

    return db
        .query(query)
        .then(result => result.rows[0])
        .catch(err => err);
  }

  return {
    getInventory,
    getInventoryById,
    addNewInventoryItem,
    updateInventoryItem,
    deleteInventoryItem
  };
};
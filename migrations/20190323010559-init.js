exports.up = db => {
  return db.runSql(
    `
      CREATE TABLE example (
        id SERIAL,
        content text
      );
    `
  )
}

exports.down = db => {
  return db.runSql('DROP TABLE example')
}

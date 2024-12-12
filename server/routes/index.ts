import knex from "~/util/knex";
export default eventHandler(async (event) => {
  const records = knex.select('*').from("test_table");
  return records;
});

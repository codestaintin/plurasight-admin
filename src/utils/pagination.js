const paginator = (table, page = 1, limit = 3) => {
  const offset = (page - 1) * limit;
  const temp = Object.assign([], table);
  const result = temp.splice(offset, limit);

  return {
    page,
    offset,
    pageSize: result.length,
    pageCount: Math.ceil(table.length / limit),
    result
  };
};

export default paginator;

const Utility = {};
Utility.getCountPage = function(totalCount, size) {
  return Math.ceil(totalCount / size);
};

Utility.getDataByPage = function(data, page, size) {
  let start = page * size;
  let take = start + size;
  let newData = data.slice();
  return newData.slice(start, take);
};

module.exports = {
  Utility
};

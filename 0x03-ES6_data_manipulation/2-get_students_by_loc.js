export default const getStudentsByLocation = (data, city) => {
  const res = data.filter((item) => item.location === city);
  return res;
};

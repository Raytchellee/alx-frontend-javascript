const getStudentIdsSum = (data) => {
  const sum = data.reduce(
    (item, next) => item + next.id, 0,
  );
  return sum;
};

export default getStudentIdsSum;

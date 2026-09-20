export const getItem = () => {
  const data = localStorage.getItem("blogs");

  return data ? JSON.parse(data) : [];
};

export const setItem = (data) => {
  localStorage.setItem("blogs", JSON.stringify(data));
};
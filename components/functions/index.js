export default {
  formatDate: (date) => {
    return new Date(date).toLocaleDateString("en-Us", {
      day: "numeric",
      month: "lomg",
      year: "numeric"
    });
  }
};

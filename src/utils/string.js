class StingUtil {
  getNameStatus = (value) => {
    return value?.toString() === "1" ? "Active" : "Inactive";
  };
}

export default new StingUtil();

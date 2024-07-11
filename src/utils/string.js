class StingUtil {
  getNameStatus = (value) => {
    return value?.toString() === "1" ? "Active" : "Inactive";
  };

  pascalToCamel(object) {
    const camelCaseObject = {};

    for (let key in object) {
      // eslint-disable-next-line no-prototype-builtins
      if (object[key] || object[key] === 0) {
        const camelCaseKey = key.charAt(0).toLowerCase() + key.slice(1);
        camelCaseObject[camelCaseKey] = object[key];
      }
    }

    return camelCaseObject;
  }
}

export default new StingUtil();

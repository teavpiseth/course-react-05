class _RouteUtil {
  objectToQueryString(obj) {
    return Object.keys(obj)
      .map((key) => key + "=" + obj[key])
      .join("&");
  }
}
const RouteUtil = new _RouteUtil();
export default RouteUtil;

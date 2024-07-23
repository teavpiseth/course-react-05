import { Button, Result } from "antd";

export default function PrivateRoute({ component: Component, authorityKey }) {
  function check(key) {
    return JSON.parse(localStorage.getItem("authority"))?.includes(key);
  }

  if (check(authorityKey) === false) {
    return (
      <Result
        status="403"
        title="403"
        subTitle="Sorry, you are not authorized to access this page."
      />
    );
  }
  return (
    <div>
      <Component />
    </div>
  );
}

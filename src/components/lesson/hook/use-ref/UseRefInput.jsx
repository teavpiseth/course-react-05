import React, { forwardRef } from "react";

const UseRefInput = forwardRef((props, ref) => {
  return (
    <div>
      <input
        {...props}
        ref={ref}
        style={{ border: "1px solid red", height: 30 }}
        type="text"
      />
    </div>
  );
});

UseRefInput.displayName = "UseRefInput"; // Assigning display name

export default UseRefInput;

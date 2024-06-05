"use client";

import { useState } from "react";

export default function Counter({ users }) {
  const [count, countSet] = useState(0);

  function onClickHandler() {
    countSet((count) => count + 1);
    return;
  }

  return (
    <div>
      <p>There are {users.length} users</p>
      <button onClick={onClickHandler}>{count}</button>
    </div>
  );
}

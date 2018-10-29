import React from 'react';

export default function statusSelector() {
  return (
    <select>
      <option selected disabled>
        Choose filter
      </option>
      <option value="Pending">Pending</option>
      <option value="Playing">Playing</option>
      <option value="Finished">Finished</option>
    </select>
  );
}

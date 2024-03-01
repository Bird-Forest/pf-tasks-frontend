import React from 'react';

export default function FetchError() {
  return (
    <div>
      <p>Request failed with status code 500</p>
      <p>Request failed with status code 400, ERR_BAD_REQUEST</p>
      <p>Request failed with status code 404</p>
    </div>
  );
}

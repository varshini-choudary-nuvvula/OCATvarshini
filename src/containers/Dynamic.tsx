import React from 'react';

const Dynamic: React.FC<{ path?: string }> = () =>
  <div>
    This is a dynamic page! It will not be statically exported, but is available
    at runtime
  </div>;

export default Dynamic;

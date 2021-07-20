import React from 'react';

class NonProd extends React.Component {
  render() {
    return <div class="nonProd">
      <div class="text">This is a non-production system for development training only. No real data should be used in this system and it has not yet been validated as secure for use in real life.</div>
    </div>
  }
}

export default NonProd;
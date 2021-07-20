import React from 'react';

class HackathonHeader extends React.Component {
  render() {
    return <div class="hackathonHeader">
      <div class="logo1"><img src="/static/images/raf-logo-reversed.png" alt="RAF" /></div>
      <div class="headerTitle">
        {this.props.children}
      </div>
      <div class="logo2"><img src="/static/images/raf-astra.jpg" alt="Astra"/></div>
    </div>
  }
}

export default HackathonHeader;
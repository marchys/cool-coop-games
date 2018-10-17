import React from 'react';
import AppPlayers from 'appsCurrentPlayers/containers/AppCurrentPlayers';

export default function Games() {
  return (
    <div>
      <h1> Our Cool Games</h1>
      <AppPlayers appId="578080" />
      <AppPlayers appId="570" />
      <AppPlayers appId="730" />
      <AppPlayers appId="673950" />
      <AppPlayers appId="359550" />
      <AppPlayers appId="230410" />
    </div>
  );
}

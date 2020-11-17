import React from 'react';
import useLatestData from '../utils/useLatestData';

function CurrentlySlicing() {
  return (
    <div>
      <p>CurrentlySlicing</p>
    </div>
  );
}
function HotSlices() {
  return (
    <div>
      <p>HotSlices</p>
    </div>
  );
}
function HomePage() {
  const { slicemasters, hotSlices } = useLatestData();
  return (
    <div className="center">
      <h1>The best Pizza Downtown!</h1>
      <p>Open 11am to 11pm every single day</p>
      <div>
        <CurrentlySlicing slicemasters={slicemasters} />
        <HotSlices hotslices={hotSlices} />
      </div>
    </div>
  );
}

export default HomePage;

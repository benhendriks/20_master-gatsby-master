import React from 'react';
import LoadingGrid from '../components/LoadingGrid';
import { HomePageGrid } from '../styles/Grids';
import useLatestData from '../utils/useLatestData';

function CurrentlySlicing({ slicemasters }) {
  return (
    <div>
      {!slicemasters && <LoadingGrid count={4} />}
      {slicemasters && !slicemasters?.length && (
        <p>No one is working right now</p>
      )}
    </div>
  );
}
function HotSlices({ hotSlices }) {
  return (
    <div>
      {!hotSlices && <LoadingGrid count={4} />}
      {hotSlices && !hotSlices?.length && <p>Nothing in the Case</p>}
    </div>
  );
}
function HomePage() {
  const { slicemasters, hotSlices } = useLatestData();
  return (
    <div className="center">
      <h1>The best Pizza Downtown!</h1>
      <p>Open 11am to 11pm every single day</p>
      <HomePageGrid>
        <CurrentlySlicing slicemasters={slicemasters} />
        <HotSlices hotslices={hotSlices} />
      </HomePageGrid>
    </div>
  );
}

export default HomePage;

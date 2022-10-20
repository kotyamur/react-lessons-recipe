import ContentLoader from 'react-content-loader';

export const DogSkeleton = () => {
  return (
    <ContentLoader
      speed={2}
      width={400}
      height={460}
      viewBox="0 0 400 460"
      backgroundColor="#f3f3f3"
      foregroundColor="#ecebeb"
    >
      <rect x="255" y="5" rx="2" ry="2" width="140" height="10" />
      <rect x="255" y="20" rx="2" ry="2" width="140" height="10" />
      <rect x="-164" y="-198" rx="2" ry="2" width="400" height="400" />
      <rect x="255" y="35" rx="2" ry="2" width="140" height="10" />
    </ContentLoader>
  );
};

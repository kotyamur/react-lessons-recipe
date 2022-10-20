import ContentLoader from 'react-content-loader';

export const DogSkeleton = () => {
  return (
    <ContentLoader
      speed={2}
      width={600}
      height={460}
      viewBox="0 0 600 460"
      backgroundColor="#f3f3f3"
      foregroundColor="#ecebeb"
    >
      <rect x="435" y="5" rx="2" ry="2" width="150" height="10" />
      <rect x="435" y="30" rx="2" ry="2" width="150" height="10" />
      <rect x="435" y="55" rx="2" ry="2" width="150" height="10" />
      <rect x="5" y="6" rx="0" ry="0" width="400" height="200" />
    </ContentLoader>
  );
};

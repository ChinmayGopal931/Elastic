const Skeleton = () => {
  return (
    <div role="status" className="animate-pulse flex justify-start">
      <div className="h-3 w-1/2 rounded-md bg-body_light_dark"></div>
    </div>
  );
};

export default Skeleton;

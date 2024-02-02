type Item = {
  name: string;
};

const Breadcrumb = ({ breadcrumb }: { breadcrumb: [] }) => {
  return (
    <div className="flex text-sm items-center gap-2">
      {breadcrumb.map((item: Item, i) => (
        <div className="flex items-center gap-2">
          <span>{item.name}</span>{" "}
          <div
            className={`h-[7px] w-[6.5px] bg-black rounded-full ${
              i === breadcrumb.length - 1 ? "hidden" : "block"
            }`}
          ></div>
        </div>
      ))}
    </div>
  );
};

export default Breadcrumb;

import React from "react";

// const Title = ({ title }) => {
//   return <div>{title}</div>;
// };

// export default Title;
const Title = ({ title }) => {
  return (
    <div className="flex-col inline-flex gap-3 items-center justify-center">
      <div className="text-art-pink-100  text-2xl md:text-4xl p-1 font-bold">
        {title}
        <div className="flex justify-center">
          <div className="mt-1 w-12 h-1.5 bg-art-pink-100 rounded-lg" />
        </div>
      </div>
    </div>
  );
};

export default Title;

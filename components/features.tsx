// import * as React from "react";
// import { SectionTitle } from "./sectionTitle";

// const Revealer = ({ children }: any) => {
//   return children;
// };

// export const Features = (props: any) => {
//   const {
//     title,
//     description,
//     features,
//     columns = [1, 2, 3],
//     spacing = 8,
//     align: alignProp = "center",
//     iconSize = 8,
//     aside,
//     reveal: Wrap = Revealer,
//     ...rest
//   } = props;

//   const align = !!aside ? "left" : alignProp;

//   const ip = align === "left" ? "left" : "top";

//   return (
//     <section {...rest}>
//       <div className="flex flex-row h-full items-start">
//         <div className="flex flex-1 gap-4 items-stretch">
//           {(title || description) && (
//             <>
//               <SectionTitle
//                 title={title}
//                 description={description}
//                 align={align}
//               />
//             </>
//           )}
//           <div className={`grid gird-col-${columns} gap-[${spacing}]`}>
//             {features.map((feature: {}, i: any) => {
//               return <div key={i}></div>;
//             })}
//           </div>
//         </div>
//         {aside && <div className="flex-1 p-8">{aside}</div>}
//       </div>
//     </section>
//   );
// };

import React from "react";

export const Feature = ({ title, description, icon }: any) => {
  return (
    <div className="flex flex-col">
      {icon && <div>{icon}</div>}
      <div>
        <h2>{title}</h2>
        <p>{description}</p>
      </div>
    </div>
  );
};

export const Features = ({ title, description, features }: any) => {
  return (
    <section>
      <div className="flex flex-row">
        <div className="flex-1">
          {title ||
            (description && (
              <div>
                <h1>{title}</h1>
                <p>{description}</p>
              </div>
            ))}
          <div className={`grid grid-cols-[${features.length}]`}>
            {features.map((feature: {}, i: number) => (
              <Feature key={i} {...feature} />
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

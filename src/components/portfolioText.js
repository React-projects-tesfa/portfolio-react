import React from "react";
import SubTitle from "./subTitle";

export default function PortfolioText() {
  return (
    <div>
      <SubTitle subTitle="Portfolio" />
      <p className="text-md py-2 leading-8 text-gray-800 dark:text-gray-400">
        <p className="text-md py-2 leading-8 text-gray-800 dark:text-gray-400">
          I have worked on a variety of projects ranging from web applications
          to mobile apps. My experience has taught me how to think critically
          and solve complex problems. I strive to create solutions that are
          innovative and intuitive.
        </p>
      </p>
      <p className="text-md py-2 leading-8 text-gray-800 dark:text-gray-400">
        The following are some of the projects that I have worked on so far.
      </p>
    </div>
  );
}

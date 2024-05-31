import * as React from "react";
import "./static-tw.css";

export const Page = () => (
  <div className="w-[600px] mt-10 mx-auto bg-gray-200 p-5 rounded">
    <div className="flex h-[50px] items-start group" data-testid="HOVER-TARGET">
      <h1 className="border border-slate-800 p-1">HOVER OVER ME</h1>
      <div className="flex">
        <div className="hover-actions group-hover:flex hidden">
          <button data-testid="button" className="bg-black text-white ml-1 p-1">LOOK</button>
        </div>
      </div>
    </div>
  </div>
);

import React from "react";

export default function Header() {
  return (
    <header className="sticky top-0">
      <div className="flex justify-center items-center py-3 bg-black">
        <div className="inline-flex gap-1 items-center">
          <p className="text-white font-bold">
            Surra igång din community med Hivefy!
          </p>
        </div>
      </div>
      <div className="p-5">
        <div className="container"></div>
        <img src="MySQL.png" alt="Hivefy Logo" height="40" width="40" />
      </div>
    </header>
  );
}

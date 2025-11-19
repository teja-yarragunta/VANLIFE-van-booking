import React from "react";
import { useRouteError } from "react-router-dom";

export default function Error() {
  const error = useRouteError();

  return (
    <div className="min-h-[60vh] flex flex-col items-center justify-center px-6 text-center">
      <h1 className="text-3xl md:text-4xl font-semibold text-[#161616] mb-4">
        Error: {error?.message || "Something went wrong"}
      </h1>

      <pre className="text-lg md:text-xl text-[#4D4D4D] bg-[#fdf1e4] p-4 rounded-md">
        {error?.status} — {error?.statusText}
      </pre>
    </div>
  );
}

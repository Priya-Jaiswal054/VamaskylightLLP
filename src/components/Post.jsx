import React, { useEffect } from "react";

export default function Post() {
  useEffect(() => {
    // Dynamically load the LinkedIn script
    const script = document.createElement("script");
    script.src =
      "https://widgets.sociablekit.com/linkedin-page-posts/widget.js";
    script.async = true;
    script.defer = true;
    document.body.appendChild(script);

    return () => {
      document.body.removeChild(script);
    };
  }, []);

  return (
    <div>
      <div className="sk-ww-linkedin-page-post" data-embed-id="25457220"></div>
    </div>
  );
}

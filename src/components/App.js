import React from "react";
import BlogPost from "./BlogPost";
import Profile from "./Profile";

function App() {
  return (
    <div>
      <Profile
        name="John Smith"
        age={30}
        occupation="Software Developer"
        bio="Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed vehicula orci in nibh posuere ullamcorper. Nulla lobortis sodales elit, non commodo velit tincidunt sit amet. Praesent in interdum justo, sed varius neque."
      />
    </div>
  );
}

export default App;

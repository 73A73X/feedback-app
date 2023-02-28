import { useState } from "react";
import Header from "./components/Header";
import FeedbackList from "./components/FeedbackList";
import FeedbackData from "./data/FeedbackData";

/* All of the components coming as one on this main component
which of course is App.js. So we have the individual components 
designed to perform a certain task or hold a certain data.*/

/* We also get the FeedbackData from the component by passing 
it to a useState(FeedbackData) */

/* Also below we have the App level state which needs to be 
accessed within our FeedbackList, so we pass a prop feedback 
to a FeedbackList */

function App() {
  const [feedback, setFeedback] = useState(FeedbackData);

  return (
    <>
      <Header />
      <div className="container">
        <FeedbackList feedback={feedback} />
      </div>
    </>
  );
}

export default App;

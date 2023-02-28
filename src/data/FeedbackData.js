/* Our FeedbackData is passed unto the main component which ofc is App.js.
So we can access this below data when we need to. And this data in this 
component is then used in our App.js inside of a App level state function
which in this case is = const [feedback, setFeedback] = useState(FeedbackData);*/

const FeedbackData = [
  {
    id: 1,
    rating: 10,
    text: "Lorem ipsum dolor sit amet consectetur adipisicing elit. consequuntur vel vitae commodi alias voluptatem est voluptatum ipsa quae.",
  },
  {
    id: 2,
    rating: 9,
    text: "Lorem ipsum dolor sit amet consectetur adipisicing elit. consequuntur vel vitae commodi alias voluptatem est voluptatum ipsa quae.",
  },
  {
    id: 3,
    rating: 8,
    text: "Lorem ipsum dolor sit amet consectetur adipisicing elit. consequuntur vel vitae commodi alias voluptatem est voluptatum ipsa quae.",
  },
];

export default FeedbackData;

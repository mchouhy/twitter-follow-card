import "./App.css";
import FollowCard from "./components/FollowCard";

function App() {
  const users = [
    {
      id: 1,
      name: "Miguel Ángel Durán",
      userName: "midudev",
      isFollowing: true,
    },
    {
      id: 2,
      name: "River Plate",
      userName: "riverplate",
      isFollowing: false,
    },
    {
      id: 3,
      name: "Manchester City",
      userName: "mancity",
      isFollowing: false,
    },
    {
      id: 4,
      name: "Vercel",
      userName: "vercel",
      isFollowing: true,
    },
  ];
  return (
    <section className="App">
      <h1>Who to follow</h1>
      {users.map(({ id, userName, name, isFollowing }) => (
        <FollowCard
          key={id}
          userName={userName}
          initialIsFollowing={isFollowing}
        >
          {name}
        </FollowCard>
      ))}
    </section>
  );
}

export default App;

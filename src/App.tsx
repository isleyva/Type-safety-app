import UserDisplay from "./components/UserDisplay";
import type { User } from "./types";

function App() {
  const users: User[] = [
    {
      name: "bob chen",
      messages: [
        { body: "hello" },
        {
          body: "whats up",
        },
      ],
    },
  ];

  return (
    <div className="bg-zinc-800 flex-col h-screen w-full flex items-center justify-center p-4 gay-y-12 overflow-scroll">
      <h2 className="text-4xl text-yellow-300">hello world</h2>
    </div>
  );
}

export default App;

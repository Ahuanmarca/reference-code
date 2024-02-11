import Avatar from "./Avatar";

const users = [
  {
    id: "001",
    src: "https://sandpack-bundler.vercel.app/img/avatars/001.png",
    alt: "person with curly hair and a black T-shirt",
  },
  {
    id: "002",
    src: "https://sandpack-bundler.vercel.app/img/avatars/002.png",
    alt: "person wearing a hijab and glasses",
  },
  {
    id: "003",
    src: "https://sandpack-bundler.vercel.app/img/avatars/003.png",
    alt: "person with short hair wearing a blue hoodie",
  },
  {
    id: "004",
    src: "https://sandpack-bundler.vercel.app/img/avatars/004.png",
    alt: "person with a pink mohawk and a raised eyebrow",
  },
  {
    id: "005",
    src: "https://sandpack-bundler.vercel.app/img/avatars/005.png",
    alt: "person with a pink mohawk and a raised eyebrow",
  },
  {
    id: "006",
    src: "https://sandpack-bundler.vercel.app/img/avatars/006.png",
    alt: "person with a pink mohawk and a raised eyebrow",
  },
  {
    id: "007",
    src: "https://sandpack-bundler.vercel.app/img/avatars/007.png",
    alt: "person with a pink mohawk and a raised eyebrow",
  },
  {
    id: "008",
    src: "https://sandpack-bundler.vercel.app/img/avatars/008.png",
    alt: "person with a pink mohawk and a raised eyebrow",
  },
];

function App() {
  return (
    <div className="avatar-set">
      {users.map((u) => (
        <Avatar key={u.id} {...u} />
      ))}
    </div>
  );
}

export default App;

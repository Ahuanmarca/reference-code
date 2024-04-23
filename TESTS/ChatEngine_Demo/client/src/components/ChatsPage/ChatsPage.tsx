import { PrettyChatWindow } from 'react-chat-engine-pretty';

function ChatsPage(props) {
  return (
    <div className="background">
      <PrettyChatWindow
        projectId={Bun.env.CHAT_ENGINE_PROJECT_ID}
        username={props.user.username}
        secret={props.user.secret}
      />
    </div>
  );
}

export default ChatsPage;

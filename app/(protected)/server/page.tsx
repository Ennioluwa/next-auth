import { currentUser } from "@/lib/auth";
import { UserInfo } from "@/components/user-info";

const ServerPage = async () => {
  const user = await currentUser();

  console.log(user, "current user");

  return <UserInfo label="💻 Server component" user={user} />;
};

export default ServerPage;

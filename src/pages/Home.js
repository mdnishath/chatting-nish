import React from "react";
import { useSelector } from "react-redux";
import Blocklist from "../components/Blocklist";
import Container from "../components/Container";
import FriendList from "../components/FriendList";
import Friendrequest from "../components/Friendrequest";
import GroupList from "../components/GroupList";
import Mygroups from "../components/Mygroups";
import Userlist from "../components/Userlist";

const Home = () => {
  const data = useSelector((state) => state);
  console.log(data);
  return (
    <Container>
      <div className="mx-auto flex w-full flex-col gap-y-8 md:flex-row md:flex-wrap">
        <div className="flex flex-col gap-y-10 px-3 md:w-full lg:w-1/3">
          <GroupList />
          <Friendrequest />
        </div>
        <div className="flex flex-col gap-y-10 px-3 md:w-full lg:w-1/3">
          <FriendList />
          <Mygroups />
        </div>
        <div className="flex flex-col gap-y-10 px-3 md:w-full lg:w-1/3">
          <Userlist />
          <Blocklist />
        </div>
      </div>
    </Container>
  );
};

export default Home;

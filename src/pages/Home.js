import React from "react";
import { useSelector } from "react-redux";
import Container from "../components/Container";
import GroupList from "../components/GroupList";

const Home = () => {
  const data = useSelector((state) => state);
  console.log(data);
  return (
    <Container>
      <div className="mx-auto flex w-full flex-col gap-12 md:flex-row">
        <div className="flex flex-col gap-y-10 px-3 md:w-1/3">
          <GroupList />
          <GroupList />
        </div>
        <div className="flex flex-col gap-y-10 px-3 md:w-1/3">
          <GroupList />
          <GroupList />
        </div>
        <div className="flex flex-col gap-y-10 px-3 md:w-1/3">
          <GroupList />
          <GroupList />
        </div>
      </div>
    </Container>
  );
};

export default Home;

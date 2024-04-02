import Image from "next/image";

import { Button, Divider } from "@nextui-org/react";

import * as actions from "@/actions";

import TopicCreateForm from "./components/topics/topicCreateForm";
import { auth } from "@/auth";
import Profile from "./components/profile";

import TopicList from "./components/topics/topicList";

export default async function Home() {
  const session = await auth();

  return (
    <div className="grid grid-cols-4 gap-5 p-4">
      <div className="col-span-3">
        <h1 className="text-xl m-2">Top Posts</h1>
      </div>

      <div className=" border shadow py-3 px-2">
        <TopicCreateForm />
        <Divider className="my-2" />
        <h3 className="text-lg">Topics</h3>
        <TopicList />
      </div>
    </div>
  );
}

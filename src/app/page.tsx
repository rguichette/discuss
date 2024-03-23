import Image from "next/image";

import { Button } from "@nextui-org/react";

import * as actions from "@/actions";

import TopicCreateForm from "./components/topics/topicCreateForm";
import { auth } from "@/auth";
import Profile from "./components/profile";

export default async function Home() {
  const session = await auth();

  return (
    <div className="grid grid-cols-4 gap-5 p-4">
      <div className="col-span-3">
        <h1 className="text-xl m-2">Top Posts</h1>
      </div>

      <div>
        <TopicCreateForm />
      </div>
    </div>
  );
}

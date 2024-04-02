import Link from "next/link";
import { Chip } from "@nextui-org/react";
import { db } from "@/db";

import paths from "@/paths";

const TopicList = async () => {
  const topics = await db.topic.findMany();

  const renderedTopics = topics.map((t) => {
    {
      return (
        <div key={t.id}>
          <Link href={paths.topicShow(t.slug)}>
            <Chip color="warning" variant="shadow">
              {t.slug}
            </Chip>
          </Link>
        </div>
      );
    }
  });

  return <div className="flex flex-wrap flex-row gap-2">{renderedTopics}</div>;
};

export default TopicList;

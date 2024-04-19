"use client";
import { Input } from "@nextui-org/react";
import React from "react";
import { useSearchParams } from "next/navigation";
import * as actions from "@/actions";

const SearchInput = () => {
  const searchParams = useSearchParams();
  return (
    <div>
      <form action={actions.search}>
        <Input name="term" defaultValue={searchParams.get("term") || ""} />
      </form>
    </div>
  );
};

export default SearchInput;

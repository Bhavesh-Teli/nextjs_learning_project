"use client";
import { search } from "@/app/actions/search";
import { useSearchParams } from "next/navigation";
import { Input } from "./ui/input";

const SearchInput = () => {
  const searchParams = useSearchParams();
  return (
    <form action={search}>
      <Input
        defaultValue={searchParams.get("term") || ""}
        type="text"
        name="term"
        placeholder="Search post ..."
      />
    </form>
  );
};

export default SearchInput;

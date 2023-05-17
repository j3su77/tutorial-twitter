import { Inter } from "next/font/google";
import { Header } from "@/components/Header";

import { PostFeed } from "@/components/posts/PostFeed";
import Form from "@/components/Form";


export default function Home() {
  return (
    <>
      <Header showBackArrow label="home" />
      <Form placeholder="What's happening?" />
      <PostFeed />
    </>
  );
}

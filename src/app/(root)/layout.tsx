import React, { ReactNode } from "react";
import StreamVideoProvider from "@/components/providers/StreamClientProvider";

const Layout = ({ children }: { children: React.ReactNode }) => {
  return <StreamVideoProvider>{children}</StreamVideoProvider>;
};
export default Layout;

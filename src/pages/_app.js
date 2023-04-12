// pages/_app.js
import React from "react";
import "@/styles/globals.css";
import { UserProvider } from "@auth0/nextjs-auth0/client";
import { ProSidebarProvider } from "react-pro-sidebar";

export default function App({ Component, pageProps }) {
  // You can optionally pass the `user` prop from pages that require server-side
  // rendering to prepopulate the `useUser` hook.
  const { user } = pageProps;

  return (
    <UserProvider user={user}>
      <ProSidebarProvider>
        <Component {...pageProps} />
      </ProSidebarProvider>
    </UserProvider>
  );
}

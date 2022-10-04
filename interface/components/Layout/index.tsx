import { ReactNode, useEffect } from "react";
import { Content } from "./Content";
import { Header } from "./Header";


interface LayoutProps {
  children: ReactNode
}
export function Layout(props: LayoutProps) {
  const { children } = props

  return <>
    <Header />
    <Content>{children}</Content>
  </>
}
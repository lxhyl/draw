import { ReactNode } from "react";

interface ContentProps {
  children: ReactNode
}

export function Content(props: ContentProps) {
  const { children } = props
  return <div>
    {children}
  </div>
}
"use client"
import { useState, useEffect } from "react";
import { useWindowWidth } from "@react-hook/window-size";

export function useSidebarState() {
  const [isCollapsed, setIsCollapsed] = useState(false);
  const [isClient, setIsClient] = useState(false);
  const onlyWidth = useWindowWidth();
  const mobileWidth = onlyWidth < 768;

  useEffect(() => {
    setIsClient(true);
  }, []);

  const toggleSidebar = () => {
    setIsCollapsed(!isCollapsed);
  };

  return { isCollapsed, toggleSidebar, mobileWidth, isClient };
}

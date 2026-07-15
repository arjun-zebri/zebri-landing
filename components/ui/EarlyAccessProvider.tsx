"use client";

import {
  createContext,
  useCallback,
  useContext,
  useMemo,
  useState,
} from "react";
import { EarlyAccessModal } from "./EarlyAccessModal";

interface EarlyAccessContextValue {
  /** Open the early-access modal. Pass a source string to tag where the lead came from. */
  open: (source?: string) => void;
}

const EarlyAccessContext = createContext<EarlyAccessContextValue | null>(null);

export function useEarlyAccess(): EarlyAccessContextValue {
  const ctx = useContext(EarlyAccessContext);
  if (!ctx) {
    throw new Error("useEarlyAccess must be used within an EarlyAccessProvider");
  }
  return ctx;
}

export function EarlyAccessProvider({
  children,
}: {
  children: React.ReactNode;
}) {
  const [isOpen, setIsOpen] = useState(false);
  const [source, setSource] = useState<string | undefined>();

  const open = useCallback((s?: string) => {
    setSource(s);
    setIsOpen(true);
  }, []);

  const close = useCallback(() => setIsOpen(false), []);

  const value = useMemo(() => ({ open }), [open]);

  return (
    <EarlyAccessContext.Provider value={value}>
      {children}
      <EarlyAccessModal open={isOpen} onClose={close} source={source} />
    </EarlyAccessContext.Provider>
  );
}

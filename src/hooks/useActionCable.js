import { createConsumer } from "@rails/actioncable";
import { useEffect, useMemo } from "react";

export default function useActionCable(url) {
  const actionCable = useMemo(() => createConsumer(url), []);

  return { actionCable };
}
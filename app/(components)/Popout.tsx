"use client";

import { Button } from "@/components/ui/button";
import { ToastAction } from "@/components/ui/toast";
import { useToast } from "@/components/ui/use-toast";
import { Plus } from "lucide-react";

export function ToastDemo() {
  const { toast } = useToast();

  return (
    <Button
      variant="outline"
      onClick={() => {
        toast({
          title: "Another row added",

          action: <ToastAction altText="Goto schedule to undo">Ok</ToastAction>,
        });
      }}
    >
      <Plus />
    </Button>
  );
}
export default ToastDemo;

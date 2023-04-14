"use client";
import { useSearchParams } from "next/navigation";
export default function StackDetailPage() {
  const id = useSearchParams().get('_id');
  return <div>detail : {id}</div>;
}

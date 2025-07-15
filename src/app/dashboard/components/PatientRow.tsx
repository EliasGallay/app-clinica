"use client";
import { Button } from "@/components/ui/button";

interface PatientRowProps {
  name: string;
  age: number;
  gender: string;
  lastVisit: string;
}

export default function PatientRow({
  name,
  age,
  gender,
  lastVisit,
}: PatientRowProps) {
  return (
    <tr className="border-b">
      <td className="p-3">{name}</td>
      <td className="p-3">{age}</td>
      <td className="p-3">{gender}</td>
      <td className="p-3">{lastVisit}</td>
      <td className="p-3 flex gap-2">
        <Button size="sm" variant="outline">
          Ver más
        </Button>
      </td>
    </tr>
  );
}

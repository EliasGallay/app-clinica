"use client";
import { Input } from "@/components/ui/input";
import AddPatientDialog from "./AddPatientDialog";

export default function PatientSearchBar() {
  return (
    <div className="flex flex-col md:flex-row md:items-center md:justify-between gap-4 w-full">
      <Input
        type="text"
        placeholder="Buscar paciente..."
        className="w-full md:w-[400px]"
      />
      <AddPatientDialog />
    </div>
  );
}

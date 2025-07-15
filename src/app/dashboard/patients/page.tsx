"use client";
import PatientSearchBar from "@/app/dashboard/components/PatientSearchbar";
import PatientTable from "@/app/dashboard/components/PatientTable";

const patients = [
  {
    name: "María González",
    age: 45,
    gender: "Femenino",
    lastVisit: "20/04/2024",
  },
  { name: "Juan Pérez", age: 58, gender: "Masculino", lastVisit: "18/04/2024" },
  {
    name: "Laura Martín",
    age: 33,
    gender: "Femenino",
    lastVisit: "10/04/2024",
  },
  {
    name: "José Ramírez",
    age: 61,
    gender: "Masculino",
    lastVisit: "05/04/2024",
  },
];

export default function PatientsPage() {
  return (
    <div className="w-full max-w-5xl mx-auto p-4 md:p-6 space-y-6">
      <h2 className="text-2xl font-semibold">Gestión de Pacientes</h2>
      <PatientSearchBar />
      <PatientTable patients={patients} />
    </div>
  );
}

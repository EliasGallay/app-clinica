"use client";
import PatientRow from "./PatientRow";

interface Patient {
  name: string;
  age: number;
  gender: string;
  lastVisit: string;
}

interface PatientTableProps {
  patients: Patient[];
}

export default function PatientTable({ patients }: PatientTableProps) {
  return (
    <div className="overflow-x-auto mt-4 rounded-md border border-gray-200">
      <table className="w-full min-w-[600px] text-left text-sm">
        <thead className="bg-gray-100">
          <tr>
            <th className="p-3">Nombre</th>
            <th className="p-3">Edad</th>
            <th className="p-3">Sexo</th>
            <th className="p-3">Última Consulta</th>
            <th className="p-3">Acciones</th>
          </tr>
        </thead>
        <tbody>
          {patients.map((patient, index) => (
            <PatientRow key={index} {...patient} />
          ))}
        </tbody>
      </table>
    </div>
  );
}

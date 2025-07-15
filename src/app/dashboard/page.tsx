// app/dashboard/page.tsx
"use client";
import { UpcomingAppointmentsCard } from "@/app/dashboard/components/UpcomingAppointmentsCard";
import { AlertsCard } from "@/app/dashboard/components/AlertsCard";
import { SummaryCard } from "@/app/dashboard/components/SummaryCard";
import { SpecialtiesChartCard } from "@/app/dashboard/components/SpecialtiesChartCard";
import { Button } from "@/components/ui/button";
const summaryData = [
  { title: "Pacientes Registrados", value: 1245 },
  { title: "Turnos para Hoy", value: 23 },
  { title: "Turnos Confirmados", value: 18 },
  { title: "Médicos Activos Hoy", value: 5 },
];

const upcomingAppointments = [
  {
    time: "08:00",
    patient: "Juan Pérez",
    doctor: "Dra. Gómez",
    specialty: "Clínica Médica",
  },
  {
    time: "08:30",
    patient: "Laura Martínez",
    doctor: "Dr. Rodríguez",
    specialty: "Pediatría",
  },
  {
    time: "09:00",
    patient: "Pedro García",
    doctor: "Dra. Fernández",
    specialty: "Ginecología",
  },
];

const specialtiesData = [
  { name: "Clínica Médica", value: 12 },
  { name: "Pediatría", value: 6 },
  { name: "Ginecología", value: 4 },
  { name: "Otros", value: 1 },
];

const alerts = [
  "Nuevo paciente registrado: María López.",
  "El Dr. Ortega canceló los turnos de la tarde.",
  "Actualización disponible del sistema.",
];

export default function DashboardPage() {
  return (
    <div className="p-6 space-y-6">
      {/* Título */}
      <h2 className="text-2xl font-semibold">Resumen del Dashboard</h2>

      {/* Resumen */}
      <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
        {summaryData.map((item) => (
          <SummaryCard key={item.title} title={item.title} value={item.value} />
        ))}
      </div>

      {/* Próximos turnos + Gráfico + Alertas */}
      <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">
        <UpcomingAppointmentsCard appointments={upcomingAppointments} />
        <SpecialtiesChartCard data={specialtiesData} />
        <AlertsCard items={alerts} />
      </div>

      {/* Acciones rápidas */}
      <div className="flex flex-wrap gap-4">
        <Button>Registrar Paciente</Button>
        <Button variant="outline">Ver Turnos</Button>
        <Button variant="secondary">Gestionar Médicos</Button>
      </div>
    </div>
  );
}

"use client";

import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import {
  BarChart,
  Bar,
  XAxis,
  YAxis,
  Tooltip,
  ResponsiveContainer,
} from "recharts";

const summary = [
  { title: "Pacientes registrados", value: 1245 },
  { title: "Turnos para hoy", value: 23 },
  { title: "Turnos confirmados", value: 18 },
  { title: "Médicos activos hoy", value: 5 },
];

const appointments = [
  {
    hora: "08:00",
    paciente: "Juan Pérez",
    medico: "Dra. Gómez",
    especialidad: "Clínica Médica",
  },
  {
    hora: "08:30",
    paciente: "Laura Martínez",
    medico: "Dr. Rodríguez",
    especialidad: "Pediatría",
  },
  {
    hora: "09:00",
    paciente: "Pedro García",
    medico: "Dra. Fernández",
    especialidad: "Ginecología",
  },
];

const turnosEspecialidad = [
  { name: "Clínica Médica", value: 12 },
  { name: "Pediatría", value: 6 },
  { name: "Ginecología", value: 4 },
  { name: "Otro", value: 1 },
];

export default function DashboardHome() {
  return (
    <div className="p-6 space-y-6">
      {/* Título */}
      <h2 className="text-2xl font-semibold">Resumen General del Día</h2>

      {/* Resumen */}
      <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
        {summary.map((item) => (
          <Card key={item.title}>
            <CardHeader>
              <CardTitle className="text-base">{item.title}</CardTitle>
            </CardHeader>
            <CardContent>
              <p className="text-2xl font-bold">{item.value}</p>
            </CardContent>
          </Card>
        ))}
      </div>

      {/* Próximos turnos + gráfico + alertas */}
      <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">
        {/* Turnos */}
        <Card className="lg:col-span-1">
          <CardHeader>
            <CardTitle>Próximos Turnos</CardTitle>
          </CardHeader>
          <CardContent className="space-y-2">
            {appointments.map((a, index) => (
              <div key={index} className="text-sm">
                <p>
                  <span className="font-semibold">{a.hora}</span> — {a.paciente}{" "}
                  con {a.medico} ({a.especialidad})
                </p>
              </div>
            ))}
          </CardContent>
        </Card>

        {/* Turnos por especialidad (Gráfico) */}
        <Card className="lg:col-span-1">
          <CardHeader>
            <CardTitle>Turnos por Especialidad</CardTitle>
          </CardHeader>
          <CardContent>
            <ResponsiveContainer width="100%" height={200}>
              <BarChart data={turnosEspecialidad}>
                <XAxis dataKey="name" />
                <YAxis allowDecimals={false} />
                <Tooltip />
                <Bar dataKey="value" />
              </BarChart>
            </ResponsiveContainer>
          </CardContent>
        </Card>

        {/* Alertas */}
        <Card className="lg:col-span-1">
          <CardHeader>
            <CardTitle>Alertas o Notificaciones</CardTitle>
          </CardHeader>
          <CardContent className="text-sm space-y-2">
            <ul className="list-disc list-inside">
              <li>Nuevo paciente registrado: María López.</li>
              <li>El Dr. Ortega canceló sus turnos de la tarde.</li>
              <li>Actualización disponible del sistema.</li>
            </ul>
          </CardContent>
        </Card>
      </div>

      {/* Acciones rápidas */}
      <div className="flex flex-wrap gap-4">
        <Button>Registrar nuevo paciente</Button>
        <Button variant="outline">Ver agenda de turnos</Button>
        <Button variant="secondary">Gestionar médicos</Button>
      </div>
    </div>
  );
}

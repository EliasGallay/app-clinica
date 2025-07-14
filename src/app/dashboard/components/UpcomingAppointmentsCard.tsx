import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";

interface Appointment {
  time: string;
  patient: string;
  doctor: string;
  specialty: string;
}

interface Props {
  appointments: Appointment[];
}

export function UpcomingAppointmentsCard({ appointments }: Props) {
  return (
    <Card>
      <CardHeader>
        <CardTitle>Próximos Turnos</CardTitle>
      </CardHeader>
      <CardContent className="space-y-2">
        {appointments.map((a, i) => (
          <div key={i} className="text-sm">
            <p>
              <span className="font-semibold">{a.time}</span> — {a.patient} con{" "}
              {a.doctor} ({a.specialty})
            </p>
          </div>
        ))}
      </CardContent>
    </Card>
  );
}

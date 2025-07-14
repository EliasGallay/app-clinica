import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";

interface Props {
  items: string[];
}

export function AlertsCard({ items }: Props) {
  return (
    <Card>
      <CardHeader>
        <CardTitle>Alerts & Notifications</CardTitle>
      </CardHeader>
      <CardContent className="text-sm space-y-2">
        <ul className="list-disc list-inside">
          {items.map((item, i) => (
            <li key={i}>{item}</li>
          ))}
        </ul>
      </CardContent>
    </Card>
  );
}

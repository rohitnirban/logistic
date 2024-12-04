import {
    Table,
    TableBody,
    TableCell,
    TableHead,
    TableHeader,
    TableRow,
  } from "@/components/ui/table"
  import { Button } from "@/components/ui/button"
  
  type Driver = {
    id: number
    name: string
    score: number
  }
  
  type DriverTableProps = {
    drivers: Driver[]
    onViewMore: (driver: Driver) => void
  }
  
  export function DriverTable({ drivers, onViewMore }: DriverTableProps) {
    return (
      <Table>
        <TableHeader>
          <TableRow>
            <TableHead>Name</TableHead>
            <TableHead>Driving Score</TableHead>
            <TableHead>Recommendation</TableHead>
            <TableHead>Actions</TableHead>
          </TableRow>
        </TableHeader>
        <TableBody>
          {drivers.map((driver) => (
            <TableRow key={driver.id}>
              <TableCell>{driver.name}</TableCell>
              <TableCell>{driver.score}</TableCell>
              <TableCell className={`${driver?.score >= 95 ? 'text-green-600' : 'text-red-600'}`}>{driver?.score >= 95 ? 'Recommended' : 'Not Recommended'}</TableCell>
              <TableCell>
                <Button variant="outline" onClick={() => onViewMore(driver)}>
                  View More
                </Button>
              </TableCell>
            </TableRow>
          ))}
        </TableBody>
      </Table>
    )
  }
  
  
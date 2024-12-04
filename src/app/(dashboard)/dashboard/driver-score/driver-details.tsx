import {
    Dialog,
    DialogContent,
    DialogHeader,
    DialogTitle,
    DialogDescription,
  } from "@/components/ui/dialog"
  
  type Driver = {
    id: number
    name: string
    score: number
  }
  
  type Behavior = {
    rashDriving: number
    unnecessaryBrakes: number
    quickTurns: number
    successfulDeliveries: number
    unsuccessfulDeliveries: number
  }
  
  type DriverDetailsProps = {
    driver: Driver
    behavior: Behavior
    onClose: () => void
  }
  
  export function DriverDetails({ driver, behavior, onClose }: DriverDetailsProps) {
    return (
      <Dialog open={true} onOpenChange={onClose}>
        <DialogContent>
          <DialogHeader>
            <DialogTitle>{driver.name}&apos;s Performance Details</DialogTitle>
            <DialogDescription>
              Overall Driving Score: {driver.score}
            </DialogDescription>
          </DialogHeader>
          <div className="mt-4">
            <h3 className="text-lg font-semibold mb-2">Driving Behavior</h3>
            <ul className="space-y-2">
              <li>Rash Driving Incidents(High Impact): {behavior.rashDriving}</li>
              <li>Unnecessary Brakes(Medium Impact): {behavior.unnecessaryBrakes}</li>
              <li>Quick Turns(Medium Impact): {behavior.quickTurns}</li>
              <li>Successful Deliveries(Low Impact): {behavior.successfulDeliveries}</li>
              <li>Unsuccessful Deliveries(Low Impact): {behavior.unsuccessfulDeliveries}</li>
            </ul>
          </div>
        </DialogContent>
      </Dialog>
    )
  }
  
  
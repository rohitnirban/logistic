'use client'

import { useState } from 'react'
import { DriverTable } from './driver-table'
import { DriverDetails } from './driver-details'

// Mock data for drivers
const drivers = [
    { id: 1, name: 'Rajesh Kumar', score: 0 },
    { id: 2, name: 'Priya Sharma', score: 0 },
    { id: 3, name: 'Amit Patel', score: 0 },
    { id: 4, name: 'Sunita Gupta', score: 0 },
    { id: 5, name: 'Vikram Singh', score: 0 },
]

// Mock data for driver behavior
const driverBehavior = {
    1: { rashDriving: 2, unnecessaryBrakes: 5, quickTurns: 3, successfulDeliveries: 45, unsuccessfulDeliveries: 2 },
    2: { rashDriving: 1, unnecessaryBrakes: 3, quickTurns: 2, successfulDeliveries: 50, unsuccessfulDeliveries: 1 },
    3: { rashDriving: 20, unnecessaryBrakes: 42, quickTurns: 28, successfulDeliveries: 10, unsuccessfulDeliveries: 32 },
    4: { rashDriving: 2, unnecessaryBrakes: 4, quickTurns: 3, successfulDeliveries: 47, unsuccessfulDeliveries: 2 },
    5: { rashDriving: 0, unnecessaryBrakes: 2, quickTurns: 1, successfulDeliveries: 52, unsuccessfulDeliveries: 0 },
}

// Scoring function
function calculateDrivingScore(rashDriving: number, unnecessaryBrakes: number, quickTurns: number, successfulDeliveries: number, unsuccessfulDeliveries: number): number {
    // Weights
    const W1 = 0.8, W2 = 0.6, W3 = 0.6, W4 = 0.1, W5 = 0.2;

    // Normalize input (example normalization, adjust as needed)
    const rashScore = rashDriving / 10;
    const brakeScore = unnecessaryBrakes / 10;
    const turnScore = quickTurns / 10;
    const successScore = successfulDeliveries / 50; // Assuming max 50 deliveries for normalization
    const failureScore = unsuccessfulDeliveries / 10;

    // Calculate score
    let score = 100 - (W1 * rashScore + W2 * brakeScore + W3 * turnScore) + (W4 * successScore - W5 * failureScore);

    // Clamp the score between 0 and 100
    return Math.max(0, Math.min(100, parseFloat(score.toFixed(2))));
}

export default function DriverPerformancePage() {
    const [selectedDriver, setSelectedDriver] = useState<(typeof drivers)[0] | null>(null)

    // Calculate scores and assign them to drivers
    const driversWithScores = drivers.map(driver => {
        const behavior = driverBehavior[driver.id as keyof typeof driverBehavior];
        return {
            ...driver,
            score: calculateDrivingScore(
                behavior.rashDriving,
                behavior.unnecessaryBrakes,
                behavior.quickTurns,
                behavior.successfulDeliveries,
                behavior.unsuccessfulDeliveries
            ),
        };
    });

    return (
        <div className="container mx-auto px-4 py-8">
            <h1 className="text-2xl font-bold mb-6">Driver Performance</h1>
            <DriverTable
                drivers={driversWithScores}
                onViewMore={(driver) => setSelectedDriver(driver)}
            />
            {selectedDriver && (
                <DriverDetails
                    driver={selectedDriver}
                    behavior={driverBehavior[selectedDriver.id as keyof typeof driverBehavior]}
                    onClose={() => setSelectedDriver(null)}
                />
            )}
        </div>
    )
}

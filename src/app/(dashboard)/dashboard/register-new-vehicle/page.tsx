'use client'

import { useState } from 'react'
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Label } from "@/components/ui/label"
import { toast } from "@/hooks/use-toast"
import axios from 'axios'
import { ScrollArea } from '@/components/ui/scroll-area'
import endpoint from '@/constants/api'

type UlipVehicleDetails = {
  rc_owner_name: string
  rc_regn_no: string
  rc_regn_dt: string
  rc_regn_upto: string
  rc_chasi_no: string
  rc_eng_no: string
  rc_maker_desc: string
  rc_insurance_policy_no: string
  rc_insurance_upto: string
  rc_status: string
  rc_vch_catg_desc: string
}

export default function VehicleRegistrationForm() {
  const [deviceId, setDeviceId] = useState('')
  const [vehicleNumber, setVehicleNumber] = useState('')
  const [isVerified, setIsVerified] = useState(false)
  const [ulipDl, setUlipDl] = useState<UlipVehicleDetails | null>(null) 

  const verifyDetails = async () => {
    setIsVerified(false)
    console.log(vehicleNumber);
    try {
      const response = await axios.post(
        `${endpoint}/api/verify/vahaan`,
        {
          vehiclenumber: vehicleNumber
        },
      )
      const apiData = response.data
      const responseData = apiData
      setUlipDl(responseData)
      setIsVerified(true)
      console.log(responseData);
    } catch (error) {
      setIsVerified(false)
      console.error("Verification Error:", error)
      toast({
        title: "Error",
        description: "An error occurred during verification."
      })
    }
  }

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault()

    if (!deviceId || !vehicleNumber) {
      toast({
        title: "Error",
        description: "Please fill in all fields.",
        variant: "destructive",
      })
      return
    }

    // Here you would typically send the data to your backend
    console.log('Submitting:', { deviceId, vehicleNumber })

    toast({
      title: "Success",
      description: "Device linked with vehicle successfully!",
    })

    // Clear the form
    setDeviceId('')
    setVehicleNumber('')
  }

  return (
    <ScrollArea className="h-full">
      <div className="flex items-center justify-center min-h-screen bg-gray-100 py-20"> {/* Container centered vertically and horizontally */}
        <div className="bg-white p-8 rounded-lg shadow-lg w-full max-w-md">
          <h2 className="text-2xl font-bold text-center mb-6">Link Device with Vehicle</h2> {/* Heading centered */}

          <form onSubmit={handleSubmit} className="space-y-4">
            <div>
              <Label htmlFor="deviceId">Device ID</Label>
              <Input
                id="deviceId"
                value={deviceId}
                onChange={(e) => setDeviceId(e.target.value)}
                placeholder="Enter Device ID"
              />
            </div>
            <div>
              <Label htmlFor="vehicleNumber">Vehicle Number</Label>
              <Input
                id="vehicleNumber"
                value={vehicleNumber}
                onChange={(e) => setVehicleNumber(e.target.value)}
                placeholder="Enter Vehicle Number"
              />
            </div>
            <Button type="button" onClick={verifyDetails} disabled={isVerified}>
              {isVerified ? "Verified" : "Verify Details"}
            </Button>
            <div>

              {isVerified ? (
                <div className='mb-10'>
                  <h1 className='font-bold text-xl underline mb-4'>Verify Details</h1>
                  <p>Driver Full Name : {ulipDl?.rc_owner_name}</p>
                  <p>Registration Number : {ulipDl?.rc_regn_no}</p>
                  <p>Registration Date : {ulipDl?.rc_regn_dt}</p>
                  <p>Registration upto : {ulipDl?.rc_regn_upto}</p>
                  <p>Chasi Number : {ulipDl?.rc_chasi_no}</p>
                  <p>Engine Number : {ulipDl?.rc_eng_no}</p>
                  <p>Maker: {ulipDl?.rc_maker_desc}</p>
                  <p>Insurance Policy Number : {ulipDl?.rc_insurance_policy_no}</p>
                  <p>Insurance Upto : {ulipDl?.rc_insurance_upto}</p>
                  <p>Status : {ulipDl?.rc_status}</p>
                  <p>Vehicle Category : {ulipDl?.rc_vch_catg_desc}</p>
                </div>
              ) : (
                <p></p>
              )}
              <Button type="submit">Register</Button>
              <Button type="button" className='ml-10'>Stop Registration</Button>
            </div>
          </form>
        </div>
      </div>
    </ScrollArea>
  )
}

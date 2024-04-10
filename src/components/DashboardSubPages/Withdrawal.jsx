import { Icons } from "../icons"
import { Link } from 'react-router-dom';

//import { ReactComponent as PaystackIcon } from '/Users/rotimi/Documents/botmon-frontend-v1/src/assets/paystack_logo.svg'; 

import {    
    Activity,
    ArrowUpRight,
    CreditCard,
    DollarSign,
    Users,

  } from "lucide-react"

 

import { Button } from "@/components/ui/button"
import {
  Card,
  CardContent,
  CardDescription,
  CardFooter,
  CardHeader,
  CardTitle,
} from "@/components/ui/card"
import { Input } from "@/components/ui/input"
import { Label } from "@/components/ui/label"
import { RadioGroup, RadioGroupItem } from "@/components/ui/radio-group"
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select"

import MobileSidebar from '../MobileSidebar';
import Sidebar from '../Sidebar';

export function Withdrawal() {
  return (

    
    <div className="flex min-h-screen w-full flex-col bg-muted/40">
      <Sidebar />
      <div className="flex flex-col sm:gap-4 sm:py-4 sm:pl-14">
        <header className="sticky top-0 z-30 flex h-14 items-center gap-4 border-b bg-background px-4 sm:static sm:h-auto sm:border-0 sm:bg-transparent sm:px-6">
          <MobileSidebar />
          </header>
          
    <Card>

        
      <CardHeader>
        <CardTitle>Payment Method</CardTitle>
        <CardDescription>
          Add a new payment method to your account.
        </CardDescription>
      </CardHeader>
      <CardContent className="grid gap-6">
        <RadioGroup defaultValue="card" className="grid grid-cols-1 gap-4">
          <div>
            
          </div>
          <div>
            <RadioGroupItem
              value="paypal"
              id="paypal"
              className="peer sr-only"
            />
            <Label
              htmlFor="paypal"
              className="flex flex-col items-center justify-between rounded-md border-2 border-muted bg-popover p-4 hover:bg-accent hover:text-accent-foreground peer-data-[state=checked]:border-primary [&:has([data-state=checked])]:border-primary"
            >
              <Icons.paypal className="mb-3 h-6 w-6" />
              Paystack
            </Label>
          </div>
          <div>
          </div>
        </RadioGroup>
        <div className="grid gap-2">
          <Label htmlFor="BVN">BVN</Label>
          <Input id="BVN" placeholder="Enter BVN" />
        </div>
        <div className="grid gap-2">
          {/* <Label htmlFor="number">Card number</Label>
          <Input id="number" placeholder="" /> */}
           <Label htmlFor="bank">Bank</Label>
            <Select>
              <SelectTrigger id="bank">
                <SelectValue placeholder="Bank" />
              </SelectTrigger>
              <SelectContent>
                <SelectItem value="1">First Bank of Nigeria</SelectItem>
                <SelectItem value="2">Access Bank PLC</SelectItem>
                <SelectItem value="3">Opay Digital Services</SelectItem>
                <SelectItem value="4">Zenith bank PLC</SelectItem>
                <SelectItem value="5">ALAT Wema Bank</SelectItem>
                <SelectItem value="6">United Bank of Africa</SelectItem>
                <SelectItem value="7">Ecobank</SelectItem>
                <SelectItem value="8">Standard Chatered Bank of Nigeria </SelectItem>
                <SelectItem value="9">Stanbic IBTC</SelectItem>
                <SelectItem value="10">Palmpay</SelectItem>
                <SelectItem value="11">November</SelectItem>
                <SelectItem value="12">December</SelectItem>
              </SelectContent>
            </Select>
        </div>
        {/* <div className="grid grid-cols-3 gap-4">
          <div className="grid gap-2">
           
          </div> */}
         
          <div className="grid gap-2">
            <Label htmlFor="accountNumber">Account Number</Label>
            <Input id="accountNumber" placeholder="Enter your Account Number" />
          </div>
    
      </CardContent>
      <CardFooter>
        <Button className="w-full">Continue</Button>
      </CardFooter>
    </Card>
    
    </div>
    </div>
  )
}

export default Withdrawal;
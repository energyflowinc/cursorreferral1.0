import React from 'react'
import { Input } from './ui/input'
import { Button } from './ui/button'
import { Select } from './ui/select'
import { Save, X } from 'lucide-react'

interface ReferralFormProps {
  initialData?: {
    id?: number
    referrer: string
    referrerLocation: string
    referralCode: string
    referredCustomer: string
    referredLocation: string
    status: string
    rewardStatus: string
    amount: string
  }
  onSubmit: (data: any) => void
  onCancel: () => void
  isEdit?: boolean
}

export function ReferralForm({ 
  initialData = {
    referrer: '',
    referrerLocation: '',
    referralCode: '',
    referredCustomer: '',
    referredLocation: '',
    status: 'Pending',
    rewardStatus: 'Pending',
    amount: '$50'
  }, 
  onSubmit, 
  onCancel,
  isEdit = false
}: ReferralFormProps) {
  const [formData, setFormData] = React.useState(initialData)

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLSelectElement>) => {
    const { name, value } = e.target
    setFormData(prev => ({
      ...prev,
      [name]: value
    }))
  }

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault()
    onSubmit(formData)
  }

  const generateReferralCode = () => {
    // Generate a referral code using the first 5 letters of the referrer's name
    // and 6 random numbers
    if (!formData.referrer) return
    
    const prefix = formData.referrer.slice(0, 5).toUpperCase()
    const randomNumbers = Math.floor(100000 + Math.random() * 900000)
    const code = `${prefix}${randomNumbers}`
    
    setFormData(prev => ({
      ...prev,
      referralCode: code
    }))
  }

  return (
    <form onSubmit={handleSubmit} className="bg-white p-6 rounded-lg shadow-sm border border-gray-100">
      <div className="mb-6">
        <h2 className="text-lg font-semibold text-gray-800 mb-2">
          {isEdit ? 'Edit Referral' : 'Create New Referral'}
        </h2>
        <p className="text-gray-600 text-sm">
          {isEdit 
            ? 'Update the referral information below' 
            : 'Fill in the information below to create a new referral'}
        </p>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-6">
        <div>
          <label htmlFor="referrer" className="block text-sm font-medium text-gray-700 mb-1">
            Referrer Name*
          </label>
          <Input
            id="referrer"
            name="referrer"
            value={formData.referrer}
            onChange={handleChange}
            required
          />
        </div>

        <div>
          <label htmlFor="referrerLocation" className="block text-sm font-medium text-gray-700 mb-1">
            Referrer's Location*
          </label>
          <Input
            id="referrerLocation"
            name="referrerLocation"
            value={formData.referrerLocation}
            onChange={handleChange}
            placeholder="Full address"
            required
          />
        </div>

        <div>
          <label htmlFor="referralCode" className="block text-sm font-medium text-gray-700 mb-1">
            Referral Code*
          </label>
          <div className="flex gap-2">
            <Input
              id="referralCode"
              name="referralCode"
              value={formData.referralCode}
              onChange={handleChange}
              className="font-mono"
              readOnly={!isEdit}
              required
            />
            {!isEdit && (
              <Button 
                type="button" 
                variant="outline" 
                onClick={generateReferralCode}
                disabled={!formData.referrer}
              >
                Generate
              </Button>
            )}
          </div>
        </div>

        <div>
          <label htmlFor="referredCustomer" className="block text-sm font-medium text-gray-700 mb-1">
            Referred Customer*
          </label>
          <Input
            id="referredCustomer"
            name="referredCustomer"
            value={formData.referredCustomer}
            onChange={handleChange}
            required
          />
        </div>

        <div>
          <label htmlFor="referredLocation" className="block text-sm font-medium text-gray-700 mb-1">
            Referred Location*
          </label>
          <Input
            id="referredLocation"
            name="referredLocation"
            value={formData.referredLocation}
            onChange={handleChange}
            placeholder="Full address"
            required
          />
        </div>

        <div>
          <label htmlFor="status" className="block text-sm font-medium text-gray-700 mb-1">
            Status*
          </label>
          <Select
            id="status"
            name="status"
            value={formData.status}
            onChange={handleChange}
            required
          >
            <option value="Pending">Pending</option>
            <option value="Quote Provided">Quote Provided</option>
            <option value="Installation Scheduled">Installation Scheduled</option>
            <option value="Completed">Completed</option>
          </Select>
        </div>

        <div>
          <label htmlFor="rewardStatus" className="block text-sm font-medium text-gray-700 mb-1">
            Reward Status*
          </label>
          <Select
            id="rewardStatus"
            name="rewardStatus"
            value={formData.rewardStatus}
            onChange={handleChange}
            required
          >
            <option value="Pending">Pending</option>
            <option value="Paid">Paid</option>
          </Select>
        </div>

        <div>
          <label htmlFor="amount" className="block text-sm font-medium text-gray-700 mb-1">
            Reward Amount*
          </label>
          <Input
            id="amount"
            name="amount"
            value={formData.amount}
            onChange={handleChange}
            required
          />
        </div>
      </div>

      <div className="flex justify-end gap-3">
        <Button type="button" variant="outline" onClick={onCancel} className="gap-2">
          <X className="h-4 w-4" />
          Cancel
        </Button>
        <Button type="submit" className="gap-2">
          <Save className="h-4 w-4" />
          {isEdit ? 'Update Referral' : 'Create Referral'}
        </Button>
      </div>
    </form>
  )
} 
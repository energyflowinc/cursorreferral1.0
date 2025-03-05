import { ReferralStatus, RewardStatus } from '../entities/referral.entity';

export class CreateReferralDto {
  referrer: string;
  referrerLocation: string;
  referralCode: string;
  referredCustomer: string;
  referredLocation: string;
  status?: ReferralStatus;
  rewardStatus?: RewardStatus;
  amount?: string;
  email?: string;
  phone?: string;
  notes?: string;
} 
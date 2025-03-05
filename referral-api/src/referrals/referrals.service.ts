import { Injectable, NotFoundException } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';
import { CreateReferralDto } from './dto/create-referral.dto';
import { UpdateReferralDto } from './dto/update-referral.dto';
import { Referral } from './entities/referral.entity';

@Injectable()
export class ReferralsService {
  constructor(
    @InjectRepository(Referral)
    private referralsRepository: Repository<Referral>,
  ) {}

  async create(createReferralDto: CreateReferralDto): Promise<Referral> {
    const referral = this.referralsRepository.create(createReferralDto);
    return this.referralsRepository.save(referral);
  }

  async findAll(): Promise<Referral[]> {
    return this.referralsRepository.find({
      order: { createdAt: 'DESC' },
    });
  }

  async findOne(id: number): Promise<Referral> {
    const referral = await this.referralsRepository.findOne({ where: { id } });
    if (!referral) {
      throw new NotFoundException(`Referral with ID ${id} not found`);
    }
    return referral;
  }

  async update(id: number, updateReferralDto: UpdateReferralDto): Promise<Referral> {
    const referral = await this.findOne(id);
    Object.assign(referral, updateReferralDto);
    return this.referralsRepository.save(referral);
  }

  async remove(id: number): Promise<void> {
    const result = await this.referralsRepository.delete(id);
    if (result.affected === 0) {
      throw new NotFoundException(`Referral with ID ${id} not found`);
    }
  }

  async findByReferralCode(referralCode: string): Promise<Referral> {
    const referral = await this.referralsRepository.findOne({ where: { referralCode } });
    if (!referral) {
      throw new NotFoundException(`Referral with code ${referralCode} not found`);
    }
    return referral;
  }

  async generateReferralCode(referrer: string): Promise<string> {
    // Generate a referral code using the first 5 letters of the referrer's name
    // and 6 random numbers
    const prefix = referrer.slice(0, 5).toUpperCase();
    const randomNumbers = Math.floor(100000 + Math.random() * 900000);
    const code = `${prefix}${randomNumbers}`;
    
    // Check if the code already exists
    const existingReferral = await this.referralsRepository.findOne({ where: { referralCode: code } });
    if (existingReferral) {
      // If it exists, generate another one
      return this.generateReferralCode(referrer);
    }
    
    return code;
  }
} 
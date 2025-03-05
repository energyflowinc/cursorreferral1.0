import { Controller, Get, Post, Body, Patch, Param, Delete, HttpCode, Query } from '@nestjs/common';
import { ReferralsService } from './referrals.service';
import { CreateReferralDto } from './dto/create-referral.dto';
import { UpdateReferralDto } from './dto/update-referral.dto';
import { Referral } from './entities/referral.entity';

@Controller('referrals')
export class ReferralsController {
  constructor(private readonly referralsService: ReferralsService) {}

  @Post()
  create(@Body() createReferralDto: CreateReferralDto): Promise<Referral> {
    return this.referralsService.create(createReferralDto);
  }

  @Get()
  findAll(): Promise<Referral[]> {
    return this.referralsService.findAll();
  }

  @Get(':id')
  findOne(@Param('id') id: string): Promise<Referral> {
    return this.referralsService.findOne(+id);
  }

  @Patch(':id')
  update(@Param('id') id: string, @Body() updateReferralDto: UpdateReferralDto): Promise<Referral> {
    return this.referralsService.update(+id, updateReferralDto);
  }

  @Delete(':id')
  @HttpCode(204)
  remove(@Param('id') id: string): Promise<void> {
    return this.referralsService.remove(+id);
  }

  @Get('code/:code')
  findByReferralCode(@Param('code') code: string): Promise<Referral> {
    return this.referralsService.findByReferralCode(code);
  }

  @Get('generate-code')
  generateReferralCode(@Query('referrer') referrer: string): Promise<{ code: string }> {
    return this.referralsService.generateReferralCode(referrer).then(code => ({ code }));
  }
} 
import { Injectable } from '@nestjs/common';
import { CreateReportDto } from './dto/create-report.dto';
import { UpdateReportDto } from './dto/update-report.dto';
import { ReportRepository } from './infrastructure/persistence/report.repository';
import { IPaginationOptions } from '../utils/types/pagination-options';
import { Report } from './domain/report';

@Injectable()
export class ReportsService {
  constructor(private readonly reportRepository: ReportRepository) {}

  create(createReportDto: CreateReportDto) {
    return this.reportRepository.create(createReportDto);
  }

  findAllWithPagination({
    paginationOptions,
  }: {
    paginationOptions: IPaginationOptions;
  }) {
    return this.reportRepository.findAllWithPagination({
      paginationOptions: {
        page: paginationOptions.page,
        limit: paginationOptions.limit,
      },
    });
  }

  findOne(id: Report['id']) {
    return this.reportRepository.findById(id);
  }

  update(id: Report['id'], updateReportDto: UpdateReportDto) {
    return this.reportRepository.update(id, updateReportDto);
  }

  remove(id: Report['id']) {
    return this.reportRepository.remove(id);
  }
}

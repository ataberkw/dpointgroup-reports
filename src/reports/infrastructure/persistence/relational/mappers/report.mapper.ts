import { Report } from '../../../../domain/report';
import { ReportEntity } from '../entities/report.entity';

export class ReportMapper {
  static toDomain(raw: ReportEntity): Report {
    const domainEntity = new Report();
domainEntity.ownerId = raw.ownerId;
domainEntity.body = raw.body;
    domainEntity.id = raw.id;
    domainEntity.createdAt = raw.createdAt;
    domainEntity.updatedAt = raw.updatedAt;

    return domainEntity;
  }

  static toPersistence(domainEntity: Report): ReportEntity {
    const persistenceEntity = new ReportEntity();
persistenceEntity.ownerId = domainEntity.ownerId;
persistenceEntity.body = domainEntity.body;
    if (domainEntity.id) {
      persistenceEntity.id = domainEntity.id;
    }
    persistenceEntity.createdAt = domainEntity.createdAt;
    persistenceEntity.updatedAt = domainEntity.updatedAt;

    return persistenceEntity;
  }
}

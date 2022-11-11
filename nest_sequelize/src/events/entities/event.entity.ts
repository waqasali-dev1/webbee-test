import {
  Table,
  Column,
  Model,
  AutoIncrement,
  PrimaryKey,
  ForeignKey,
  HasMany
} from 'sequelize-typescript';
import { ModelAttributeColumnOptions } from 'sequelize';
import { Injectable } from '@nestjs/common';
import Workshop from './workshop.entity';

@Injectable()
@Table
export default class Event extends Model {
  @AutoIncrement
  @PrimaryKey
  @Column
  id: number;

  @Column
  name: string;

  @HasMany(() => Workshop)
  workshops:Workshop;
  
  @Column({ type: 'datetime' } as ModelAttributeColumnOptions)
  createdAt: string;
}

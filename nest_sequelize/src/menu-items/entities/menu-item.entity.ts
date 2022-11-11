import {
  Table,
  Column,
  Model,
  AutoIncrement,
  PrimaryKey,
  HasMany,
  ForeignKey
} from 'sequelize-typescript';
import { ModelAttributeColumnOptions } from 'sequelize';
import { Injectable } from '@nestjs/common';

@Injectable()
@Table({tableName: 'menu_item'})
export default class MenuItem extends Model {
  @AutoIncrement
  @PrimaryKey
  @Column
  id: number;

  @Column
  name: string;

  @Column
  url: string;

  @ForeignKey(() => MenuItem)
  @Column({
    type: 'integer',
    defaultValue: null,
  } as ModelAttributeColumnOptions)
  parentId: number;

  @HasMany(() => MenuItem)
  children:MenuItem;

  @Column({ type: 'datetime' } as ModelAttributeColumnOptions)
  createdAt: string;
}

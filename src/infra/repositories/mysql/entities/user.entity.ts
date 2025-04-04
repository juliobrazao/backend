import { Column, Entity, PrimaryGeneratedColumn } from 'typeorm';

@Entity()
export class UserEntity {
  @PrimaryGeneratedColumn('uuid')
  id: string;

  @Column({
    name: 'user_id',
    length: 50,
    type: 'varchar',
  })
  userId: string;

  @Column({
    name: 'name',
    length: 100,
    type: 'varchar',
  })
  name: string;

  @Column({
    name: 'email',
    length: 50,
    type: 'varchar',
    unique: true,
  })
  email: string;

  @Column({
    name: 'created_at',
    type: 'bigint',
  })
  createdAt: number;

  @Column({
    name: 'is_admin',
    type: 'boolean',
    default: false,
  })
  isAdmin: boolean;

  @Column({
    name: 'is_active',
    type: 'boolean',
    default: true,
  })
  isActive: boolean;
}

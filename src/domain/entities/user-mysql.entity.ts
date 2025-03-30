import { Column, Entity, PrimaryGeneratedColumn } from 'typeorm';

@Entity()
export class UserMySQLEntity {
  @PrimaryGeneratedColumn()
  id: number;

  @Column()
  userId: string;

  @Column()
  name: string;

  @Column()
  email: string;

  @Column()
  isAdmin: boolean;

  @Column()
  createdAt: Date;
}

import { Entity, Column, PrimaryGeneratedColumn, ManyToOne, JoinColumn } from 'typeorm';
import Orphanages from './Orphanages';

@Entity('images')
export default class Images {
  
  @PrimaryGeneratedColumn('increment')
  id: string;
  
  @Column()
  path: string;

  @ManyToOne(() => Orphanages, orphanages => orphanages.images)
  @JoinColumn({ name: 'orphanage_id'})
  orphanage: Orphanages;
}
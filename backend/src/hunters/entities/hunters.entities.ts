import { Entity, PrimaryGeneratedColumn, Column } from 'typeorm';

@Entity('hunters_registered')
export class Hunters {
  // Identifiant unique auto-incrémenté de l'utilisateur
  @PrimaryGeneratedColumn()
  id: number;
  // prenom de l'utilisateur
  @Column({ name: 'lastname' })
  lastname: string;

  // Nom d'utilisateur de l'utilisateur
  @Column({ name: 'firstname' })
  firstname: string;

  // Adresse email de l'utilisateur, unique dans la base de données
  @Column({ name: 'email_address' })
  email: string;
  huntersname: any;
  creationDate: any;
  password: any;
}
import {Entity, PrimaryColumn, Column, CreateDateColumn, UpdateDateColumn} from "typeorm";
import { v4 as uuid } from 'uuid';

//referenciando a tabela de usuários
@Entity('users')
class User {
    /**
     * obs: a inserção do id será feita pela própria entidade,
     * por isso a utilização do readonly
     */
    @PrimaryColumn()
    readonly id: string;

    @Column()
    name: string;

    @Column()
    email: string;

    @Column()
    admin: boolean;

    @CreateDateColumn()
    created_at: Date;

    @CreateDateColumn()
    updated_at: Date;

    constructor() {
        /**
         * Será executado sempre que não houver id, significa que um novo
         * usuário está sendo criado, portanto um uuid será gerado.
         */
        if(!this.id){
            this.id = uuid();
        }
    }
}

export { User };

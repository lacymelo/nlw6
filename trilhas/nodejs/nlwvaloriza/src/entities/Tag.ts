import {Entity, PrimaryColumn, Column, CreateDateColumn} from "typeorm";
import { v4 as uuid } from 'uuid';

@Entity('tags')
class Tag{
    @PrimaryColumn()
    readonly id: string;

    @Column()
    name: string;

    @CreateDateColumn()
    created_at: Date;

    @CreateDateColumn()
    updated_at: Date;

    constructor(){
        /**
         * Será executado sempre que não houver id, significa que uma nova
         * tag está sendo criada, portanto um uuid será gerado.
         */

        if(!this.id){
            this.id = uuid();
        }
    }
}

export { Tag };
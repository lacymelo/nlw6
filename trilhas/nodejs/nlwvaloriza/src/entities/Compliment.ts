import {Column, CreateDateColumn, Entity, JoinColumn, ManyToOne, PrimaryColumn} from "typeorm";

import { v4 as uuid } from 'uuid';
import { Tag } from "./Tag";
import { User } from "./User";

@Entity('compliments')
export class Compliment{
    @PrimaryColumn()
    readonly id: string;

    @JoinColumn({name: "user_sender"})
    @ManyToOne(() => User)
    userSender: User;

    @Column()
    user_sender: string;

    @JoinColumn({name: "user_receiver"})
    @ManyToOne(() => User)
    userReceiver: User;

    @Column()
    user_receiver: string;

    @Column()
    tag_id: string;

    @JoinColumn({name: "tag_id"})
    @ManyToOne(() => Tag)
    tag: Tag;

    @Column()
    message: string;

    @CreateDateColumn()
    created_at: Date;

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

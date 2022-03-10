import { compare } from "bcryptjs";
import { sign } from "jsonwebtoken";
import { getCustomRepository } from "typeorm";
import { UsersRepositories } from "../repositories/UsersRepositories";


interface IAuthenticateUserRequest {
    email: string;
    password: string;
}
class AuthenticateUserService {
    async execute({ email, password }: IAuthenticateUserRequest) {
        const userRepository = getCustomRepository(UsersRepositories);
        //verificar se o email existe
        const user = await userRepository.findOne({
            email
        });

        if(!user){
            throw new Error('Email/Password incorrect.');
        }

        //verificar se senha está correta
        const passwordMatch = await compare(password, user.password);

        if(!passwordMatch){
            throw new Error('Email/Password incorrect.');
        }

        //gerar token
        const token = sign({
            email: user.email

        }, "76b543b67e75d2aa9169f772416abf17", {
            subject: user.id,
            expiresIn: "1d"
        });

        return token;
    }
}

export { AuthenticateUserService }
import { Injectable } from '@nestjs/common';
import { CreateUserDto } from './dto/create-user.dto';
import { UpdateUserDto } from './dto/update-user.dto';

@Injectable()
export class UsersService {

    private users = [
        {
            "id": 1,
            "name": "a",
            "email": "a.email",
            "role": "INTERN",
        },

        {
            "id": 2,
            "name": "b",
            "email": "b.email",
            "role": "INTERN",
        },

        {
            "id": 3,
            "name": "c",
            "email": "c.email",
            "role": "ENGINEER",
        },

        {
            "id": 4,
            "name": "d",
            "email": "d.email",
            "role": "ENGINEER",
        },

        {
            "id": 5,
            "name": "e",
            "email": "e.email",
            "role": "ADMIN",
        }
    ]


    findAll(role?: 'INTERN' | 'ENGINEER' | 'ADMIN') {
        if (role) {
            return this.users.filter(user => user.role === role);
        }
    }

    findOne(id: number) {
        const user = this.users.find(user => user.id === id)

        return user;
    }

    create(createUserDto: CreateUserDto) {
        const usersByHighestID = [...this.users].sort((a,b) => b.id - a.id)
        const newUser = {
            id: usersByHighestID[0].id + 1, ...createUserDto
        }

        this.users.push(newUser)
        return newUser;
    }

    update(id: number, updateUserDto: UpdateUserDto) {
        this.users = this.users.map(user => {
            if(user.id === id) {
                return { ...user, ...updateUserDto }
            }
            return user
        })
        return this.findOne(id);
    }

    delete(id: number) {
        const removedUser = this.findOne(id)

        this.users = this.users.filter(user => user.id !== id)

        return removedUser;
    }
}

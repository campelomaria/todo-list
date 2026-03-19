import { Injectable } from "@nestjs/common";
import { PrismaService } from "src/shared/databases/prisma.database";

@Injectable()
export class FindByIdTodoRepository {
    findById(id: string) {
        throw new Error("Method not implemented.");
    }
    constructor(private readonly prisma: PrismaService) {}

    async execute(id:string) {
        return await this.prisma.todo.findUnique({
            where: {
                id
            }
        });
    }
}
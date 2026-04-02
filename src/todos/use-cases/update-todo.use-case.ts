import { Injectable, Logger, NotFoundException } from "@nestjs/common";
import { UpdateTodoRepository } from "../repository";
import { UpdateTodoDto } from "../dto/update-todo.dto";

@Injectable()
export class UpdateTodoUseCase {
    updateTodoRepository: any;
    constructor(
        private readonly UpdateTodoRepository: UpdateTodoRepository,
        private readonly loggers: Logger,
    ) {}

    async execute(id: string, data: UpdateTodoDto) {
        try {
            this.loggers.log('Updating toDo... ');
            const todo = await this.UpdateTodoRepository.execute(id, data);
            this.loggers.log('ToDo update sucessfully');
            return todo;
        } catch (error) {
            this.loggers.error(error);
            throw new Error('Failed to update toDo');
        }
    }
}
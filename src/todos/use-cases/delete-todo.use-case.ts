import { Injectable, Logger, NotFoundException } from "@nestjs/common";
import { FindByIdTodoRepository } from "../repository";

@Injectable()
export class FindTodoUseCase {
    deleteTodoRepository: any;
    constructor(
        private readonly FindByIdTodoRepository: FindByIdTodoRepository,
        private readonly loggers: Logger,
    ) {}

    async execute(id: string) {
        try {
            this.loggers.log('Deleting toDo... ');
            const todo = await this.FindByIdTodoRepository.findById(id);
            await this.deleteTodoRepository.delete(id);
            this.loggers.log('ToDo deleted sucessfully');
            return todo;
        } catch (error) {
            this.loggers.error(error);
            throw new Error('Failed to find toDo');
        }
    }
}
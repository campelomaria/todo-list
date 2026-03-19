import { Injectable, Logger, NotFoundException } from "@nestjs/common";
import { FindByIdTodoRepository } from "../repository";

@Injectable()
export class FindTodoUseCase {
    updateTodoRepository: any;
    constructor(
        private readonly FindByIdTodoRepository: FindByIdTodoRepository,
        private readonly loggers: Logger,
    ) {}

    async execute(id: string) {
        try {
            this.loggers.log('Updating toDo... ');
            const todo = await this.FindByIdTodoRepository.findById(id);
            await this.updateTodoRepository.update(id);
            this.loggers.log('ToDo update sucessfully');
            return todo;
        } catch (error) {
            this.loggers.error(error);
            throw new Error('Failed to update toDo');
        }
    }
}
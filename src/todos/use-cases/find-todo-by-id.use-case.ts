import { Injectable, Logger } from "@nestjs/common";
import { FindByIdTodoRepository } from "../repository";

@Injectable()
export class FindTodoUseCase {
    constructor(
        private readonly FindByIdTodoRepository: FindByIdTodoRepository,
        private readonly loggers: Logger,
    ) {}

    async execute(id: string) {
        try {
            this.loggers.log('Creating toDo... ');
            const todo = await this.FindByIdTodoRepository.execute(id);
            this.loggers.log('ToDo finded sucessfully');
            return todo;
        } catch (error) {
            this.loggers.error(error);
            throw new Error('Failed to find toDo');
        }
    }
}
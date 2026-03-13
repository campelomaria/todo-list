import { Injectable, Logger } from "@nestjs/common";
import { FindTodoRepository } from "../repository";

@Injectable()
export class FindTodoUseCase {
    constructor(
        private readonly FindTodoRepository: FindTodoRepository,
        private readonly loggers: Logger,
    ) {}

    async execute() {
        try {
            this.loggers.log('Creating toDo... ');
            const todo = await this.FindTodoRepository.find();
            this.loggers.log('ToDo finded sucessfully');
            return todo;
        } catch (error) {
            this.loggers.error(error);
            throw new Error('Failed to find toDo');
        }
    }
}
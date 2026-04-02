import { Injectable, Logger } from "@nestjs/common";
import { DeleteTodoRepository } from "../repository";

@Injectable()
export class DeleteTodoUseCase {
    deleteTodoRepository: any;
    constructor(
        private readonly DeleteTodoRepository: DeleteTodoRepository,
        private readonly loggers: Logger,
    ) {}

    async execute(id: string) {
        try {
            this.loggers.log('Deleting toDo... ');
            const todo = await this.DeleteTodoRepository.execute(id);
            this.loggers.log('ToDo deleted sucessfully');
            return todo;
        } catch (error) {
            this.loggers.error(error);
            throw new Error('Failed to find toDo');
        }
    }
}
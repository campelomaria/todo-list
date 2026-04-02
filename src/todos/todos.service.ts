import { Injectable } from '@nestjs/common';
import { CreateTodoDto } from './dto/create-todo.dto';
import { UpdateTodoDto } from './dto/update-todo.dto';
import { CreateTodoUseCase, DeleteTodoUseCase, FindByIdTodoUseCase, FindTodoUseCase, UpdateTodoUseCase } from './use-cases';

@Injectable()
export class TodosService {
constructor(
  private readonly createTodoUseCase: CreateTodoUseCase,
  private readonly deleteTodoUseCase: DeleteTodoUseCase,
  private readonly findTodoUseCase: FindTodoUseCase,
  private readonly updateTodoUseCase: UpdateTodoUseCase,
  private readonly findByIdTodoUseCase: FindByIdTodoUseCase,
) {}

  async create(data: CreateTodoDto) {
    return await this.createTodoUseCase.execute(data);
  }

  async findAll() {
    return await this.findTodoUseCase.execute();
  }

  async findOne(id: string) {
    return await this.findByIdTodoUseCase.execute(id);
  }

  async update(id: string, data: UpdateTodoDto) {
    return await this.updateTodoUseCase.execute(id, data);
  }

  async remove(id: string) {
    return await this.deleteTodoUseCase.execute(id);
  }
}

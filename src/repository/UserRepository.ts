import { GetData, RequestData } from '../model/Type';

export interface UserRepository {
  get(): GetData[];
  submit(reqData: RequestData): void;
  delete(id: string): void;
  update(id: string): void;
  test(): void;
}

export class DefaultUserRepository implements UserRepository {
  get(): GetData[] {
    return [];
  }
  submit(reqData: RequestData): void {}
  delete(id: string): void {}
  update(id: string): void {}
  test(): void {}
}

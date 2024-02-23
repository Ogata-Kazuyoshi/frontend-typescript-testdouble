import { GetData, RequestData } from '../../model/Type';
import { UserRepository } from '../../repository/UserRepository';

export class SpyUserRepository implements UserRepository {
  get_isCalled = false;
  submit_isCalled = false;

  get(): GetData[] {
    this.get_isCalled = true;
    return [];
  }
  submit(reqData: RequestData): void {
    this.submit_isCalled = true
    console.log(reqData)
  }
  delete(id: string): void {console.log(id)}
  update(id: string): void {console.log(id)}
  test(): void {}
}

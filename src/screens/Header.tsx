import {
  DefaultUserRepository,
  UserRepository,
} from '../repository/UserRepository';
import {RequestDataBuilder} from "../tests/__test_helper__/builder/RequestDataBuilder.ts";

type Props = {
  name?: string;
  setName?: (name: string) => void;
  userRepository?: UserRepository;
};

export const Header = ({
  name,
  setName,
  userRepository = new DefaultUserRepository(),
}: Props) => {
  console.log(name);
  console.log(setName);
  console.log(userRepository);

  const dummy = new RequestDataBuilder()
  dummy.setName("tanaka")
  dummy.setAge(30)

  return <>
    <button onClick={()=>{userRepository.submit(dummy)}}>投稿</button>
  </>;
};
